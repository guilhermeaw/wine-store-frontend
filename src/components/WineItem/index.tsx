import { Button, Card, Divider, Grid, Typography } from "@mui/material";

import { Wine } from "../../models/Wine";
import { useCart } from "../../store/Cart";

type WineItemProps = {
  wine: Wine
}

export const WineItem = ({ wine }: WineItemProps) => {
  const { addToCart } = useCart();

  const { title, description, imageUrl } = wine;

  const handleAddToCart = () => {
    addToCart(wine);
  }

  return (
    <Grid item xs={4}>
      <Card sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
        <img src={imageUrl} alt="Imagem de um vinho" height="120px" width="120px" style={{ alignSelf: 'center' }} />
        <Divider sx={{ margin: '1.5rem 0' }} />
        <div>
          <Typography variant="h2">{title}</Typography>
          <Typography>{description}</Typography>
          <Button onClick={handleAddToCart} sx={{ marginTop: '1rem' }} fullWidth variant="contained">
            Comprar
          </Button>
        </div>
      </Card>
    </Grid>
  )
}
