import { Box } from "@mui/material";
import React from "react";
import WriteComment from "./WriteComment";
import useCommentStore from "../store/CommentStore";
import useStore from "../../../store";
import axios from "axios";
import useUpload from "../../../hooks/useUpload";
import { useEditCommentMutation } from "../../../apis/apiSlice";
import UseComment from "../hooks/useComment";

const EditComment = () => {
  const {
    isLoading,
    comment,
 
  } = useCommentStore((state) => state);
   const {handleEditComment}=UseComment()
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
