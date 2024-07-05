import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Grid,
  Typography,
  IconButton,
} from '@mui/material';

// Constants
const statuses = ['OPEN', 'PROGRESS', 'BLOCKED', 'CLOSED'];
const assignedToMembers=["Not Assigned","Me","Jones","David","Kingzi"]

const validationSchema = Yup.object({
  userId: Yup.string().required('User ID is required'),
  issue: Yup.string().required('Issue is required'),
  description: Yup.string().required('Description is required'),
  status: Yup.string().oneOf(statuses).required('Status is required'),
  issueLocation: Yup.object({
    locationName: Yup.string().required('Location name is required'),
    unit: Yup.string().required('Unit is required'),
    floor: Yup.string().required('Floor is required'),
    room: Yup.string().required('Room is required'),
    extraDetail: Yup.string(),
  }),
});

const TicketForm = () => {
    const [images, setImages] = useState([]);
    const handleImageUpload = (event) => {
        const files = event.target.files;
        const fileArray = Array.from(files).map((file) =>
          URL.createObjectURL(file)
        );
        setImages((prevImages) => prevImages.concat(fileArray));
        formik.setFieldValue('images', formik.values.images.concat(files));
      };
    
      const handleImageRemove = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        const newFileList = Array.from(formik.values.images).filter(
          (_, i) => i !== index
        );
        setImages(newImages);
        formik.setFieldValue('images', newFileList);
      };
  const formik = useFormik({
    initialValues: {
      userId: '',
      issue: '',
      description: '',
      assignedTo:"Not Assigned",
      status: 'OPEN',
      issueLocation: {
        locationName: '',
        unit: '',
        floor: '',
        room: '',
        extraDetail: '',
      },
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto',}}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          
        <Grid sx={{ mt:4}} item xs={12}>
            <Typography variant="h5" gutterBottom>
            Describe Issue :
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="issue"
              name="issue"
              label="Issue"
              value={formik.values.issue}
              onChange={formik.handleChange}
              error={formik.touched.issue && Boolean(formik.errors.issue)}
              helperText={formik.touched.issue && formik.errors.issue}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              id="status"
              name="status"
              label="Status"
              value={formik.values.status}
              onChange={formik.handleChange}
              error={formik.touched.status && Boolean(formik.errors.status)}
              helperText={formik.touched.status && formik.errors.status}
            >
              {statuses.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid sx={{mt:5}} item xs={12} sm={6}>
            <TextField
              select
              fullWidth
              id="assignedTo"
              name="assignedTo"
              label="Assigned To"
              value={formik.values.assignedTo}
              onChange={formik.handleChange}
              // error={formik.touched.status && Boolean(formik.errors.status)}
              // helperText={formik.touched.status && formik.errors.status}
            >
              {assignedToMembers.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid  sx={{ mt:6}} item xs={12}>
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />
          </Grid>
          <Grid sx={{ mt:4}} item xs={12}>
          
            <Button
              variant="contained"
              component="label"
            >
              Upload Images
              <input
                type="file"
                hidden
                accept="image/*"
                multiple
                onChange={handleImageUpload}
              />
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" flexWrap="wrap" gap={2}>
              {images.map((image, index) => (
                <Box key={index} position="relative">
                  <img
                    src={image}
                    alt={`uploaded ${index}`}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => handleImageRemove(index)}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                    }}
                  >
                    dlete
                    {/* <DeleteIcon fontSize="small" /> */}
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Grid>
         

          <Grid sx={{ mt:4}} item xs={12}>
          <Typography variant="h5" gutterBottom>
            Issue Location :
            </Typography>
          </Grid>

          <Grid  item xs={12}>
            <TextField
              fullWidth
              id="issueLocation.locationName"
              name="issueLocation.locationName"
              label="Location Name"
              value={formik.values.issueLocation.locationName}
              onChange={formik.handleChange}
              error={formik.touched.issueLocation?.locationName && Boolean(formik.errors.issueLocation?.locationName)}
              helperText={formik.touched.issueLocation?.locationName && formik.errors.issueLocation?.locationName}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              id="issueLocation.unit"
              name="issueLocation.unit"
              label="Unit"
              value={formik.values.issueLocation.unit}
              onChange={formik.handleChange}
              error={formik.touched.issueLocation?.unit && Boolean(formik.errors.issueLocation?.unit)}
              helperText={formik.touched.issueLocation?.unit && formik.errors.issueLocation?.unit}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              id="issueLocation.floor"
              name="issueLocation.floor"
              label="Floor"
              value={formik.values.issueLocation.floor}
              onChange={formik.handleChange}
              error={formik.touched.issueLocation?.floor && Boolean(formik.errors.issueLocation?.floor)}
              helperText={formik.touched.issueLocation?.floor && formik.errors.issueLocation?.floor}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              id="issueLocation.room"
              name="issueLocation.room"
              label="Room"
              value={formik.values.issueLocation.room}
              onChange={formik.handleChange}
              error={formik.touched.issueLocation?.room && Boolean(formik.errors.issueLocation?.room)}
              helperText={formik.touched.issueLocation?.room && formik.errors.issueLocation?.room}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              id="issueLocation.extraDetail"
              name="issueLocation.extraDetail"
              label="Extra Detail"
              value={formik.values.issueLocation.extraDetail}
              onChange={formik.handleChange}
              error={formik.touched.issueLocation?.extraDetail && Boolean(formik.errors.issueLocation?.extraDetail)}
              helperText={formik.touched.issueLocation?.extraDetail && formik.errors.issueLocation?.extraDetail}
            />
          </Grid>

          <Grid sx={{ mt:8}} item xs={12}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default TicketForm;
