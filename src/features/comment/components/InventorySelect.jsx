import React from 'react';
import { Select, MenuItem, Checkbox, ListItemText, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const InventorySelect = ({ formikInventory, inventoryItems,quantity,setQuantity }) => {
  const handleQuantityChange = (id, quantityPayload,selectedProduct) => {
    // const updatedInventory = formikInventory.values.inventoryUsed.map(item => {
        // debugger
    //  if(formikInventory.values.inventoryUsed.some(item=>item===id)){
    // debugger
        const qtyIndex=quantity.findIndex(val=>val._id===id)
        setQuantity((prev) => {
          if (qtyIndex > -1) {
            const newUpdateQty = { ...quantity[qtyIndex], quantityUsed: quantity[qtyIndex].quantityUsed + quantityPayload };
            return [...prev.slice(0, qtyIndex), newUpdateQty, ...prev.slice(qtyIndex + 1)];
          } else {
            return [...prev, { _id: id, quantityUsed: quantityPayload }];
          }
        });
        formikInventory.setFieldValue(`quantityUsed.${id}`,quantityPayload);

  };

  return (
    <Select
      multiple
      value={formikInventory.values.inventoryUsed.map(item => item)}
      id="inventoryUsed"
      name="inventoryUsed"
      onChange={formikInventory.handleChange}
      renderValue={(selected) => {
        return selected
          .map((id) => {
            const selectedProduct = inventoryItems.find(
              (product) => product._id === id
            );
            return selectedProduct?.productName;
          })
          .join(", ");
      }}
    >
      {inventoryItems.map(({ productName, _id }) => {
        const selectedProduct = formikInventory.values.inventoryUsed.find(item => item === _id);
        const quantityExtract=quantity.filter(val=>val._id===_id)[0]
        return (
          <MenuItem key={_id} value={_id} sx={{zIndex:"20"}}>
            <Checkbox
              
              checked={formikInventory.values.inventoryUsed.some(item => item === _id)}
            />
            <ListItemText primary={productName} />
            {selectedProduct && (
              <div style={{ display: 'flex', alignItems: 'center',zIndex:"40" }}>
                <IconButton
                  size="small"
                  onClick={(e) =>{
                    e.stopPropagation();
                    handleQuantityChange(_id, -1)}}
                  disabled={selectedProduct.quantityUsed <= 1}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <TextField
                  value={quantityExtract?.quantityUsed??1}
                  inputProps={{
                    style: { width: 40, textAlign: 'center' }
                  }}
                  disabled
                />
                <IconButton size="small" onClick={(e) =>{
                     e.stopPropagation();
                    handleQuantityChange(_id, 1,)}}>
                  <AddIcon fontSize="small" />
                </IconButton>
              </div>
            )}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default InventorySelect;
