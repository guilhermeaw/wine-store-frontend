import { Container } from "@mui/material";

import * as S from './styles';

type ContentWrapperProps = {
  children: React.ReactNode
}

export const ContentWrapper = ({children}: ContentWrapperProps) => (
  <S.ContentWrapper>
    <Container sx={{ padding: '2rem 0' }} maxWidth="xl">
      {children}
    </Container>
  </S.ContentWrapper>
)
