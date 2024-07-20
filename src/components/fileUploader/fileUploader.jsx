import React, { useState } from 'react';
import { Box, Button, IconButton, CircularProgress, Typography, Grid, Paper } from '@mui/material';

import useUpload from '../../hooks/useUpload';

const MAX_TOTAL_SIZE_MB = 5;
const MAX_TOTAL_SIZE_BYTES = MAX_TOTAL_SIZE_MB * 1024 * 1024;

const FileUploader = ({ files, setFiles,icon,styles,buttonName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    const totalSize = [...files, ...newFiles].reduce((acc, file) => acc + file.size, 0);

    if (totalSize > MAX_TOTAL_SIZE_BYTES) {
      setError(`Total file size cannot exceed ${MAX_TOTAL_SIZE_MB} MB`);
    } else {
      setFiles([...files, ...newFiles]);
      setError(null);
    }
  };

  const handleRemoveFile = (file) => {
    setFiles(files.filter(f => f !== file));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setError(null);

    useUpload(files)
      .then(() => {
        setIsLoading(false);
        // handle success
      })
      .catch((uploadError) => {
        setIsLoading(false);
        setError(uploadError);
      });
  };

  return (
    <Box>
      <Button
        // variant="contained"
        component="label"
        startIcon={icon}
        sx={{ marginBottom: 2 ,...styles}}
      >
         {/* Upload Files */}
            {buttonName}
        {/* <CloudUpload /> */}
        {/* Upload Files */}
        <input
          type="file"
          multiple
          hidden
          onChange={handleFileChange}
        />
      </Button>
      {error && <Typography color="error">{error}</Typography>}
  
     
    </Box>
  );
};

export default FileUploader;
