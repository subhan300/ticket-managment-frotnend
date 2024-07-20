import { GridActionsCellItem } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import dayjs from "dayjs";


export const columns = (handleDrawer) => [
  // {
  //   field: "_id",
  //   headerName: "SNO",
  //   flex: 1, // Make it flexible
  // },
  {
    field: "name",
    headerName: "Name",
    flex: 2, // Make it flexible with a larger factor
  },
  {
    field: "email",
    headerName: "Email",
    flex: 2,
  },
  {
    field: "assignedTo",
    headerName: "Assigned To",
    flex:2,
    valueGetter: (params) => {
      return params?params :"not assigned"
    },

  },

  {
    field: "issue",
    headerName: "Issue",
    flex: 2,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 3,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1,
    valueGetter: (params) => dayjs(params.value).format("YYYY-MM-DD"),
  },
  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
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

export const details = {
  id: "1",
  userName: "John Doe",
  userEmail: "john@example.com",
  userRole: "user",
  issue: "Login Issue",
  description: "Unable to login to the system",
  status: "OPEN",
  createdAt: "2023-01-01T10:00:00Z",
  updatedAt: "2023-01-02T11:00:00Z",
};
