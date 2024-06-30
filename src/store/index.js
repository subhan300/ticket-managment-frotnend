import create from 'zustand';
import { MANAGER } from '../helper/constants';
// store.js
import {getLocalItem, setLocalItem} from "../utils"
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../apis/apiSlice';
// Import your reducers here
const user=getLocalItem('user')
// console.log("local suer00",user)
const useStore = create((set) => ({
  isAuthenticated: user?.token??null,
  user:user,
  userRole:user?.role, 
  setUserAuthenticated: (user) => {
    setLocalItem("user",user)
    const {role,token}=user
    return set({ isAuthenticated:token,userRole:role,user })
  },
  setLogOut:()=>{
    localStorage.removeItem("user")
    return set({ isAuthenticated: false,userRole:null,user:null })
  }
  // setUserRole: (role) => set({ userRole: role }),
}));

export default useStore;



export const store = configureStore({
  reducer: {
    // Add the api reducer to the store
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
