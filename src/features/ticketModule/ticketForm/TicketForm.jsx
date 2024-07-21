import React, { useEffect, useState } from "react";

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
  Paper
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import {
  useGetRoomsQuery,
  useGetUnitsQuery,
  apiSlice,
  useGetTechniciansByCompanyIdQuery,
} from "../../../apis/apiSlice";
import useStore from "../../../store";
import { FileUploader } from "../../../components";
import { dateFormat } from "../../../utils";
import { CloudUpload,Delete } from "@mui/icons-material";

// Constants
const statuses = ["OPEN", "PROGRESS", "BLOCKED", "CLOSED"];
const assignedToMembers = ["Not Assigned", "Me", "Jones", "David", "Kingzi"];

const validationSchema = Yup.object({
  // userId: Yup.string().required('User ID is required'),
  issue: Yup.string().required("Issue is required"),
  description: Yup.string().required("Description is required"),
  status: Yup.string().oneOf(statuses).required("Status is required"),
  issueLocation: Yup.object({
    locationName: Yup.string(),
    // unit: Yup.string().required("Unit is required"),
    room: Yup.string().required("Room is required"),
    extraDetail: Yup.string(),
  }),
});

const TicketForm = ({ initialValues, handleOnFinish }) => {
  // console.log("initial values===", initialValues);
  const user = useStore((state) => state.user);

  const [unitId, setUnitId] = useState(initialValues.issueLocation.unit);
  const [assignedTo, setAssignedTo] = useState(initialValues.assignedTo);
  const [imgFiles, setImgFiles] = useState([]);
 
  const { data: units, isLoading: unitsLoading } = useGetUnitsQuery(  user.companyId );
  const { data: technicians, isLoading: technicianLoading,} = useGetTechniciansByCompanyIdQuery(user.companyId);

  const [fetchUserData, { isLoading: roomsLoading, data: roomsData, error, isSuccess: roomsSuccess,},] = apiSlice.endpoints.getRooms.useLazyQuery(useGetRoomsQuery); // Replace with your actual query
  
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: async(values) => {

      values.issueLocation = {
        ...values.issueLocation,
        unit: unitId,
        
      };
      handleOnFinish({...values,assignedTo,images:imgFiles});
    },
  });

  useEffect(() => {
    console.log("runing====");
    if (formik.values.issueLocation.unit) {
      fetchUserData(unitId._id);
    }
  }, [unitId]);

  // console.log("loading===", technicianLoading, roomsLoading, unitsLoading);
  console.log("formik",formik.isValid)
  return (
    <Box sx={{ maxWidth: 800, mx: "auto" }}>
     
      {technicianLoading  && <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"4rem"}}><CircularProgress /></Box>}
      {!technicianLoading  && (
        <form onSubmit={formik.handleSubmit}>
      
          <Grid container spacing={2}>
            <Grid sx={{ mt: 4 }} item xs={12}>
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
                fullWidth
                id="createdAt"
                name="createdAt"
                label="Created Ticket Date"
                disabled={true}
                value={dateFormat(initialValues?.createdAt?new Date(initialValues.createdAt):new Date())}
                // onChange={formik.handleChange}
                // error={formik.touched.status && Boolean(formik.errors.status)}
                // helperText={formik.touched.status && formik.errors.status}
              >
                

              </TextField>
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
            <Grid  item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                id="assignedTo"
                name="assignedTo"
                // SelectProps={{
                //   value: formik.values?.assignedTo,
                // }}
                label="Assigned To"
                disabled={!technicians?.length}
                value={formik.values?.assignedTo}
                onChange={formik.handleChange}
                // error={formik.touched.status && Boolean(formik.errors.status)}
                // helperText={formik.touched.status && formik.errors.status}
              >
                {!technicianLoading ? (
                  [{ name: "Not Assigned", _id: "" }, ...technicians].map(
                    (option) => (
                      <MenuItem
                        onClick={() => {
                          console.log("options===",option)
                          setAssignedTo(option._id);
                        }}
                        key={option.name}
                        value={option.name}
                      >
                        {option.name}
                      </MenuItem>
                    )
                  )
                ) : (
                  <MenuItem></MenuItem>
                )}
              </TextField>
            </Grid>

            <Grid sx={{ mt: 6 }} item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>
            <Grid sx={{ mt: 4 }} item xs={12}>
              <FileUploader styles={{color:"white"}} buttonName="File Upload" icon={<CloudUpload />} files={imgFiles} setFiles={setImgFiles} />
             
            </Grid>
            <Grid container spacing={2}>
        {imgFiles.map((file, index) => (
          <Grid item key={index}>
            <Paper
              variant="outlined"
              sx={{ display: 'flex', alignItems: 'center', padding: 1 }}
            >
              <Typography variant="body2" sx={{ flexGrow: 1 }}>
                {file.name}
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleRemoveFile(file)}
              >
                <Delete />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
            <Grid sx={{ mt: 4 }} item xs={12}>
              <Typography variant="h5" gutterBottom>
                Issue Location :
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="issueLocation.locationName"
                name="issueLocation.locationName"
                label="Location Name"
                value={formik.values.issueLocation.locationName}
                onChange={formik.handleChange}
                error={
                  formik.touched.issueLocation?.locationName &&
                  Boolean(formik.errors.issueLocation?.locationName)
                }
                helperText={
                  formik.touched.issueLocation?.locationName &&
                  formik.errors.issueLocation?.locationName
                }
              />
            </Grid>
            <Grid sx={{ mt: 5 }} item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                id="issueLocation.unit"
                name="issueLocation.unit"
                label="Unit"
                // SelectProps={{
                //   value: ""
                // }}
                value={
                  formik.values.issueLocation.unit?.name ||
                  formik.values.issueLocation.unit
                }
                onChange={formik.handleChange}
                error={
                  formik.touched.issueLocation?.unit &&
                  Boolean(formik.errors.issueLocation?.unit)
                }
                helperText={
                  formik.touched.issueLocation?.unit &&
                  formik.errors.issueLocation?.unit
                }
              >
                {unitsLoading ? (
                  <MenuItem value=""></MenuItem>
                ) : (
                  units.map((option) => {
                    return (
                      <MenuItem
                        onClick={(e) => {
                          formik.setFieldValue("issueLocation.room", "");
                          setUnitId(option);
                          // console.log("menue=====",e)
                        }}
                        key={option.name}
                        value={option.name}
                      >
                        {option.name}
                      </MenuItem>
                    );
                  })
                )}
              </TextField>
            </Grid>

            <Grid sx={{ mt: 5 }} item xs={12} sm={6}>
              {roomsSuccess && (
                <TextField
                  select
                  fullWidth
                  id="issueLocation.room"
                  name="issueLocation.room"
                  label="Room"
                  // SelectProps={{
                  //   value: ""
                  // }}
                  value={formik.values.issueLocation.room}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.issueLocation?.room &&
                    Boolean(formik.errors.issueLocation?.room)
                  }
                  helperText={
                    formik.touched.issueLocation?.room &&
                    formik.errors.issueLocation?.room
                  }
                  // error={formik.touched.status && Boolean(formik.errors.status)}
                  // helperText={formik.touched.status && formik.errors.status}
                >
                  {roomsLoading ? (
                    <MenuItem value=""></MenuItem>
                  ) : (
                    roomsData?.rooms?.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))
                  )}
                </TextField>
              )}
            </Grid>

            <Grid sx={{ mt: "12px" }} item xs={12}>
              <TextField
                fullWidth
                id="issueLocation.extraDetail"
                name="issueLocation.extraDetail"
                label="Extra Detail"
                value={formik.values.issueLocation.extraDetail}
                onChange={formik.handleChange}
                error={
                  formik.touched.issueLocation?.extraDetail &&
                  Boolean(formik.errors.issueLocation?.extraDetail)
                }
                helperText={
                  formik.touched.issueLocation?.extraDetail &&
                  formik.errors.issueLocation?.extraDetail
                }
              />
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

export default TicketForm;
