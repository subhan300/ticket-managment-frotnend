// import React from 'react';
import Drawer from "@mui/material/Drawer";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  MenuItem,
  Grid,
  Typography,
  Backdrop,
  CircularProgress,
  TextField,
  IconButton,
} from "@mui/material";

import DrawerHeader from "../../../components/drawerHeader";
// import TicketForm from "../ticketForm/TicketForm";
import { useEditTicketMutation } from "../../../apis/apiSlice";
import useUpload from "../../../hooks/useUpload";
import { CommentSection } from "../../comment";
import { useTechnicianStore } from "../store";
import { Formik, useFormik } from "formik";
import { statusCollection } from "../../../data";
import { getFilterTechnician } from "../../../utils";
import useStore from "../../../store";
// Constants
const assignedToMembers = ["Not Assigned", "Me", "Jones", "David", "Kingzi"];

const FullWidthDrawer = styled(Drawer)(({ theme }) => ({
  border: "1px solid red",
  "& .MuiDrawer-paper": {
    // width: "100%",
    boxSizing: "border-box",
    backgroundColor: "white",
    // marginTop:"10px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
const EditTicketForm = ({  isOpen, handleDrawer }) => {
 
  const { technicians,setEditData,data ,ticket} = useTechnicianStore((state) => state);
  const {openAlert}=useStore(state=>state)
  const [edit, setEdit] = useState({ assignedTo: false, status: false ,});
  const [editTicket, result] = useEditTicketMutation();
  const { isLoading, isSuccess } = result;
  console.log("ticket==", ticket,"data",data,"is open==",isOpen);
  const {
    issue,
    images=[],
    description,
    assignedTo:assignedToValue,
    status,
    issueLocation,
   
  } =  ticket;
  const [assignedTo, setAssignedTo] = useState(assignedToValue);

  // useEffect(() => {
  //   if (isSuccess) {
  //     setEdit(false);
  //   }
  // }, [isSuccess]);

  const formikAssignedTo = useFormik({
    initialValues: ticket,
    // validationSchema: validationSchema,
    // validateOnMount: true,
    onSubmit: async (values) => {
      console.log("values", values);
      const technician=getFilterTechnician(technicians,assignedTo)
      editTicket({assignedTo:technician._id,_id:values._id});
      handleEdit("assignedTo",false);
      setEditData(values)

    },
  });
  const formikStatus = useFormik({
    initialValues: ticket,
    // validationSchema: validationSchema,
    // validateOnMount: true,
    onSubmit: async (values) => {
      editTicket({status:values.status,_id:values._id});
      handleEdit("status",false);
      setEditData(values)

    },
  });
  const handleEdit = (name, val) => {
    setEdit((prev) => ({ ...prev, [name]: val }));
  };
  const handleCancel = (name, val,form) => {
    form.setValues(ticket);
    handleEdit(name, val);


  };

 useEffect(()=>{
   if(isSuccess){
    openAlert("Ticket Updated Successfully")
   }
 },[isSuccess])
  // console.log("formik.values.assignedTo", formik.values.assignedTo);
  return (
    <FullWidthDrawer
      anchor="right"
      open={isOpen}
      SlideProps={{
        sx: { width: "auto" },
      }}
      onClose={() => handleDrawer(false)}
    >
      <DrawerHeader
        title={"Edit Ticket"}
        handleTicketDialog={handleDrawer}
      ></DrawerHeader>

      <Box sx={{ maxWidth: 800, padding: "22px 12px" }}>
        <>
         
            <Grid container spacing={4}>
              <Grid xs={12} item>
                <Typography variant="h5">Issue :</Typography>
                <Typography variant="h6">{issue}</Typography>
              </Grid>
              <Grid xs={12} item>
                <Typography variant="h5">Description :</Typography>
                <Typography variant="h6">{description}</Typography>
              </Grid>
              <Grid xs={12} sm={12} item>
              <form onSubmit={formikAssignedTo.handleSubmit}>
                <Box
                  sx={{display: "flex",justifyContent: "flex-start",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                 
                  <Typography variant="h5">Ticket Assigned</Typography>
                  {!edit.assignedTo && (
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={() => {
                        handleEdit("assignedTo", true);
                      }}
                      aria-label="close"
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                  {edit.assignedTo && (
                    <>
                      <IconButton
                        edge="start"
                        color="inherit"
                      
                        type="submit"
                        aria-label="close"
                      >
                        <SaveIcon />
                      </IconButton>
                      <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => {
                          handleCancel("assignedTo", false,formikAssignedTo);
                        }}
                        aria-label="close"
                        
                      >
                        <CancelIcon />
                      </IconButton>
                    </>
                  )}
                </Box>
                {edit.assignedTo && (
                  <Box>
                    <TextField
                      select
                      fullWidth
                      id="assignedTo"
                      name="assignedTo"
                      label="Assigned"
                      onChange={formikAssignedTo.handleChange}
                      value={formikAssignedTo.values.assignedTo}

                      // error={formik.touched.status && Boolean(formik.errors.status)}
                      // helperText={formik.touched.status && formik.errors.status}
                    >
                      {technicians.map((option) => (
                        <MenuItem
                          onChange={() => {
                          setAssignedTo(option._id);
                          }}
                          key={option._id}
                          value={option.name}
                        >
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                )}
                {!edit.assignedTo && (
                  <Typography variant="h6">
                    {assignedTo ? assignedTo : "Not Assigned"}
                  </Typography>
                )}
                </form>
              </Grid>
              <Grid xs={12} sm={12} item>
                <form onSubmit={formikStatus.handleSubmit}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h5">Status</Typography>
                    {!edit.status && (
                      <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => {
                          handleEdit("status", true);
                        }}
                        aria-label="close"
                      >
                        <EditIcon />
                      </IconButton>
                    )}
                    {edit.status && (
                      <>
                        <IconButton
                          edge="start"
                          color="inherit"
                          
                          aria-label="close"
                          type="submit"
                        >
                          <SaveIcon />
                        </IconButton>
                        <IconButton
                          edge="start"
                          color="inherit"
                          onClick={() => {
                            handleCancel("status", false,formikStatus);
                          }}
                          aria-label="close"
                        >
                          <CancelIcon />
                        </IconButton>
                      </>
                    )}
                  </Box>
                </Box>
                {edit.status && (
                  <Box>
                    <TextField
                      select
                      fullWidth
                      id="status"
                      name="status"
                      label="Status"
                      value={formikStatus.values.status}
                      onChange={formikStatus.handleChange}

                      // error={formik.touched.status && Boolean(formik.errors.status)}
                      // helperText={formik.touched.status && formik.errors.status}
                    >
                      {statusCollection.map((option) => (
                        <MenuItem
                          onChange={() => {
                            handleChange(option);
                          }}
                          key={option}
                          value={option}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                )}
                {!edit.status && <Typography variant="h6">{status}</Typography>}
                </form>
              </Grid>
              <Grid xs={12} sm={12} item>
                <Typography variant="h5">Attachments</Typography>
              </Grid>
              {images.map((val, i) => {
                return (
                  <Grid key={i} xs={6} sm={4} item>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={val}
                    ></img>
                  </Grid>
                );
              })}
              <Grid xs={12} sm={12} item>
                <Typography variant="h5">Location Details :</Typography>
              </Grid>

              <Grid xs={12} sm={6} item>
                <Typography variant="h5">Place</Typography>
                <Typography variant="h6">
                  {issueLocation.locationName
                    ? issueLocation.locationName
                    : "- - - - - - "}
                </Typography>
              </Grid>

              <Grid xs={12} sm={6} item>
                <Typography variant="h5">Unit</Typography>
                <Typography variant="h6">{issueLocation.unit.name}</Typography>
              </Grid>
              <Grid xs={12} sm={6} item>
                <Typography variant="h5">Room</Typography>
                <Typography variant="h6">{issueLocation.room}</Typography>
              </Grid>

              <Grid xs={12} sm={6} item>
                <Typography variant="h5">Extra Detail</Typography>
                <Typography variant="h6">
                  {issueLocation.extraDetail}
                </Typography>
              </Grid>
            </Grid>
          <Box sx={{ marginTop: "3rem" }}>
            <Typography variant="h5">Comments:</Typography>
            <CommentSection />
          </Box>
        </>
      </Box>
    </FullWidthDrawer>
  );
};

export default EditTicketForm;
