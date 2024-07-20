import React ,{ forwardRef, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import TicketForm from "../ticketForm/TicketForm";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import DrawerHeader from "../../../components/drawerHeader";
import { ticketInitialValues } from "../../../data/sidebar";
import useStore from "../../../store";
import { useCreateTicketMutation } from "../../../apis/apiSlice";
import useCustomNavigate from "../../../hooks/useCustomNavigate";
import Alert from "../../../components/GlobalComponents/alert/Alert";
import useUpload from "../../../hooks/useUpload";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateTicket({ isOpen, handleTicketDialog }) {
  const navigate = useCustomNavigate();
  const [createTicket, result] = useCreateTicketMutation();
  const {
    uploadToCloudinary,
    isLoading: cloudinaryLoading,
    error: cloudinaryError,
  } = useUpload();

  const { isLoading, isSuccess } = result;
  const user = useStore((state) => state.user);
  const handleOnFinish = async (values) => {
    const uploadedImages = await uploadToCloudinary(values.images);
    createTicket({ ...values, images: uploadedImages });
    //  navigate("/")
  };
  useEffect(() => {
    if (isSuccess) {
      handleTicketDialog(false);
    }
  }, [isSuccess]);

  return (
    <>
      <Alert />
      <Dialog
        fullScreen
        open={isOpen}
        onClose={() => {
          handleTicketDialog(false);
        }}
        TransitionComponent={Transition}
      >
        <DrawerHeader
          title={"Create Ticket"}
          handleTicketDialog={handleTicketDialog}
        ></DrawerHeader>

        <Box sx={{ paddingBottom: "2rem" }}>
          <Backdrop
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={isLoading || cloudinaryLoading}
            // onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <TicketForm
            handleOnFinish={handleOnFinish}
            initialValues={{ ...ticketInitialValues, userId: user?._id }}
          />
        </Box>
      </Dialog>
    </>
  );
}
