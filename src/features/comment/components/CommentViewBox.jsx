import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import { dateFormatTime } from "../../../utils";
import { DeleteOutline, Visibility } from "@mui/icons-material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import WriteComment from "./WriteComment";
import EditComment from "./EditComment";
import useCommentStore from "../store/CommentStore";
import { useDeleteCommentMutation } from "../../../apis/apiSlice";
import { ActionPopup } from "../../../components";
import useStore from "../../../store";
const CommentContainer = styled(Box, {
  shouldForwardProp: (props) => props != "open" && props !== 'showEditOptions',
})(({ theme, open,showEditOptions }) => ({
  display: "flex",
  gap: theme.spacing(2),
  padding: "1rem",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  "& .comment_avatar": {
    width: 40,
    height: 40,
    // borderRadius: "50%",
  },
  "& .comment_details": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    gap: theme.spacing(1),
  },
  "& .comment_content": {
    display: "flex",
    gap: "8px",
    alignItems: "flex-start",
  },
  "& .comment_name": {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  "& .comment_date": {
    color: theme.palette.text.secondary,
  },
  "& .comment_text_content": {
    //  border:"1px solid yellow"
  },
  "& .comment_text": {
    marginTop: theme.spacing(1),
  },
  "& .edit_delete_btn": {
    display: "flex",
    position: "relative",
    gap: "4px",
    visibility: open && showEditOptions ? "visible" : "hidden",
    "& .popup_btns": {
      border: "1p solid red",
      display: "flex",
      marginTop: "10px",
      gap: "4px",
      justifyContent: "flex-start",
      alignItems: "center",
    },

    "& .MuiIconButton-root": {
      marginTop: "-6px",
    },
  },
  "&:hover .edit_delete_btn": {
    visibility:showEditOptions? "visible":"hidden",
  },
  "& .img_list": {
    display: "flex",
    justifyContent: "flex-start",
    gap: "8px",
    "& .MuiBox-root": {
      width: "160px",
      border: "1px solid red",
      height: "160px",
      marginTop: "1rem",
    },
  },
}));

const CommentViewBox = ({ comment}) => {
  const [deleteComment, result] = useDeleteCommentMutation();
  const [popOverOpen, setPopOverOpen] = useState(null);
  const user=useStore(state=>state.user)
  const {
    setComment,
    comment: stateComment,
    ticketId,
    setDeleteComment,
    deleteLoading,
    setDeleteLoading,
  } = useCommentStore((state) => state);
  const handleEdit = () => {
    setComment(comment);
  };
  const handleDelete = async () => {
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
  return (
    <CommentContainer open={open} showEditOptions={user._id===comment.userId}>
      <Box className="comment_details">
        <Box className="comment_content">
          <Avatar
            alt="Avatar"
            src="https://thiswayglobal.myjetbrains.com/hub/api/rest/avatar/cf696da7-ccc7-4b4d-8f1a-5923595cd06d?s=48&dpr=1&size=32"
            className="comment_avatar"
          />
          <Box className="comment_text_content">
            <Typography variant="body1" className="comment_name">
              {comment?.name}
            </Typography>
            <Typography variant="body2" className="comment_date">
              {`${dateFormatTime(comment?.createdAt)}`}
            </Typography>
            <Box>
              {stateComment._id === comment._id && user._id=== comment.userId? (
                <EditComment />
              ) : (
                <Typography variant="body2" className="comment_text">
                  {comment.text}
                </Typography>
              )}
              <Box className="img_list">
                {comment.images.map((val) => (
                  <Box key={val}>
                    <img  alt="images" src={val} />{" "}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="edit_delete_btn">
          <IconButton
            aria-label="submit comment"
            onClick={() => handleEdit()} // Or any other action
            edge="end"
          >
            <ModeEditIcon />
          </IconButton>
          <ActionPopup open={popOverOpen}>
            <Box>
              {deleteLoading && (
                <Box
                  sx={{ postion: "absolute", marginLeft: "3rem", top: "1rem" }}
                >
                  <CircularProgress size={24} />{" "}
                </Box>
              )}
              <Typography>Are you sure you want to delete comment ?</Typography>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "10px",
                  gap: "4px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
                className="popup_btns"
              >
                <Button
                  disabled={deleteLoading}
                  variant="contained"
                  onClick={handleDelete}
                >
                  Yes
                </Button>
                <Button
                  disabled={deleteLoading}
                  variant="contained"
                  onClick={(e) => {
                    setPopOverOpen(null);
                  }}
                >
                  No
                </Button>
              </Box>
            </Box>
          </ActionPopup>
          <IconButton
            aria-label="submit comment"
            // disabled={isLoading || !text}
            onClick={(e) => setPopOverOpen(e.currentTarget)} // Or any other action
            edge="end"
            // sx={{"& .MuiSvgIcon-root":{marginLeft:"10px"},"&:hover":{width:"auto",}}}
          >
            <DeleteOutline />
            {/* <SendIcon /> */}
          </IconButton>
        </Box>
      </Box>
    </CommentContainer>
  );
};

export default CommentViewBox;
