import create from 'zustand';
import { MANAGER } from '../helper/constants';

const useStore = create((set) => ({
  isAuthenticated: true,
  userRole: MANAGER, // 'manager', 'technician', 'user'
  setUserAuthenticated: (authenticated) => set({ isAuthenticated: authenticated }),
  setUserRole: (role) => set({ userRole: role }),
}));

export default useStore;
