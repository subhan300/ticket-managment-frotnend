import { Delete } from '@mui/icons-material';
import { Grid, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';

const UploadFileList = ({imgFiles=[],handleRemoveFile}) => {
    return (
        <Grid container spacing={2}>
        {imgFiles.map((file, index) => (
          <Grid item key={index}>
            <Paper
              variant="outlined"
              sx={{ display: 'flex', alignItems: 'center', padding: 1 }}
            >
              <Typography variant="body2" sx={{ flexGrow: 1 }}>
                {file.name}
              </Typography>
              <IconButton
                size="small"
                onClick={() => handleRemoveFile(file)}
              >
                <Delete />
              </IconButton>
            </Paper>
          </Grid>
        ))}
        </Grid>
    );
}

export default UploadFileList;
