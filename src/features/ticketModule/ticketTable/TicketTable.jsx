import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { columns, data, details } from "./columns";
import TicketDrawer from "../editTicket/EditTicketForm";
import { useTheme } from "@mui/material";
import useStore from "../../../store";
import { useGetTicketsByUserIdQuery } from "../../../apis/apiSlice";
import useCommentStore from "../../comment/store/CommentStore";

const initialValue = {
  userId: "12345", // Replace with actual user ID
  issue: "Network connectivity issue in conference room A",
  description:
    "Wi-Fi connection keeps dropping intermittently in conference room A. Users are unable to maintain a stable connection for video calls and presentations.",
  assignedTo: "Me", // Or any member from assignedToMembers
  status: "OPEN",
  issueLocation: {
    locationName: "Conference Room A",
    unit: "Building 2",
    floor: "3rd Floor",
    room: "A-101",
    extraDetail: "Near the east window",
  },
};

export default function TicketTable() {

  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const user = useStore((state) => state.user);
  const { isLoading, data ,isSuccess} = useGetTicketsByUserIdQuery(user._id);
  const {setTicketId,setCommentList}=useCommentStore(state=>state)
  
  
  // console.log("islaoding",isLoading,"api======",api,"=====",isSuccess)
  // console.log("data===",data)
  const handleDrawer = (value) => {
    setTicketId(value._id)
    setCommentList(value.comments)
    setIsOpen(value);

    
    // console.log("iso", isOpen, "---", value);
  };

  return (
    <>
      {isOpen && (
        <TicketDrawer
          initialValues={isOpen}
          handleDrawer={handleDrawer}
          isOpen={isOpen}
          row={details}
        />
      )}
        {/* <Comment ticketId={ticket._id} comments={ticket.comments} /> */}
      <Box sx={{ width: "100%",overflowX: "auto", // Enable horizontal scrolling
            }}>
        <DataGrid
          sx={{
            overflowX: "auto", // Enable horizontal scrolling
            width: "100%",
            minHeight:"200px",
            minWidth:"500px",
            "& .MuiDataGrid-filler": { backgroundColor: "var(--table-header)" },
          }}
          loading={isLoading}
          rows={!isSuccess?[]:data}
          getRowId={(row) => row?._id}
        

          columns={columns(handleDrawer)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          disableColumnResize={true}
          pageSizeOptions={[5]}
          disableColumnMenu={true}
          // checkboxSelection
          disableRowSelectionOnClick
          disableColumnSelector
        />
      </Box>
    </>
  );
}
