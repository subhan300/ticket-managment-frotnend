import { Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import CommentViewBox from "./components/CommentViewBox";
import WriteComment from "./components/WriteComment";
import useCommentStore from "./store/CommentStore";
import { UploadFileList } from "../../components";
import useUpload from "../../hooks/useUpload";
import axios from "axios";
import {
  useAddCommentMutation,
  useGetAllTicketsQuery,
} from "../../apis/apiSlice";
import UseCommentSocketConnection from "./hooks/useCommentSocketConnection";
import useStore from "../../store";
import UseComment from "./hooks/useComment";

const CommentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  padding: "10px 0",
  "& .comment_list": {
    marginTop: "1.5rem",
    height: "250px",
    overflow: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "var(--text-primary-5)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "var(--scroll-color)",
      borderRadius: "4px",
      border: `2px solid var(--scroll-color)`,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "var(--scroll-color)",
    },
    "&::-webkit-scrollbar-thumb:active": {
      backgroundColor: "var(--scroll-color)",
    },
  },
  "& .upload_list": {
    marginBottom: "10px",
  },
}));
const CommentSection = () => {
   UseCommentSocketConnection()

  const {
    files,
    addLoading,
    handleRemoveFile,
    commentList,
    
  } = useCommentStore((state) => state);
 const {handleAddComment}=UseComment()
 
 
  return (
    <CommentWrapper>
      <Box sx={{}}>
        <Box className="upload_list">
          <UploadFileList
            handleRemoveFile={handleRemoveFile}
            imgFiles={files}
          />
        </Box>
        <WriteComment
          loading={addLoading}
          initialText={""}
          handleSubmit={handleAddComment}
          disableImageUpload={false}
        />
      </Box>
      <Box className="comment_list">
        {commentList?.map((val) => {
          return (
            <CommentViewBox
              key={val._id}
              comment={{...val,userId:val?.userId}}
              // comment={{
              //   createdAt: val.createdAt,
              //   text: val.text,
              //   _id: val._id,
              //   images: val.images,
              //   userId:val.userId,
                
              // }}
            />
          );
        })}
      </Box>
    </CommentWrapper>
  );
};

export default CommentSection;
