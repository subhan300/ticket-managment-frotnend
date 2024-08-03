import { GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";

import dayjs from "dayjs";
import { NotAssigned } from "../../../helper";
import FilterComponent from "../../../components/filterComponents/FilterComponents";
import { Typography } from "@mui/material";

const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
export const columns = (handleDrawer,handleFilterChange) => [
  
  {
    field: "ticketNo",
    headerName: "Ticket No",
    // flex: 1, // Make it flexible
    width:150,
   
  
  },
  {
    field: "name",
    headerName: "Name",
    // flex: 2, // Make it flexible with a larger factor
    width:160,
  },
  {
    field: "email",
    headerName: "Email",
    // flex: 2,
    width:170,
  },
  {
    field: "assignedTo",
    headerName: "Assigned To",
    // flex:2,
    width:170,
    valueGetter: ({name}) => {
      return name?name :NotAssigned
    },

  },

  {
    field: "issue",
    headerName: "Issue",
    // flex: 2,
    width:170,
    sortable:false,
  },
  // {
  //   field: "description",
  //   headerName: "Description",
  //   flex: 170,
  // },
  {
    field: "status",
    headerName: "Status",
    // flex: 2,
    width:170,
    sortable:false,
    renderHeader: () => (
      <div  style={{ display: 'flex', alignItems: 'center' }}>
       <Typography variant="body2" sx={{fontWeight:"bold"}}>Status</Typography>
        <FilterComponent
          columnField="status"
          filterOptions={[
            { label: 'Remove Filter', value: '' },
            { label: 'Progress', value: 'progress' },
            { label: 'Open', value: 'open' },
            { label: 'Complete', value: 'complete' },
          ]}
          onFilterChange={handleFilterChange}
        />
      </div>
    ),
  },
  {
    field: "createdAt",
    headerName: "Created At",
    // flex: 1,
    width:170,
    // valueGetter: (params) => {console.log("params",params)
    //   return dayjs(params.value).unix()
      
    // }, // Use raw date value for sorting
    renderCell: (params) => dayjs(params.value).format('YYYY-MM-DD'), // Format
    valueFormatter: (value) => dateFormatter.format(dayjs(value)),
  },
  {
    field: "actions",
    headerName: "Actions",
    // flex: 1,
    width:90,
    renderCell: (params) => (
      <GridActionsCellItem
        icon={<VisibilityIcon />}
        label="View Details"  
        onClick={() => handleDrawer(params.row)}
      />
    ),
  },
];

export const data = [
  
  {
    id: "1",
    userName: "John Doe",
    userEmail: "john@example.com",
    userRole: "user",
    issue: "Login Issue",
    description: "Unable to login to the system",
    status: "OPEN",
    createdAt: "2023-01-01T10:00:00Z",
    updatedAt: "2023-01-02T11:00:00Z",
	action:""
  },
  {
    id: "2",
    userName: "Jane Smith",
    userEmail: "jane@example.com",
    userRole: "admin",
    issue: "Payment Issue",
    description: "Payment gateway not working",
    status: "PROGRESS",
    createdAt: "2023-02-01T12:00:00Z",
    updatedAt: "2023-02-02T13:00:00Z",
	action:""
  },
  {
    id: "3",
    userName: "Sam Wilson",
    userEmail: "sam@example.com",
    userRole: "user",
    issue: "Bug Report",
    description: "Found a bug in the system",
    status: "BLOCKED",
    createdAt: "2023-03-01T14:00:00Z",
    updatedAt: "2023-03-02T15:00:00Z",
	action:""
  },
  {
    id: "4",
    userName: "Sam Wilson",
    userEmail: "sam@example.com",
    userRole: "user",
    issue: "Bug Report",
    description: "Found a bug in the system",
    status: "BLOCKED",
    createdAt: "2023-03-01T14:00:00Z",
    updatedAt: "2023-03-02T15:00:00Z",
	action:""
  },
  {
    id: "5",
    userName: "Sam Wilson",
    userEmail: "sam@example.com",
    userRole: "user",
    issue: "Bug Report",
    description: "Found a bug in the system",
    status: "BLOCKED",
    createdAt: "2023-03-01T14:00:00Z",
    updatedAt: "2023-03-02T15:00:00Z",
	action:""
  },
  {
    id: "6",
    userName: "Sam Wilson",
    userEmail: "sam@example.com",
    userRole: "user",
    issue: "Bug Report",
    description: "Found a bug in the system",
    status: "BLOCKED",
    createdAt: "2023-03-01T14:00:00Z",
    updatedAt: "2023-03-02T15:00:00Z",
	action:""
  },
  {
    id: "7",
    userName: "Sam Wilson",
    userEmail: "sam@example.com",
    userRole: "user",
    issue: "Bug Report",
    description: "Found a bug in the system",
    status: "BLOCKED",
    createdAt: "2023-03-01T14:00:00Z",
    updatedAt: "2023-03-02T15:00:00Z",
	action:""
  },
];

