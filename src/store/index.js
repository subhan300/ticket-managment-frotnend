import create from 'zustand';

const useStore = create((set) => ({
  isAuthenticated: false,
  userRole: 'user', // 'manager', 'technician', 'user'
  setUserAuthenticated: (authenticated) => set({ isAuthenticated: authenticated }),
  setUserRole: (role) => set({ userRole: role }),
}));

export default useStore;
