// apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getLocalItem } from "../utils";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3977/api",
    prepareHeaders: (headers) => {
      const token = getLocalItem("user")?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Post", "User", "ticket"], // Include tagTypes here
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getUnits: builder.query({
      query: (companyId) => `/unit/company/${companyId}`,
    }),
    getRooms: builder.query({
      query: (unitId) => `/unit/company/unit/${unitId}`,
    }),
    getTechniciansByCompanyId: builder.query({
      query: (companyId) => `/companies/users/${companyId}`,
    }),
    getTicketsByUserId: builder.query({
      query: (userId) => `/ticket/user/${userId}`,
      providesTags: ["ticket"],
    }),
    getFilteredCompanyTickets: builder.query({
      query: () => `/ticket/getFilteredCompanyTickets`,
      providesTags: ["ticket"],
    }),
    getAllTickets: builder.query({
      query: () => `/ticket/getAll`,
      providesTags: ["ticket"],
    }),
    getInventoryItems: builder.query({
      query: () => `/inventory/company/short-details/items`,
      // providesTags: ["ticket"],
    })
    ,

    createTicket: builder.mutation({
      query: (payload) => ({
        url: `/ticket/create/`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["ticket"], // Invalidate 'Ticket' tag on successful mutation
    }),
    editTicket: builder.mutation({
      query: (payload) => {
        console.log("id-===", "payload==", payload);
        return {
          url: `/ticket/update/${payload._id}`,
          method: "PUT",
          body: payload,
        };
      },
      invalidatesTags: ["ticket"], // Invalidate 'Ticket' tag on successful mutation
    }),
    editComment: builder.mutation({
      query: (payload) => {
        const { ticketId, commentId, userId, text, createdAt } = payload;
        return {
          url: `/comment/${ticketId}/comment/${commentId}`,
          method: "PUT",
          body: { text, userId, createdAt },
        };
      },
    }),
    addComment: builder.mutation({
      query: (payload) => {
        const { ticketId, userId, text, images, createdAt } = payload;
        return {
          url: `/comment/${ticketId}`,
          method: "POST",
          body: { userId, text, images, createdAt },
        };
      },
    }),
    deleteComment: builder.mutation({
      query: (payload) => {
        const { ticketId, commentId, userId } = payload;
        return {
          url: `/comment/${ticketId}/comment/${commentId}`,
          method: "DELETE",
          body: { userId },
        };
      },
    }),
  }),
});

export const {
  useGetTicketsByUserIdQuery,
  useGetFilteredCompanyTicketsQuery,
  useGetAllTicketsQuery,
  useLoginMutation,
  useCreateTicketMutation,
  useGetRoomsQuery,
  useGetUnitsQuery,
  useGetTechniciansByCompanyIdQuery,
  useEditTicketMutation,
  useEditCommentMutation,
  useDeleteCommentMutation,
  useAddCommentMutation,
  useGetInventoryItemsQuery
} = apiSlice;
