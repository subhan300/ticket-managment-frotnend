import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridRowEditStopReasons } from "@mui/x-data-grid";
// import { useColumns} from "./useColumns";
import EditTicket from "../editTicket/EditTicket";
import { useTheme } from "@mui/material";
import useStore from "../../../store";
import {
  useEditTicketMutation,
  useGetFilteredCompanyTicketsQuery,
  useGetTechniciansByCompanyIdQuery,
} from "../../../apis/apiSlice";
import useCommentStore from "../../comment/store/CommentStore";
import { useTechnicianStore } from "../store";
import { useColumns } from "./useColumns";

export default function TicketTable() {
  const { user, openAlert } = useStore((state) => state);
  const [isOpen, setIsOpen] = React.useState(false);
  const [rowModesModel, setRowModesModel] = React.useState({});
  const {data: techniciansData,isLoading: technicianLoading,isSuccess: technicianSuccess,} = useGetTechniciansByCompanyIdQuery(user.companyId);
  const { isLoading, data, isSuccess } = useGetFilteredCompanyTicketsQuery();
  const { setTicketId, setCommentList } = useCommentStore((state) => state);
  const {
    data: ticketsData,
    setData,
    setTechnician,
    setTicket,
    ticket,
  } = useTechnicianStore((state) => state);
  const handleDrawer = (value) => {
    if (value) {
      setTicketId(value._id);
      setTicket(value), setIsOpen(Boolean(value));
      setCommentList(value.comments);
      return;
    }
    setIsOpen(value);
  };
  
  const columns = useColumns(handleDrawer, rowModesModel, setRowModesModel);
  useEffect(() => {
    if (isSuccess) {
      setData(data);
    }
  }, [isSuccess]);
  useEffect(() => {
    // handleDrawer(ticketsDataDummy[0])
    if (technicianSuccess) {
      setTechnician(techniciansData);
    }
  }, [technicianSuccess]);

  return (
    <>
      {isOpen && <EditTicket handleDrawer={handleDrawer} isOpen={isOpen} />}

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
          rows={!isSuccess ? [] : ticketsData}
          columns={columns}
          getRowId={(row) => {
            return row?._id;
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
