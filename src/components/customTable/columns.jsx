
// // Recordcolumns.js
// import React from "react";
// import { Box, Button } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import Chip from "@mui/material/Chip";
// // import deleteIcon from "../../assets/images/deleteIcon.svg";
// // import { findItemByName } from "./categoriesData";
// import dayjs from "dayjs";
// // import AttachFileIcon from "@mui/icons-material/AttachFile";
// export const hardcodedData = [
//     {
//       id: 1,
//       title: "First Record",
//       description: "This is the first record description",
//       record_table: "Type1",
//       updated_at: "2024-06-30T10:20:30Z",
//       status: "Active",
//       attachments: ["file1.pdf"],
//     },
//     {
//       id: 2,
//       title: "Second Record",
//       description: "This is the second record description",
//       record_table: "Type2",
//       updated_at: "2024-06-29T09:15:20Z",
//       status: "Pending",
//       attachments: [],
//     },
//     {
//       id: 3,
//       title: "Third Record",
//       description: "This is the third record description",
//       record_table: "Type1",
//       updated_at: "2024-06-28T08:10:15Z",
//       status: "Completed",
//       attachments: ["file2.docx"],
//     },
//     {
//       id: 4,
//       title: "Fourth Record",
//       description: "This is the fourth record description",
//       record_table: "Type3",
//       updated_at: "2024-06-27T07:05:10Z",
//       status: "Cancelled",
//       attachments: [],
//     },
//     {
//       id: 5,
//       title: "Fifth Record",
//       description: "This is the fifth record description",
//       record_table: "Type2",
//       updated_at: "2024-06-26T06:00:05Z",
//       status: "Active",
//       attachments: ["file3.xlsx"],
//     },
//   ];

import dayjs from "dayjs";

  
//   // Mock functions to make the example complete
//   const handleOpen = (row) => {
//     console.log("Opening row: ", row);
//   };
  
//   const handleDelete = (params) => {
//     console.log("Deleting row: ", params);
//   };
  
// export const Recordcolumns = (handleOpen, handleDelete) => {
// 	return [
// 		{
// 			field: "title",
// 			filterable: true,
// 			headerName: "Record",
// 			sortable: true,
// 			width: 400,
// 			renderCell: (params) => {
// 				const { row } = params;
// 				return (
// 					<Box
// 						sx={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
// 						onClick={() => handleOpen(params.row)}
// 					>
// 						<Typography
// 							noWrap
// 							variant="body2"
// 							sx={{ color: "text.primary", fontWeight: 600 }}
// 						>
// 							{row.title}
// 						</Typography>
// 						<Typography noWrap variant="caption">
// 							{row.description}
// 						</Typography>
// 					</Box>
// 				);
// 			}
// 		},
// 		{
// 			field: "record_table",
// 			width: 190,
// 			headerName: "Type",
// 			sortable: false,
// 			valueGetter: (params) => {
// 				// const type = findItemByName(params.row.record_table);
// 				// return type;
// 			}
// 		},
// 		{
// 			field: "updated_at",
// 			width: 190,
// 			headerName: "Last Modified",
// 			valueGetter: (params) => dayjs(params.row.updated_at).format("MMM D, YY"),
// 			sortable: true
// 		},
// 		{
// 			field: "status",
// 			headerName: "Status",
// 			width: 190,
// 			sortable: false,
// 			renderCell: (params) => {
// 				const { status } = params.row;
// 				return (
// 					<Chip
// 						variant="filled"
// 						sx={{
// 							".MuiChip-label": {
// 								paddingLeft: "0 "
// 							},
// 							color: "black",
// 							background: statusColor(status)
// 						}}
// 						label={status}
// 					/>
// 				);
// 			}
// 		},
// 		{
// 			field: "actions",
// 			headerName: "",
// 			sortable: false,
// 			filterable: false,
// 			disableColumnMenu: true,
// 			renderCell: (params) => {
// 				const { attachments } = params.row;
// 				const isExist = attachments.length;
// 				return (
// 					<Box
// 						sx={{
// 							display: "flex",
// 							justifyContent: `${isExist ? "space-between" : "flex-start"}`,
// 							AlignItem: "center"
// 						}}
// 					>
// 						{isExist ? (
// 							<div>
// 								{" "}
// 								{/* <AttachFileIcon style={{ fontSize: "22px", height: "100%" }} /> */}
// 							</div>
// 						) : (
// 							<div
// 								style={{
// 									// color: "black",
// 									width: "22px",
// 									marginTop: "8px",
// 									color: "transparent"
// 								}}
// 							>
// 								null
// 							</div>
// 						)}
// 						<Button onClick={() => handleDelete(params)}>
// 							<img
// 								style={{ width: "22px", height: "22px" }}
// 								// src={deleteIcon}
// 								alt="Delete Icon"
// 							/>
// 						</Button>
// 					</Box>
// 				);
// 			}
// 		}
// 	];
// };

// const statusColor = (status) => {
// 	switch (status) {
// 		case "READY":
// 			return "lightGreen";
// 		case "PENDING":
// 			return "LightPink";
// 		default:
// 			return "lightblue";
// 	}
// };

// export const customLocaleText = {
// 	columnHeaderSortIconLabel: "Sortieren",
// 	columnMenuSortAsc: "Ascending",
// 	columnMenuSortDesc: "Descending"
// };

export const columns = [
	{ field: 'id', headerName: 'SNO', 
		// width: 90 
	},
	{ field: 'userName', headerName: 'Name', 
		// width: 150
	 },
	{ field: 'userEmail', headerName: 'Email', 
		width: 220 
	},
	// { field: 'userRole', headerName: 'User Role', width: 130 },
	{ field: 'issue', headerName: 'Issue', width: 220 },
	{ field: 'description', headerName: 'Description',
		 width: 270
		 },
	{ field: 'status', headerName: 'Status', 
		// width: 150 
	},
	{ field: 'createdAt', headerName: 'Created At', width: 150, valueGetter: (val,params) => dayjs(val).format("YYYY-MM-DD") },
	// { field: 'updatedAt', headerName: 'Updated At', width: 150, valueGetter: (params) => new Date(params.row.updatedAt).toLocaleString() },
  ];
  

 export  const data = [
	{ 
	  id: '1', 
	  userName: 'John Doe', 
	  userEmail: 'john@example.com', 
	  userRole: 'user', 
	  issue: 'Login Issue', 
	  description: 'Unable to login to the system', 
	  status: 'OPEN', 
	  createdAt: '2023-01-01T10:00:00Z', 
	  updatedAt: '2023-01-02T11:00:00Z' 
	},
	{ 
	  id: '2', 
	  userName: 'Jane Smith', 
	  userEmail: 'jane@example.com', 
	  userRole: 'admin', 
	  issue: 'Payment Issue', 
	  description: 'Payment gateway not working', 
	  status: 'PROGRESS', 
	  createdAt: '2023-02-01T12:00:00Z', 
	  updatedAt: '2023-02-02T13:00:00Z' 
	},
	{ 
	  id: '3', 
	  userName: 'Sam Wilson', 
	  userEmail: 'sam@example.com', 
	  userRole: 'user', 
	  issue: 'Bug Report', 
	  description: 'Found a bug in the system', 
	  status: 'BLOCKED', 
	  createdAt: '2023-03-01T14:00:00Z', 
	  updatedAt: '2023-03-02T15:00:00Z' 
	},
	{ 
		id: '4', 
		userName: 'Sam Wilson', 
		userEmail: 'sam@example.com', 
		userRole: 'user', 
		issue: 'Bug Report', 
		description: 'Found a bug in the system', 
		status: 'BLOCKED', 
		createdAt: '2023-03-01T14:00:00Z', 
		updatedAt: '2023-03-02T15:00:00Z' 
	  },
	  { 
		id: '5', 
		userName: 'Sam Wilson', 
		userEmail: 'sam@example.com', 
		userRole: 'user', 
		issue: 'Bug Report', 
		description: 'Found a bug in the system', 
		status: 'BLOCKED', 
		createdAt: '2023-03-01T14:00:00Z', 
		updatedAt: '2023-03-02T15:00:00Z' 
	  },
	  { 
		id: '6', 
		userName: 'Sam Wilson', 
		userEmail: 'sam@example.com', 
		userRole: 'user', 
		issue: 'Bug Report', 
		description: 'Found a bug in the system', 
		status: 'BLOCKED', 
		createdAt: '2023-03-01T14:00:00Z', 
		updatedAt: '2023-03-02T15:00:00Z' 
	  },
	  { 
		id: '7', 
		userName: 'Sam Wilson', 
		userEmail: 'sam@example.com', 
		userRole: 'user', 
		issue: 'Bug Report', 
		description: 'Found a bug in the system', 
		status: 'BLOCKED', 
		createdAt: '2023-03-01T14:00:00Z', 
		updatedAt: '2023-03-02T15:00:00Z' 
	  },
  ];
  
       

