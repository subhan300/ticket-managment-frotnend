import { useState, useEffect } from "react";
import useSidebarStore from "../store/sidebarStore";
import useWindowWidth from "./useWidth";

const useLayoutWidth = () => {
  const { layoutWidth, setInitialWidth } = useSidebarStore();
  const width = useWindowWidth();

  useEffect(() => {
    setInitialWidth(width);
  }, [width]);

  return layoutWidth.sidebarWidth;
};

export default useLayoutWidth;
