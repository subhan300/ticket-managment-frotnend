import {create} from 'zustand';
import { maxSideWidth, minSideWidth, sideBarWidthCons } from '../../helper/constants';
import useWindowWidth from '../../hooks/useWidth';

const useSidebarStore = create((set) => ({
  layoutWidth: {
    sidebarWidth: sideBarWidthCons,
    mainContentWidth: '100%',
  },
  toggleSidebar: () => set((state) => {
    const newWidth = state.layoutWidth.sidebarWidth === maxSideWidth
      ? minSideWidth
      : maxSideWidth;
    return {
      layoutWidth: {
        sidebarWidth: newWidth,
        mainContentWidth: '100%',
      }
    };
  }),
  setInitialWidth: (width) => {
    
    if (width <= 768) {
      set({ layoutWidth: { sidebarWidth: '0%', mainContentWidth: '100%' } });
    } else {
    set({ layoutWidth: { sidebarWidth: sideBarWidthCons, mainContentWidth: '100%' } });
    }
  }
}));

export default useSidebarStore;
