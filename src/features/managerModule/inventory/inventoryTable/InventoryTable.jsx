import React,{useEffect} from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridRowEditStopReasons } from "@mui/x-data-grid";
import EditTicket from "../../editTicket/EditTicket";
import useStore from "../../../../store";
import { useEditTicketMutation,useGetInventoryItemsDetailsQuery, } from "apis/apiSlice";
import useCommentStore from "../../../comment/store/CommentStore";
import {useTechnicianStore} from "../../store";
import { useColumns } from "./useColumns";
import useInventoryStore from "../../store/InventoryStore";

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

export default function InventoryTable() {
  const {user,openAlert} = useStore((state) => state);
  const [isOpen, setIsOpen] = React.useState(false);
   const {inventories,setData}=useInventoryStore()
   const {data,isLoading,isSuccess}=useGetInventoryItemsDetailsQuery()
  const {setTicketId, setCommentList} = useCommentStore((state) => state);
  const handleDrawer = (value) => {
    if(value){
    setTicketId(value._id);
    setData("inventory",value),
    setIsOpen(Boolean(value));
    setCommentList(value.comments)
    return 
    }
    setIsOpen(value)

  };
  const columns=useColumns(handleDrawer)


 useEffect(()=>{
    if(isSuccess){
      setData("inventories",data)
    }
 },[isSuccess])

  return (
    <>
      {/* {isOpen && (
        <EditTicket
          handleDrawer={handleDrawer}
          isOpen={isOpen}
        />
      )} */}
   
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
          rows={!isSuccess ? [] : inventories}
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
