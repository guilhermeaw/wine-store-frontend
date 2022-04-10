import { Button, Card, Typography } from "@mui/material";

import { Header } from "../components/Header"
import { ContentWrapper } from '../components/ContentWrapper';
import { useCart } from "../store/Cart";

export const CartPage = () => {
  const { products, increment, decrement } = useCart();

  return (
    <>
      <Header />
      <ContentWrapper>
        <Card sx={{ padding: '1rem 2rem', marginBottom: '2rem' }}>
          <Typography variant="h2">Carrinho</Typography>
          <Typography>Aqui você pode consultar todos os itens que você já adicionou ao carrinho.</Typography>
        </Card>

        {
          products?.map(cartItem => (
            <Card key={cartItem.id} sx={{ padding: '1rem 2rem', marginBottom: '1rem' }}>
              <Typography>{cartItem.title}</Typography>
              <Button onClick={() => decrement(cartItem.id)} variant="contained">-</Button>
              <Button onClick={() => increment(cartItem.id)} variant="contained">+</Button>
              <Typography>Quantidade: {cartItem.quantity}</Typography>
            </Card>
          ))
        }
      </ContentWrapper>
    </>
  )
}
