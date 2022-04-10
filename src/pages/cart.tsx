import { Card, Typography } from "@mui/material";

import { Header } from "../components/Header"
import { ContentWrapper } from '../components/ContentWrapper';

export const CartPage = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Card sx={{ padding: '1rem 2rem', marginBottom: '2rem' }}>
          <Typography variant="h2">Carrinho</Typography>
          <Typography>Aqui você pode consultar todos os itens que você já adicionou ao carrinho.</Typography>
        </Card>

        <Card sx={{ padding: '1rem 2rem', marginBottom: '1rem' }}>
          Item 1
        </Card>
      </ContentWrapper>
    </>
  )
}
