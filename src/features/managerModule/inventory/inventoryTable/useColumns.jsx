import { GridActionsCellItem, GridRowModes } from "@mui/x-data-grid";
// import {SaveIcon,VisibilityIcon,CancelIcon,EditIcon,DeleteIcon} from "@mui/icons-material/Edit";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import dayjs from "dayjs";
import { useTechnicianStore } from "../../store";
import useStore from "../../../../store";
import { COMPLETED, NotAssigned, NotAssignedId, OPEN, PROGRESS } from "../../../../helper";
import { statusCollection} from "../../../../data";

export const useColumns = (handleDrawer, rowModesModel, setRowModesModel) => {
  const { data: ticketsData, setData, technicians } = useTechnicianStore(
    (state) => state
  );
  const user = useStore((state) => state.user);

  return [
    {
      field: "productName",
      headerName: "Product Name",
      width: 170,
    },
    {
      field: "description",
      headerName: "Description",
      width: 170,
    },
    {
      field: "quantity",
      headerName: "quantity",
      width: 170,
    },

    {
      field: "status",
      headerName: "Status",
      width: 170,
    },
     
    
    {
      field: "location",
      headerName: "Location",
      width: 170,
    },
   
    {
      field: "category",
      headerName: "Category",
      width: 170,
   
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 170,
      valueGetter: (params) => dayjs(params.value).format("YYYY-MM-DD"),
    },
    // {
    //   field: "actions",
    //   type: "actions",
    //   headerName: "Actions",
    //   width: 100,
    //   flex: 2,
    //   cellClassName: "actions",
    //   getActions: ({ row, id }) => {
    //     // debugger
    //     const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

    //     if (isInEditMode) {
    //       return [
    //         <GridActionsCellItem
    //           icon={<SaveIcon />}
    //           label="Save"
    //           sx={{
    //             color: "primary.main",
    //           }}
    //           onClick={handleSaveClick(id, row)}
    //         />,
    //         <GridActionsCellItem
    //           icon={<CancelIcon />}
    //           label="Cancel"
    //           className="textPrimary"
    //           onClick={handleCancelClick(id)}
    //           color="inherit"
    //         />,
    //       ];
    //     }

    //     return [
    //       <GridActionsCellItem
    //         icon={<EditIcon />}
    //         label="Edit"
    //         className="textPrimary"
    //         onClick={handleEditClick(id)}
    //         color="inherit"
    //       />,
    //       <GridActionsCellItem
    //         icon={<VisibilityIcon />}
    //         label="View Details"
    //         onClick={() => handleDrawer(row)}
    //       />,
    //     ];
    //   },
    // },
  ];
};
