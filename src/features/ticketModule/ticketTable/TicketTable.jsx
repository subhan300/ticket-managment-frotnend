import  React,{useEffect,useState} from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { columns, data,} from "./columns";
import TicketDrawer from "../editTicket/EditTicketForm";
import { CircularProgress, useTheme } from "@mui/material";
import useStore from "../../../store";
import { useGetTicketsByUserIdQuery } from "../../../apis/apiSlice";
import useCommentStore from "../../comment/store/CommentStore";
import useUserStore from "../store/UserStore";
import { useDemoData } from '@mui/x-data-grid-generator';
import { GridToolbar } from "@mui/x-data-grid";
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

  const [isOpen, setIsOpen] = useState(false);
  const user = useStore((state) => state.user);
  const {data:ticketsData,setData, setTicket}=useUserStore(state=>state)
  const { isLoading, data ,isSuccess} = useGetTicketsByUserIdQuery(user._id);
  const {setTicketId,setCommentList}=useCommentStore(state=>state)
  // const handleFilterChange = (columnField, value) => {
  //   console.log("colmn",columnField,"value",value)
  //   let filterData;
  //  if(value){
  //   filterData=data.filter(val=>{
  //     // debugger
  //     console.log("status",val.status.toLowerCase(),"===",value)
  //     return val.status.toLowerCase()===value
  //   })
  //  }else{
  //   filterData=data
  //  }
   
  //   setData(filterData)
  // };

  const handleFilterChange = (columnField, values) => {
    console.log("column", columnField, "values", values);
    let filterData;
    if (!values.includes("")) {
      filterData = data.filter((val) => {
        debugger
        return values.includes(val[columnField].toLowerCase())
      });
    } else {
      filterData = data;
    }
    setData(filterData);
  };
  const handleDrawer = (value) => {
   if(value){
    setTicketId(value._id)
    setCommentList(value.comments)
    setIsOpen(true);
    setTicket(value)
   }else{
    setIsOpen(false)
   }

  };
  const CustomToolbar = () => (
    <GridToolbarContainer sx={{padding:"6px 0 0 0",display:"flex",justifyContent:"flex-end"}}>
      <GridToolbarQuickFilter />
      {/* You can add more elements here if needed */}
    </GridToolbarContainer>
  );
  useEffect(()=>{
     if(isSuccess){
         setData(data)
     }
  },[isSuccess])

  console.log("islaoding",isLoading)
  return (
    <>
      {isOpen && (
        <TicketDrawer
          handleDrawer={handleDrawer}
          isOpen={isOpen}
        />
      )}
      <Box sx={{ width: "100%",overflowX: "auto",  }}>
    
        <DataGrid
          sx={{
            overflowX: "auto", // Enable horizontal scrolling
            width: "100%",
            minHeight:"150px",
            minWidth:"500px",
            "& .MuiDataGrid-filler": { backgroundColor: "var(--table-header)" },
          }}
          loading={isLoading}
          rows={ticketsData}
          getRowId={(row) => row?._id}
          slots={{ toolbar: CustomToolbar }} // Use CustomToolbar
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
            loadingOverlay: {
              variant: 'linear-progress',
              noRowsVariant: 'skeleton',
            },
          }}
          sortingOrder={['desc', 'asc']}
          columns={columns(handleDrawer,handleFilterChange)}
          rowsPerPage={5}
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
          disableRowSelectionOnClick
          disableColumnSelector
        />
      </Box>
    </>
  );
}
