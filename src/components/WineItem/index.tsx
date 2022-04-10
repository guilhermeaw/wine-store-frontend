import { Button, Card, Divider, Grid, Typography } from "@mui/material";

import { Wine } from "../../models/Wine";

type WineItemProps = {
  wine: Wine
}

export const WineItem = ({ wine: { title, description, imageUrl } }: WineItemProps) => {
  return (
    <Grid item xs={4}>
      <Card sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
        <img src={imageUrl} alt="Imagem de um vinho" height="120px" width="120px" style={{ alignSelf: 'center' }} />
        <Divider sx={{ margin: '1.5rem 0' }} />
        <div>
          <Typography variant="h2">{title}</Typography>
          <Typography>{description}</Typography>
          <Button sx={{ marginTop: '1rem' }} fullWidth variant="contained">
            Comprar
          </Button>
        </div>
      </Card>
    </Grid>
  )
}
