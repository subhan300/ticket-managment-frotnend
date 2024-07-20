import { CloudUpload } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  styled,
  TextField,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import { FileUploader } from "../../../components";
import useCommentStore from "../store/CommentStore";
const Wrapper = styled(Box)(({ theme }) => ({
  // border: '1px solid red',
  display: "flex",
  alignItems: "center",
   zIndex:"220px",
  width: "100%",
  "& .MuiInputBase-root": {
    //   borderColor: theme.palette.grey[300],
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "1px solid red",
  },
  "& .MuiInputBase-input::placeholder": {
    //   color: "",
  },

  "& .MuiInputAdornment-root": {
    // paddingRight: '4px',
    // border:"1px solid yellow",
    display: "flex",
    alignItems: "center",
    padding: "0",

    "& .MuiButtonBase-root": {
      minWidth: "auto",
      paddingLeft: "0",
      // paddingRight:"0",
      // border:"1px solid yellow",
    },
  },
}));
const WriteComment = ({handleSubmit,initialText,loading, disableImageUpload}) => {
	const {setFiles,files,submitComment,}=useCommentStore(state=>state);
	const [text,setText]=useState(initialText)
	
  return (
    <Wrapper id="write_comment">
      <TextField
        fullWidth
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) =>{
			if(e.key==="Enter" && e.shiftKey===false){
				handleSubmit(text,setText)
			}
		}}
        placeholder="write a comment"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
            {!disableImageUpload &&  <FileUploader
                icon={
                  <AttachFileIcon
                    sx={{
                      color: "var(--gray-color)",
                      fontSize: "22px !important",
                      padding: "0",
                      marginTop: "8px",
                    }}
                  />
                }
                styles={{
                  padding: "0",
                  backgroundColor: "var(--text-primary-5)",
                  "&:hover": { backgroundColor: "var(--text-primary-5)" },
                }}
                files={files}
                setFiles={setFiles}
              />} 
              <IconButton
                aria-label="submit comment"
				disabled={loading || !text}
                onClick={() => handleSubmit(text,setText)} // Or any other action
                edge="end"
				sx={{"& .MuiSvgIcon-root":{marginLeft:"10px"},"&:hover":{width:"auto",}}}
              >
				{loading ? <CircularProgress size={24} /> : <SendIcon />}
                {/* <SendIcon /> */}
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            paddingRight: "12px",
          },
        }}
      >
		</TextField>
    </Wrapper>
  );
};

export default WriteComment;
