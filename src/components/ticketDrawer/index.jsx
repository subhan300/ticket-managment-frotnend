// import React from 'react';
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { flexBetween } from "../../styles-components/global-styles/styles";
import DrawerHeader from "../drawerHeader";
import TicketForm from "../ticketForm";

// Constants
const statuses = ["OPEN", "PROGRESS", "BLOCKED", "CLOSED"];
const assignedToMembers = ["Not Assigned", "Me", "Jones", "David", "Kingzi"];

const validationSchema = Yup.object({
  userId: Yup.string().required("User ID is required"),
  issue: Yup.string().required("Issue is required"),
  description: Yup.string().required("Description is required"),
  status: Yup.string().oneOf(statuses).required("Status is required"),
  issueLocation: Yup.object({
    locationName: Yup.string().required("Location name is required"),
    unit: Yup.string().required("Unit is required"),
    floor: Yup.string().required("Floor is required"),
    room: Yup.string().required("Room is required"),
    extraDetail: Yup.string(),
  }),
});
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
const EditTicketForm = ({ initialValues, isOpen, handleDrawer }) => {
  const [images, setImages] = useState(initialValues.images || []);
  const [editMode, setEditMode] = useState({
    userId: false,
    issue: false,
    description: false,
    status: false,
    assignedTo: false,
    locationName: false,
    unit: false,
    floor: false,
    room: false,
    extraDetail: false,
  });
  const [edit, setEdit] = useState(false);
  const attachments = [
    "https://www.shutterstock.com/shutterstock/photos/2472949361/display_1500/stock-photo-ultra-wideband-technology-radio-frequency-technology-high-frequency-broadband-short-range-2472949361.jpg",
    "https://www.shutterstock.com/shutterstock/photos/2233924609/display_1500/stock-vector-short-and-custom-urls-url-shortener-technology-and-generator-scissor-cut-an-address-bar-or-link-2233924609.jpg",
    "https://www.shutterstock.com/shutterstock/photos/249041452/display_1500/stock-vector-smartphone-with-speech-bubble-social-media-icons-chat-speech-bubble-and-share-link-symbols-short-249041452.jpg",
  ];
  const handleImageUpload = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prevImages) => prevImages.concat(fileArray));
    formik.setFieldValue("images", formik.values.images.concat(files));
  };

  const handleImageRemove = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newFileList = Array.from(formik.values.images).filter(
      (_, i) => i !== index
    );
    setImages(newImages);
    formik.setFieldValue("images", newFileList);
  };

  const handleEditClick = (field) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  console.log("initial values", initialValues);
  const {
    issue,
    id,
    description,
    assignedTo,
    status,
    issueLocation,
  } = initialValues;
  return (
    <FullWidthDrawer
      anchor="right"
      SlideProps={{
        sx: { width: "70%" },
      }}
      open={isOpen}
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

        {edit && (
          <Button
            variant="text"
            sx={{ marginLeft: "10px", color: "white" }}
            onClick={() => {
              setEdit(!edit);
            }}
          >
            save
          </Button>
        )}
      </DrawerHeader>
      {/* <Box sx={{display:"flex",justifyContent:"flex-end",p:"12px"}}>
        
      </Box> */}
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
                <Typography variant="h6">{assignedTo}</Typography>
              </Grid>
              <Grid xs={12} sm={12} item>
                <Typography variant="h5">Status :</Typography>
                <Typography variant="h6">{status}</Typography>
              </Grid>
              <Grid xs={12} sm={12} item>
                <Typography variant="h5">Attachments</Typography>
              </Grid>
              {attachments.map((val) => {
                return (
                  <Grid xs={6} sm={4} item>
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
                  {issueLocation.locationName}
                </Typography>
              </Grid>

              <Grid xs={12} sm={6} item>
                <Typography variant="h5">Unit</Typography>
                <Typography variant="h6">{issueLocation.unit}</Typography>
              </Grid>
              <Grid xs={12} sm={6} item>
                <Typography variant="h5">Room</Typography>
                <Typography variant="h6">{issueLocation.room}</Typography>
              </Grid>
              <Grid xs={12} sm={6} item>
                <Typography variant="h5">Floor</Typography>
                <Typography variant="h6">{issueLocation.floor}</Typography>
              </Grid>
              <Grid xs={12} sm={6} item>
                <Typography variant="h5">Extra Detail</Typography>
                <Typography variant="h6">
                  {issueLocation.extraDetail}
                </Typography>
              </Grid>
            </Grid>
          </>
        )}
        {edit && <TicketForm />}
      </Box>
    </FullWidthDrawer>
  );
};

export default EditTicketForm;
