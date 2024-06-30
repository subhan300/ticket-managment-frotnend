import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { columns, data } from './columns';


export default function DataGridDemo() {
  return (
    // <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
      sx={{ '& .MuiDataGrid-filler': { backgroundColor: 'var(--table-header)' }}}
        rows={data}
        columns={columns}
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
    // </Box>
  );
}
