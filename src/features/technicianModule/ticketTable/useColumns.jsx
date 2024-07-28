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
  const user = useStore((state) => state.user);

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id, row) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setData(ticketsData.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    // const editedRow = ticketsData.find((row) => row.id === id);
    // if (editedRow.isNew) {
    //   setRows(ticketsData.filter((row) => row.id !== id));
    // }
  };
  return [
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
      flex: 3,
    },

    {
      field: "assignedToColumn",
      headerName: "Assigned To",
      flex: 2,
      editable: true,
      type: "singleSelect",
      valueOptions: [{ name: NotAssigned, _id:NotAssignedId,  }, ...technicians],
      getOptionValue: (option) => option._id,
      getOptionLabel: (option) => option.name,
      // valueFormatter: (params) => params._id,
    },
      // valueGetter: (params, row) => {
      //   // debugger
      //   return params.name !== NotAssigned ? params.name : NotAssigned;
      // },
    
    {
      field: "issue",
      headerName: "Issue",
      flex: 3,
    },
   
    {
      field: "status",
      headerName: "Status",
      flex: 3,
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
      flex: 2,
      valueGetter: (params) => dayjs(params.value).format("YYYY-MM-DD"),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      flex: 2,
      cellClassName: "actions",
      getActions: ({ row, id }) => {
        // debugger
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id, row)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
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
