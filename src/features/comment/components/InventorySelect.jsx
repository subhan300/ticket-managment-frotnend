import React from 'react';
import { Select, MenuItem, Checkbox, ListItemText, IconButton, TextField, Button, Autocomplete } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const InventorySelect = ({ formikInventory, inventoryItems}) => {

  const filterInventory=(id)=>{
      if(formikInventory.values.inventoryUsed.some(val=>val.inventoryId===id)){
        const getItems=formikInventory.values.inventoryUsed.filter(val=>val.inventoryId !== id)
        formikInventory.setFieldValue("inventoryUsed",getItems)
      }else{
        formikInventory.setFieldValue("inventoryUsed",[...formikInventory.values.inventoryUsed,{inventoryId:id,quantityUsed:1}])
      }
   
  }
const handleQuantityChange = (id, val) => {
  const getItemIndex = formikInventory.values.inventoryUsed.findIndex((val) => val.inventoryId === id);
  if (getItemIndex !== -1) {
    const updatedItems = [...formikInventory.values.inventoryUsed];
    updatedItems[getItemIndex] = { ...updatedItems[getItemIndex], quantityUsed: updatedItems[getItemIndex].quantityUsed + (val) };
    formikInventory.setFieldValue("inventoryUsed", updatedItems);
  }
};
// console.log("formikInventory.values.inventoryUsed",formikInventory.values.inventoryUsed,"inventory items",inventoryItems)
  return (
    <>
    <Select
      multiple
      value={formikInventory.values.inventoryUsed.map(item => item)}
      // id="inventoryUsed"
      // name="inventoryUsed"
      // onChange={formikInventory.handleChange}
      renderValue={(selected) => {
        return selected
          .map((val) => {
            const selectedProduct = inventoryItems.find(
              (product) => product._id === val.inventoryId
            );
            return selectedProduct?.productName;
          })
          .join(", ");
      }}
    >
      {inventoryItems.map(({ productName, _id }) => {
        const selectedProduct = formikInventory.values.inventoryUsed.find(item => item.inventoryId=== _id);
        return (
          <MenuItem disableAutoFocusItem disablePortal  onClick={()=>{filterInventory(_id)}} 
          key={_id} value={{quantityUsed:1,inventoryId:_id}} sx={{zIndex:"20"}}>
            <Checkbox
              onChange={()=>{filterInventory(_id)}}
              checked={formikInventory.values.inventoryUsed.some(item => item.inventoryId === _id)}
            />
            <ListItemText  primary={productName} />
            {selectedProduct && (
              <div style={{ display: 'flex', alignItems: 'center',zIndex:"40" }}>
                <IconButton
                  size="small"
                  onClick={(e) =>{
                    e.stopPropagation();
                      handleQuantityChange(_id, -1)
                   
                  }}
                  disabled={selectedProduct.quantityUsed <= 1}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <TextField
                  value={selectedProduct.quantityUsed}
                  inputProps={{
                    style: { width: 40, textAlign: 'center' }
                  }}
                  disabled
                />
                <IconButton size="small" onClick={(e) =>{
                     e.stopPropagation();
                    handleQuantityChange(_id, 1,)
                    }}>
                  <AddIcon fontSize="small" />
                </IconButton>
              </div>
            )}
          </MenuItem>
        );
      })}
    </Select>
    


    </>
  );
};

export default InventorySelect;
