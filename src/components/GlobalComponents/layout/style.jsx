import { Box } from "@mui/material";
import styled from "styled-components";


export const BoxContent=styled(Box)`
   position: absolute;
    right: 0;
    top: 0;
    /* width: ${(props) => `calc(100% - ${props.contentWidth}) !important`}; */
    transition: width 0.3s ease-out;
    /* margin-left: ${(props) => `${props.contentWidth}`}; */
    @media only screen and (max-width: 768px) {
      width: 100% !important;
      margin-left: 0;
      left: 0;
  }
`
export const LayoutStyle = styled.div`
  .dashboard_layout {
    border: 1px solid red;
  }

  .dasboard_content {
   
  }

  .dashboard_container {
    display: flex;
    width: 100%;
  }

  

  
`;

export const BottomBarBox = styled(Box)`
  position: fixed;
  bottom: 0;
  left: 0;
  border: 1px solid gray !important;
  background-color: white;
  width: 100%;
  z-index: 1000 !important;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
