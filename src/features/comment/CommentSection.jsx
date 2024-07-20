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
  useGetTicketsByUserIdQuery,
} from "../../apis/apiSlice";
import UseCommentSocketConnection from "./hooks/useCommentSocketConnection";

const CommentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  padding: "10px",
  "& .comment_list": {
    marginTop: "1.5rem",
    height: "160px",
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
const CommentSection = ({ ticketId, userId }) => {
   UseCommentSocketConnection()
  const { data, isSuccess } = useGetAllTicketsQuery();
  const [addComment, result] = useAddCommentMutation();
  const {
    setFiles,
    files,
    setAddLoading,
    addLoading,
    handleRemoveFile,
    commentList,
    setCommentList,
  } = useCommentStore((state) => state);

  const { uploadToCloudinary } = useUpload();
  const handleAddComment = async (text, setText) => {
    try {
      setAddLoading(true);
      let imagesCollection = [];
      if (files.length) {
        imagesCollection = await uploadToCloudinary(files);
      }
      const response = await addComment({
        ticketId,
        userId,
        text,
        images: imagesCollection,
        createdAt:new Date()

      });
      setCommentList(response.data);
      setText("");
      setFiles([]);
    } catch (error) {
      console.error("Error adding comment:", error);
    } finally {
      setAddLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess && data.length) {
      // debugger
      const filterComment = data.filter((val) => val._id === ticketId);
      setCommentList(filterComment?.[0]?.comments);
    }
  }, [isSuccess]);
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
              comment={{
                createdAt: val.createdAt,
                text: val.text,
                _id: val._id,
                images: val.images,
                userId:val.userId
              }}
            />
          );
        })}
      </Box>
    </CommentWrapper>
  );
};

export default CommentSection;
