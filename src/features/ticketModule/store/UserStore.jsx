import {create} from "zustand";

const useUserStore = create((set) => ({
  data:[],
  isLoading: false,
  ticket:{},
  setCommentList: (payloadComments) => {
    set((state) => ({
      commentList: payloadComments,
    }));
  },

  setLoading: (value) => set({ isLoading: value }),
  setAddLoading: (value) => set({ addLoading: value }),
  setDeleteLoading: (value) => set({ deleteLoading: value }),
  setData: (data) => set({ data }),
  setTicket: (value) => set({ ticket: value }),

  setEditData: (data) => {
    set((state) => {
      const ticketIndex = state.data.findIndex(
        (val) => val._id === data._id
      );
      const updatedTicketList = [...state.data];
      updatedTicketList[ticketIndex] = data;
      return {
        ...state,
        data: updatedTicketList,
        ticket:data
      };
    });
  },
}));

export default useUserStore;
