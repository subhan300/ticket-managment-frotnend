import { GridActionsCellItem, GridRowModes } from "@mui/x-data-grid";
// import {SaveIcon,VisibilityIcon,CancelIcon,EditIcon,DeleteIcon} from "@mui/icons-material/Edit";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import dayjs from "dayjs";
import { useTechnicianStore } from "../store";
import useStore from "../../../store";
import { COMPLETED, NotAssigned, NotAssignedId, OPEN, PROGRESS } from "../../../helper";
import { statusCollection} from "../../../data";

export const useColumns = (handleDrawer, rowModesModel, setRowModesModel) => {
  const { data: ticketsData, setData, technicians } = useTechnicianStore(
    (state) => state
  );
  return [
    {
      field: "ticketNo",
      headerName: "Ticket No",
      width:120, // Make it flexible
    },
    {
      field: "name",
      headerName: "Name",
      width:160, // Make it flexible with a larger factor
    },
    {
      field: "email",
      headerName: "Email",
      width:165,
    },

    {
      field: "assignedToColumn",
      headerName: "Assigned To",
      width:165,
      editable: true,
      type: "singleSelect",
      valueOptions: [{ name: NotAssigned, _id:NotAssignedId,  }, ...technicians],
      getOptionValue: (option) => option._id,
      getOptionLabel: (option) => option.name,
    },
      
    
    {
      field: "issue",
      headerName: "Issue",
      width:165,
    },
   
    {
      field: "status",
      headerName: "Status",
      width:165,
      editable: true,
      type: "singleSelect",
      valueOptions:statusCollection ,
      valueGetter: (params, row) => {
        // const assignedTech = technicians.find(tech => tech._id === row.assignedTo);
        // return assignedTech ? assignedTech._id : "";
        return params;
      },
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width:165,
      valueGetter: (params) => dayjs(params.value).format("YYYY-MM-DD"),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width:120,
      cellClassName: "actions",
      getActions: ({ row, id }) => {
        return [
          <GridActionsCellItem
            icon={<VisibilityIcon />}
            label="View Details"
            onClick={() => handleDrawer(row)}
          />,
        ];
      },
    },
  ];
};
