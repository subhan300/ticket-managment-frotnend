import { create } from "zustand";

const useInventoryStore = create((set) => ({
  inventories: [],
  data: [],
  isLoading: false,
  technicians: [],
  ticket: {},
  inventory:{},

  // Combined setLoading function
  setLoading: ( value) =>
    set({ [`isLoading`]: value }),

  // Combined setData function
  setData: (key, value) =>
    set({ [key]: value }),

  // Combined setEditData function
  setEditData: (key, data) =>
    set((state) => {
        const itemIndex = state.data.findIndex((val) => val._id === data._id);
        if (itemIndex !== -1) {
          const itemTicketList = [...state.data];
          updatedItemList[itemIndex] = data;
          return {
            ...state,
            [key]: updatedItemList,
          };
        }
      return { [key]: value };
    }),
}));

export default useInventoryStore;