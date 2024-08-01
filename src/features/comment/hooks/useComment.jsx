import React, { useState } from "react";
import useCommentStore from "../store/CommentStore";
import useUpload from "../../../hooks/useUpload";
import useStore from "../../../store";
import { useAddCommentMutation, useDeleteCommentMutation, useEditCommentMutation } from "../../../apis/apiSlice";

const UseComment = () => {
    const [popOverOpen, setPopOverOpen] = useState(null);
    const {
        setFiles,
        files,
        setAddLoading,
        addLoading,
        handleRemoveFile,
        commentList,
        setCommentList,
        comment,
        setLoading,
        setComment,
        setEditComment,
        comment: stateComment,
        setDeleteComment,
        deleteLoading,
        setDeleteLoading,
        ticketId,
      } = useCommentStore((state) => state);
     
  const [addComment, result] = useAddCommentMutation();
  const [editComment] = useEditCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const backendUrl = "http://localhost:3977";
  const user  = useStore((state) => state.user);
 
  const { uploadToCloudinary } = useUpload();
  const userId = user._id;
 

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
        createdAt: new Date(),
        isSystemGenerated:false
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
  
  const handleAddCommentNote = async (text) => {
    try {
      setAddLoading(true);
      let imagesCollection = [];
      if (files.length) {
        imagesCollection = await uploadToCloudinary(files);
      }
      debugger
      const response = await addComment({
        ticketId,
        userId,
        text,
        images: imagesCollection,
        createdAt: new Date(),
        isSystemGenerated:true
      });
      setCommentList(response.data);
      setFiles([]);
    } catch (error) {
      console.error("Error adding comment:", error);
    } finally {
      setAddLoading(false);
    }
  };
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
  const handleDelete = async (comment) => {
    try {
      setDeleteLoading(true);
      setDeleteComment(comment);
      await deleteComment({ ticketId, commentId: comment._id,userId:user._id });
    } catch (err) {
    } finally {
      setDeleteLoading(false)
      setPopOverOpen(false);
    }
  };
  return { handleAddComment,handleEditComment,handleDelete,popOverOpen ,setPopOverOpen,handleAddCommentNote};
};

export default UseComment;
