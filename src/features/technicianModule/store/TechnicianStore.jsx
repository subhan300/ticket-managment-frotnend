import {create} from "zustand";

const useTechnicianStore = create((set) => ({
  data:[],
  isLoading: false,
  technicians:[],
  setCommentList: (payloadComments) => {
    set((state) => ({
      commentList: payloadComments,
    }));
  },

  setLoading: (value) => set({ isLoading: value }),
  setAddLoading: (value) => set({ addLoading: value }),
  setDeleteLoading: (value) => set({ deleteLoading: value }),
  setData: (data) => set({ data }),
  setTechnician:(technicians)=>set({technicians}),
  setTicketId: (value) => set({ ticketId: value }),
}));

export default useTechnicianStore;
