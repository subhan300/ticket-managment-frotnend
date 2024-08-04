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
  Select,
  OutlinedInput,
  Checkbox,
  ListItemText,
  FormControlLabel,
} from "@mui/material";

import DrawerHeader from "../../../components/drawerHeader";
// import TicketForm from "../ticketForm/TicketForm";
import {
  useEditTicketMutation,
  useGetInventoryItemsQuery,
} from "../../../apis/apiSlice";
import useUpload from "../../../hooks/useUpload";
import { CommentSection } from "../../comment";
import { useTechnicianStore } from "../store";
import { Formik, useFormik } from "formik";
import { statusCollection } from "../../../data";
import useStore from "../../../store";
import { flexAlignStart } from "../../../styles-components/global-styles/styles";
import InventorySelect from "../../comment/components/InventorySelect";
import { CheckBox } from "@mui/icons-material";
import { assignedToAddInitialObject } from "../../../utils";
import { COMPLETED, NotAssignedId, OPEN, PROGRESS } from "../../../helper";
import useCommentStore from "../../comment/store/CommentStore";
import UseComment from "../../comment/hooks/useComment";

const FullWidthDrawer = styled(Drawer)(({ theme }) => ({
  // border: "1px solid red",
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
const EditTicket = ({ isOpen, handleDrawer }) => {
  const { technicians, setEditData, data, ticket } = useTechnicianStore(
    (state) => state
  );
  const {
    data: inventoryItems = [],
    isLoading: inventoryLoading,
  } = useGetInventoryItemsQuery();
  const { openAlert, user } = useStore((state) => state);
  const { handleAddCommentNote } = UseComment();
  const [edit, setEdit] = useState({
    assignedTo: false,
    status: false,
    inventory: false,
    externalInventory: false,
  });

  const [editTicket, result] = useEditTicketMutation();
  const { isLoading, isSuccess } = result;
  const {
    issue,
    images = [],
    description,
    assignedTo,
    status,
    issueLocation,
    inventoryUsed,
    externalInventory,
    _id,
  } = ticket;

  const formikAssignedTo = useFormik({
    initialValues: { ...ticket, assignedTo: assignedTo._id },
    // validationSchema: validationSchema,
    // validateOnMount: true,
    onSubmit: async (values) => {
      const editRes = await editTicket({
        assignedTo: values.assignedTo,
        _id: values._id,
        status: values.assignedTo===NotAssignedId?OPEN:PROGRESS,
      });
      if (editRes?.data) {
        handleEdit("assignedTo", false);
        setEditData(editRes.data);
      }
    },
  });
  const formikStatus = useFormik({
    initialValues: { ...ticket, assignedTo: assignedTo._id },
    // validationSchema: validationSchema,
    // validateOnMount: true,
    onSubmit: async (values) => {
      const {status,assignedTo}=values;
       if((status===COMPLETED || status===PROGRESS) && assignedTo === NotAssignedId){
         return openAlert("Can't set status for unAssigned Ticket","error")
            
       }
      await editTicket({ status: values.status, _id: values._id });
      handleEdit("status", false);
      setEditData(values);
    },
  });

  const formikInventory = useFormik({
    initialValues: {
      ...ticket,
      assignedTo: assignedTo._id,
      inventoryUsed: inventoryUsed.map((val) => ({
        inventoryId: val._id,
        quantityUsed: val.quantityUsed,
      })),
    },
    onSubmit: async (values) => {
      const { inventoryUsed } = values;
       debugger
      const editRes = await editTicket({
        inventoryUsed,
        _id: values._id,
      });
      const inventorySelected = [];
      const inventoryMapping = inventoryItems.map((val) => {
        const getIndex = inventoryUsed.findIndex(
          (item) => item.inventoryId === val.inventoryId
        );
        if (getIndex > 0) {
          inventorySelected.push({
            ...val,
            quantityUsed: inventoryUsed[getIndex].quantityUsed,
          });
        }
      });
      const formattedNotes = inventorySelected
        .map(
          ({ productName, quantityUsed }) => `
      Inventory Purchase ${productName}: Bought phone with a quantity of ${quantityUsed}
    `
        )
        .join("\n");
      handleAddCommentNote(formattedNotes);
      if (editRes?.data) {
        handleEdit("inventory", false);
        setEditData(editRes.data);
      } else {
        openAlert(editRes.error.data.message, "error");
      }
    },
  });

  const formikExternalInventory = useFormik({
    initialValues: {
      externalInventory,
      _id,
    },
    onSubmit: async (values) => {
      const editRes = await editTicket(values);

      if (editRes?.data) {
        handleEdit("externalInventory", false);
        setEditData(editRes.data);
      } else {
        openAlert(editRes.error.data.message, "error");
      }
    },
  });

  const handleEdit = (name, val) => {
    setEdit((prev) => ({ ...prev, [name]: val }));
  };

  const handleCancel = (name, val, form) => {
    form.setValues(ticket);
    handleEdit(name, val);
  };

  useEffect(() => {
    if (isSuccess) {
      openAlert("Ticket Updated Successfully");
    }
  }, [isSuccess]);

  return (
    <FullWidthDrawer
      anchor="right"
      open={true}
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
                  sx={{
                    ...flexAlignStart,
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
                      {isLoading && <CircularProgress size={22} />}
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
                          handleCancel("assignedTo", false, formikAssignedTo);
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
                      {assignedToAddInitialObject([
                        { _id: user._id, name: user.name },
                      ]).map((option) => (
                        <MenuItem key={option._id} value={option._id}>
                          {option.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>
                )}
                {!edit.assignedTo && (
                  <Typography variant="h6">
                    {assignedTo.name ? assignedTo.name : "Not Assigned"}
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
                        {isLoading && <CircularProgress size={22} />}
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
                            handleCancel("status", false, formikStatus);
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
                            // handleChange(option);
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
            <Grid xs={12} item>
              <form onSubmit={formikInventory.handleSubmit}>
                <Grid xs={12} item sx={{ ...flexAlignStart }}>
                  <Typography variant="h5">Inventory :</Typography>
                  {!edit.inventory && (
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={() => {
                        handleEdit("inventory", true);
                      }}
                      aria-label="close"
                    >
                      <EditIcon />
                    </IconButton>
                  )}
                  {edit.inventory && (
                    <>
                      {isLoading && <CircularProgress size={22} />}
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
                          handleCancel("inventory", false, formikAssignedTo);
                        }}
                        aria-label="close"
                      >
                        <CancelIcon />
                      </IconButton>
                    </>
                  )}
                </Grid>{" "}
                {edit.inventory ? (
                  <InventorySelect
                    formikInventory={formikInventory}
                    inventoryItems={inventoryItems}
                  />
                ) : inventoryUsed.length ? (
                  inventoryUsed.map(
                    (
                      { productImages, productName, quantityUsed, _id },
                      index
                    ) => (
                      <Box
                        key={_id}
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          gap: "1rem",
                          marginTop: "10px",
                          alignItems: "flex-start",
                        }}
                      >
                        <Typography variant="h5">( {index + 1} )</Typography>
                        <Box
                          sx={{
                            // border: "1px solid red",
                            display: "flex",
                            justifyContent: "flex-start",
                            gap: "1rem",
                            alignItems: "flex-start",
                            // background:"lightcyan"
                          }}
                        >
                          <Box>
                            <Box sx={{}}>
                              <Typography variant="h5">
                                Product :
                                <Typography
                                  variant="span"
                                  sx={{
                                    marginLeft: "1rem",
                                    fontWeight: "normal",
                                  }}
                                >
                                  {productName}
                                </Typography>
                              </Typography>
                            </Box>
                            <Box sx={{ marginTop: "6px" }}>
                              <Typography variant="h5">
                                Quantity :
                                <Typography
                                  variant="span"
                                  sx={{
                                    marginLeft: "10px",
                                    fontWeight: "normal",
                                  }}
                                >
                                  {quantityUsed}
                                </Typography>
                              </Typography>{" "}
                            </Box>
                          </Box>
                          <Box sx={{ width: "120px", height: "70px" }}>
                            <img alt="Product Image" src={productImages[0]} />
                          </Box>
                        </Box>
                      </Box>
                    )
                  )
                ) : (
                  <Typography variant="h6">No Inventory Used</Typography>
                )}
              </form>
            </Grid>
            <Grid xs={12} item>
              <form onSubmit={formikExternalInventory.handleSubmit}>
                <Box>
                  <Box sx={{ ...flexAlignStart }}>
                    <Typography variant="h5">External Inventory :</Typography>
                    <Box>
                      {!edit.externalInventory && (
                        <IconButton
                          edge="start"
                          color="inherit"
                          onClick={() => {
                            handleEdit("externalInventory", true);
                          }}
                          aria-label="close"
                        >
                          <EditIcon />
                        </IconButton>
                      )}
                      {edit.externalInventory && (
                        <Box sx={{display:"flex",alignItems:"center",}}>
                          {isLoading && <CircularProgress size={22} />}
                          <IconButton
                            edge="start"
                            color="inherit"
                            type="submit"
                            aria-label="close"
                            sx={{marginLeft:"2px"}}
                          >
                            <SaveIcon />
                          </IconButton>
                          <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => {
                              handleCancel(
                                "externalInventory",
                                false,
                                formikExternalInventory
                              );
                            }}
                            aria-label="close"
                          >
                            <CancelIcon />
                          </IconButton>
                        </Box>
                      )}
                    </Box>
                  </Box>
                  {!edit.externalInventory && (
                    <Box>
                      <Typography variant="h5">{externalInventory}</Typography>{" "}
                    </Box>
                  )}
                  {edit.externalInventory && (
                    <Box>
                      <TextField
                        fullWidth
                        id="externalInventory"
                        name="externalInventory"
                        label="externalInventory"
                        value={formikExternalInventory.values.externalInventory}
                        onChange={formikExternalInventory.handleChange}
                        error={
                          formikExternalInventory.touched.issue &&
                          Boolean(formikExternalInventory.errors.issue)
                        }
                        helperText={
                          formikExternalInventory.touched.issue &&
                          formikExternalInventory.errors.issue
                        }
                      />
                    </Box>
                  )}
                </Box>
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
              <Typography variant="h6">{issueLocation.extraDetail}</Typography>
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

export default EditTicket;
