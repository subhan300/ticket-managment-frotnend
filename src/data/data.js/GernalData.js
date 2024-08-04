import {
  COMPLETED,
  InStock,
  LowStock,
  OPEN,
  OutOfStock,
  PROGRESS,
} from "../../helper";

// export const statusCollection=[OPEN, COMPLETED, PROGRESS]
export const statusCollection = [OPEN, COMPLETED, PROGRESS];
export const inventoryStatusCollection = [InStock, OutOfStock, LowStock];

export const InventoryInitialValues = {
  productName: "",
  productImages: [],
  description: "",
  quantity: "",
  usedItem: "",
  location: "",
  category: "",
  status: InStock,
};
