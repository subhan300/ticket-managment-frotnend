import { Box } from "@mui/material";
import React from "react";
import WriteComment from "./WriteComment";
import useCommentStore from "../store/CommentStore";
import useStore from "../../../store";
import axios from "axios";
import useUpload from "../../../hooks/useUpload";
import { useEditCommentMutation } from "../../../apis/apiSlice";

const EditComment = () => {
  const [editComment, result] = useEditCommentMutation();
  const {
    comment,
    setLoading,
    setComment,
    files,
    setFiles,
    setEditComment,
    isLoading,
    ticketId
  } = useCommentStore((state) => state);
  const user = useStore((state) => state.user);
  const backendUrl = "http://localhost:3977";

  const handleEditComment = async (text, setText) => {
    try {
      setLoading(true);
      setEditComment({ ...comment, text });
      let imagesCollection = [];
      if (files.length) {
        // imagesCollection = await uploadToCloudinary(files);
      }
      await editComment({ticketId,userId: user._id,text,commentId:comment._id,createdAt:new Date()});
      setText("");
      setComment("");
      setFiles([]);
    } catch (error) {
      console.error("Error adding comment:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box>
      <WriteComment
        handleSubmit={handleEditComment}
        initialText={comment.text}
        loading={isLoading}
        disableImageUpload={true}
      />
    </Box>
  );
};

export default EditComment;
