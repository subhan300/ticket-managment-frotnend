import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { columns, data, details } from './columns';
import TicketDrawer from '../ticketDrawer';
import { useTheme } from '@mui/material';

const initialValue={
  userId: '12345', // Replace with actual user ID
  issue: 'Network connectivity issue in conference room A',
  description: 'Wi-Fi connection keeps dropping intermittently in conference room A. Users are unable to maintain a stable connection for video calls and presentations.',
  assignedTo: "Me", // Or any member from assignedToMembers
  status: 'OPEN',
  issueLocation: {
    locationName: 'Conference Room A',
    unit: 'Building 2',
    floor: '3rd Floor',
    room: 'A-101',
    extraDetail: 'Near the east window',
  },
}

export default function DataGridDemo() {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawer=(value)=>{
    setIsOpen(value)
    console.log("iso",isOpen,'---',value)
  }
  console.log("iso",isOpen)
  return (
    <>
    
  {isOpen &&  <TicketDrawer initialValues={initialValue} handleDrawer={handleDrawer} isOpen={isOpen} row={details} />}
     <Box sx={{width:"100%",overflow:"auto"
    //  [theme.breakpoints.down('sm')]: {
    //       width: 'calc(100% - 200px)', 
    //       },
          }}>
     <DataGrid
      sx={{ width:"100%",'& .MuiDataGrid-filler': { backgroundColor: 'var(--table-header)' }}}
        rows={data}
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
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnSelector
      />
     </Box>

    </>
  );
}
