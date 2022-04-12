import { Container } from "@mui/material";
import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 4rem;
  width: 100%;
  z-index: 2;
  background-color: #FFF;
  border-bottom: 1px solid #ddd;

  display: flex;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
