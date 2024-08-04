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
  Paper,
  IconButton,
} from "@mui/material";
import useStore from "store";
import { FileUploader } from "components";
import { CloudUpload, Delete } from "@mui/icons-material";
import { inventoryStatusCollection } from "@/data";

const validationSchema = Yup.object({
  productName: Yup.string().required("Product Name is required"),
  description: Yup.string().required("Description is required"),
  quantity: Yup.number().required("Quantity is required").min(0, "Quantity cannot be negative"),
  // usedItem: Yup.number().required("Used Item is required").min(0, "Used Item cannot be negative"),
  location: Yup.string().required("Location is required"),
  category: Yup.string().required("Category is required"),
  status: Yup.string().oneOf(['In Stock', 'Out of Stock', 'Low Stock']).required("Status is required"),
  
});

const InventoryForm = ({ initialValues, handleOnFinish, edit }) => {
  const user = useStore((state) => state.user);

  const [imgFiles, setImgFiles] = useState([]);


  const formik = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: async (values) => {
        console.log("img files",imgFiles)
        console.log("values===",values)
        handleOnFinish(values, imgFiles);
    },
  });
  console.log("formik values==",formik.values)

  return (
    <Box sx={{ maxWidth: 800, mx: "auto" }}>
      {/* {technicianLoading && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "4rem",
          }}
        >
          <CircularProgress />
        </Box>
      )} */}
      {(
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid sx={{ mt: 4 }} item xs={12}>
              <Typography variant="h5" gutterBottom>
                Product Details:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="productName"
                name="productName"
                label="Product Name"
                required
                value={formik.values.productName}
                onChange={formik.handleChange}
                error={formik.touched.productName && Boolean(formik.errors.productName)}
                helperText={formik.touched.productName && formik.errors.productName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="category"
                name="category"
                label="Category"
                required
                value={formik.values.category}
                onChange={formik.handleChange}
                error={formik.touched.category && Boolean(formik.errors.category)}
                helperText={formik.touched.category && formik.errors.category}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="quantity"
                name="quantity"
                label="Quantity"
                type="number"
                required
                value={formik.values.quantity}
                onChange={formik.handleChange}
                error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                helperText={formik.touched.quantity && formik.errors.quantity}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                disabled
                id="status"
                name="status"
                label="Status"
                required
                value={formik.values.status}
                onChange={formik.handleChange}
                error={formik.touched.status && Boolean(formik.errors.status)}
                helperText={formik.touched.status && formik.errors.status}
              >
                {inventoryStatusCollection.map(val=><MenuItem key={val} value={val}>{val}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                id="location"
                name="location"
                label="Location"
                required
                value={formik.values.location}
                onChange={formik.handleChange}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                // required
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Grid>
            <Grid sx={{ mt: 4 }} item xs={12}>
              <FileUploader
                styles={{ color: "white" }}
                buttonName="Upload Product Image"
                icon={<CloudUpload />}
                files={imgFiles}
                setFiles={setImgFiles}
              />
            </Grid>
            <Grid container spacing={2}>
              {imgFiles.length ? <Grid item xs={12}> <Typography variant="h5">Images with File Upload</Typography></Grid>:""}
              {imgFiles.map((file, index) => (
                <Grid item key={index}>
                  <Paper
                    variant="outlined"
                    sx={{ display: "flex", alignItems: "center", padding: 1 }}
                  >
                    <Typography variant="body2" sx={{ flexGrow: 1 }}>
                      {file.name}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => {
                        const newFiles = imgFiles.filter((_, i) => i !== index);
                        setImgFiles(newFiles);
                      }}
                    >
                      <Delete />
                    </IconButton>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Grid sx={{marginTop:"10px"}} container spacing={2}>
           {formik.values.productImages.length? <Grid item xs={12}><Typography variant="h5">Images with Links</Typography></Grid>:""}
              {formik.values.productImages.map((imgLink, index) => (
                <Grid item key={index}>
                    <img alt="product iamges" src={imgLink}  />
                </Grid>
              ))}
            </Grid>
            <Grid sx={{ mt: 8 }} item xs={12}>
              <Button
                disabled={!formik.isValid}
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Box>
  );
};

export default InventoryForm;
