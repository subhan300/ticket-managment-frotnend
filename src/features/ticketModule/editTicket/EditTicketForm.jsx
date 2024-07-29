// import React from 'react';
import Drawer from "@mui/material/Drawer";
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
} from "@mui/material";

import DrawerHeader from "../../../components/drawerHeader";
import TicketForm from "../ticketForm/TicketForm";
import { useEditTicketMutation } from "../../../apis/apiSlice";
import useUpload from "../../../hooks/useUpload";
import { CommentSection } from "../../comment";
import useUserStore from "../store/UserStore";
import useStore from "../../../store";

const FullWidthDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    minWidth: "600px",
    boxSizing: "border-box",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
const EditTicketForm = ({ isOpen, handleDrawer }) => {
  const {
    uploadToCloudinary,
    isLoading: cloudinaryLoading,
    error: cloudinaryError,
  } = useUpload();
  const [edit, setEdit] = useState(false);
  const { openAlert } = useStore((state) => state);
  const [editTicket, result] = useEditTicketMutation();
  const { isLoading, isSuccess } = result;
  const { setEditData, ticket: initialValues } = useUserStore((state) => state);
  // console.log("initial values=============>", initialValues);
  const {
    issue,
    images,
    description,
    assignedTo,
    status,
    issueLocation,
  } = initialValues;
  console.log("issur",issueLocation)
  const handleOnFinish = async (values) => {
    try {
      if (values.images) {
        const uploadedImages = await uploadToCloudinary(values.images);
        const imgCollection = [...images, ...uploadedImages];
        values = { ...values, images: imgCollection };
      }

      const editRes = await editTicket(values);
      if (editRes?.data) {
        setEditData(editRes.data);
        openAlert("Ticket Updated SuccessFully");
      }
    } catch (err) {
      openAlert("Error Updating Ticket", "error");
    } finally {
      setEdit(false);
    }

    //  navigate("/")
  };

  return (
    <FullWidthDrawer
      anchor="right"
      open={Boolean(isOpen)}
      SlideProps={{
        sx: { width: "auto" },
      }}
      onClose={() => handleDrawer(false)}
    >
      <DrawerHeader title={"Edit Ticket"} handleTicketDialog={handleDrawer}>
        <Button
          // variant="contained"
          sx={{ color: "white" }}
          variant="text"
          onClick={() => {
            setEdit(!edit);
          }}
        >
          {edit ? "Leave Editing Mode" : "Edit Mode"}
        </Button>

        {/* {edit && (
          <Button
            variant="text"
            sx={{ marginLeft: "10px", color: "white" }}
            onClick={() => {
              setEdit(!edit);
            }}
          >
            save
          </Button>
        )} */}
      </DrawerHeader>

      <Box sx={{ maxWidth: 800, padding: "22px 12px" }}>
        {!edit && (
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
                <Typography variant="h5">Ticket Assigned :</Typography>
                <Typography variant="h6">{assignedTo?.name}</Typography>
              </Grid>
              <Grid xs={12} sm={12} item>
                <Typography variant="h5">Status :</Typography>
                <Typography variant="h6">{status}</Typography>
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
              <CommentSection comments={initialValues.comments} />
            </Box>
          </>
        )}
        {edit && (
          <>
            <Backdrop
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={isLoading || cloudinaryLoading}
              // onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <TicketForm
              handleOnFinish={handleOnFinish}
              initialValues={initialValues}
              edit={true}
            />
          </>
        )}
      </Box>
    </FullWidthDrawer>
  );
};

export default EditTicketForm;
