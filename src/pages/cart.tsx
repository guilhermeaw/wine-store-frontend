import { Button, Card, Stack, Typography } from "@mui/material";

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
              <Stack direction="row">
                <div style={{ width: '100%' }}>
                  <Typography variant="h2">{cartItem.title}</Typography>
                  <Typography>Quantidade: {cartItem.quantity}</Typography>
                </div>
                
                <div style={{ display: 'flex' }}>
                  <Button sx={{ marginRight: '0.5rem' }} onClick={() => decrement(cartItem.id)} variant="contained">-</Button>
                  <Button onClick={() => increment(cartItem.id)} variant="contained">+</Button>
                </div>
              </Stack>
            </Card>
          ))
        }
      </ContentWrapper>
    </>
  )
}
