
import { styled } from "styled-components";

export const SideBarStyled = styled.div`
  /* .sidebar { */
    /* width: ${(props) => `${props.sidebarWidth} !important`}; */
    border: 1px solid green;
    position: fixed;
    height: 100%;
    cursor: pointer;
    display: block;
    transition: width 0.3s ease-out;
  /* } */

  @media only screen and (max-width: 768px) {
    /* .sidebar { */
      display: none;
    /* } */
  }
`;
