import React, { forwardRef, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import InventoryForm from "../inventoryForm/InventoryForm";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import DrawerHeader from "components/drawerHeader";
import Alert from "components/GlobalComponents/alert/Alert";
import useStore from "store";
import { useCreateTicketMutation } from "apis/apiSlice";
import useUpload from "hooks/useUpload";
import useInventoryStore from "../../store/InventoryStore";
import { InventoryInitialValues } from "@/data";
import { useCreateInventoryMutation } from "@/apis/apiSlice";
import { extractToken } from "@/utils";
import { useParams } from "react-router-dom";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateInventory({ isOpen, handleTicketDialog }) {
  const { data: paramsToken } = useParams();
  const [initialValues, setInitialValues] = useState(false);
  const { user, openAlert } = useStore((state) => state);
  const { setData, inventories } = useInventoryStore((state) => state);
  const [createInventory, result] = useCreateInventoryMutation();
  const {
    uploadToCloudinary,
    isLoading: cloudinaryLoading,
    error: cloudinaryError,
  } = useUpload();

  const { isLoading, isSuccess } = result;
  const handleOnFinish = async (values, productImages) => {
    if (productImages.length) {
      const uploadedImages = await uploadToCloudinary(productImages);
      values = {
        ...values,
        productImages: [...values.productImages, ...uploadedImages],
      };
    }

    const { error, data } = await createInventory({ ...values });
    if (data) {
      openAlert("Inventory is Successfully Created");
      handleTicketDialog(false);

      setData("inventories", [data, ...inventories]);
    } else {
      openAlert("Failed to create Inventory", "error");
    }
  };
  useEffect(() => {
    // debugger
    const getExtractedToken = extractToken(paramsToken, openAlert);
    if (getExtractedToken) {
      setInitialValues(getExtractedToken);
    } else {
      setInitialValues(InventoryInitialValues);
    }
  }, []);

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
          title={"Create Inventory"}
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
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          {initialValues && (
            <InventoryForm
              handleOnFinish={handleOnFinish}
              initialValues={{
                ...initialValues,
                userId: user?._id,
              }}
            />
          )}
        </Box>
      </Dialog>
    </>
  );
}
