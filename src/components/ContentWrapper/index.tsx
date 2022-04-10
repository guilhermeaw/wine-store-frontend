import { Container } from "@mui/material";

import * as S from './styles';

type ContentWrapperProps = {
  children: React.ReactNode
}

export const ContentWrapper = ({children}: ContentWrapperProps) => (
  <S.ContentWrapper>
    <Container maxWidth="xl">
      {children}
    </Container>
  </S.ContentWrapper>
)
