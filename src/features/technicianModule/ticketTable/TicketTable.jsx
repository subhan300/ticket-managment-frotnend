import React,{useEffect} from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridRowEditStopReasons } from "@mui/x-data-grid";
// import { useColumns} from "./useColumns";
import EditTicket from "../editTicket/EditTicket";
import { useTheme } from "@mui/material";
import useStore from "../../../store";
import { useEditTicketMutation, useGetFilteredCompanyTicketsQuery, useGetTechniciansByCompanyIdQuery,} from "../../../apis/apiSlice";
import useCommentStore from "../../comment/store/CommentStore";
import {useTechnicianStore} from "../store";
import { useColumns } from "./useColumns";

const initialValue = [
  {
      "issueLocation": {
          "locationName": "",
          "unit": {
              "_id": "66886ee618ad94b85531ac55",
              "name": "woodend"
          },
          "room": "2009",
          "extraDetail": "room is at first floor , near from main entrance of building"
      },
      "_id": "66930b4fd27c53bc169b704b",
      "userId": {
          "_id": "66815c42b060e5455702faaf",
          "name": "Anderson",
          "email": "anderson@gmail.com"
      },
      "assignedTo": "",
      "issue": "issue in room 3003 in light",
      "description": "room issue in light anf bulb",
      "images": [
          "http://res.cloudinary.com/dxhqcov11/image/upload/v1720912718/tracking-system/password_size_photo_jqk5li.jpg"
      ],
      "status": "OPEN",
      "comments": [],
      "createdAt": "2024-07-13T23:18:39.752Z",
      "updatedAt": "2024-07-20T20:37:32.083Z",
      "__v": 30
  },
 
]

export default function TicketTable() {
  const {user,openAlert} = useStore((state) => state);
  const [isOpen, setIsOpen] = React.useState(false);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const {data:techniciansData,isLoading:technicianLoading,isSuccess:technicianSuccess}=useGetTechniciansByCompanyIdQuery(user.companyId);
  const { isLoading, data, isSuccess } =  useGetFilteredCompanyTicketsQuery();
  const [editTicket, result] = useEditTicketMutation();
  const {setTicketId, setCommentList} = useCommentStore((state) => state);
  const {data:ticketsData,setData,setTechnician,setTicket}=useTechnicianStore(state=>state)
  const { isLoading:saveLoading, isSuccess:saveSuccess } = result;
  const handleDrawer = (value) => {
    if(value){
    setTicketId(value._id);
    setTicket(value),
    setIsOpen(Boolean(value));
    setCommentList(value.comments)
    return 
    }
    setIsOpen(value)

  };
  const columns=useColumns(handleDrawer,rowModesModel,setRowModesModel)
  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {event.defaultMuiPrevented = true; }
  };

  const processRowUpdate = async(newRow) => {
   try{
    // debugger
    const {assignedTo,status,_id}=newRow;
    const filterTechnician=techniciansData.filter(item=>item.name===assignedTo)[0]
    const assignedToValue=filterTechnician?._id ?? ''
    const edit=await editTicket({assignedTo:assignedToValue,status,_id});
    const updatedRow = { ...edit.data, isNew: false };
    if(edit.data){
      setData(ticketsData.map((row) => (row._id === newRow._id ? updatedRow : row)));
      openAlert("Ticket is Updated")

    }
    return updatedRow;
   }catch(err){
    openAlert("Error in updating Ticket","error")
   }
  }

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
 useEffect(()=>{
    if(isSuccess){
      setData(data)
    }
 },[isSuccess])
 useEffect(()=>{
  if(technicianSuccess){
    setTechnician(techniciansData)
  }
},[technicianSuccess])
  return (
    <>
      {isOpen && (
        <EditTicket
          handleDrawer={handleDrawer}
          isOpen={isOpen}
        />
      )}
   
      <Box
        sx={{
          width: "100%",
          overflowX: "auto", // Enable horizontal scrolling
        }}
      >
        <DataGrid
          sx={{
            overflowX: "auto", // Enable horizontal scrolling
            width: "100%",
            minHeight: "200px",
            minWidth: "500px",
            "& .MuiDataGrid-filler": { backgroundColor: "var(--table-header)" },
          }}
          loading={isLoading}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          rows={!isSuccess ? [] : ticketsData}
          columns={columns}
          getRowId={(row) => {
            return row?._id
          }}
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
          disableRowSelectionOnClick={true}
          disableColumnSelector={true}
        />
      </Box>
    </>
  );
}
