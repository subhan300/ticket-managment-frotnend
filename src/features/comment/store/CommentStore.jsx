import {create} from "zustand";

const useCommentStore = create((set) => ({
  files: [],
  comment: "",
  commentList: [],
  isLoading: false,
  addLoading: false,
  deleteLoading:false,
  ticketId: "66930b4fd27c53bc169b704b",
  setCommentList: (payloadComments) => {
    set((state) => ({
      commentList: payloadComments,
    }));
  },

  setEditComment: (payloadComment) => {
    set((state) => {
      const commentIndex = state.commentList.findIndex(
        (val) => val._id === payloadComment._id
      );
      const updatedCommentList = [...state.commentList];
      updatedCommentList[commentIndex] = payloadComment;
      return {
        ...state,
        commentList: updatedCommentList,
      };
    });
  },
  setDeleteComment: (payloadComment) => {
    set((state) => {
      const filterComments=state.commentList.filter(val=>val._id!==payloadComment._id)
      return {
        commentList: filterComments,
      };
    });
  },

  setFiles: (payloadFile) =>
    set((state) => ({
      files: [...payloadFile, ...state.files],
    })),

  handleRemoveFile: (file) => {
    set((state) => {
      return { files: state.files.filter((val) => val.name !== file.name) };
    });
  },

  setLoading: (value) => set({ isLoading: value }),
  setAddLoading: (value) => set({ addLoading: value }),
  setDeleteLoading: (value) => set({ deleteLoading: value }),
  setComment: (value) => set({ comment: value }),
  setTicketId: (value) => set({ ticketId: value }),
}));

export default useCommentStore;
