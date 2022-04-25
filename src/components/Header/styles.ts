import { Container } from "@mui/material";
import styled from "styled-components";

export const Header = styled.header`
  height: 4rem;
  width: 100%;
  background-color: #FFF;
  border-bottom: 1px solid #ddd;

  display: flex;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
