import { Card, Grid, Typography } from "@mui/material";

import { useFetchWines } from "../../services/queries";
import theme from "../../styles/theme";
import { ContentWrapper } from "../ContentWrapper";
import { WineItem } from "../WineItem";

export const WinesList = () => {
  const { data } = useFetchWines();

  return (
    <ContentWrapper>
      <Card sx={{ padding: '1rem 2rem', marginBottom: '2rem' }}>
        <Typography
          variant="h2"
        >
          Seja bem-vindo à
          <span style={{color: theme.palette.primary.main}}> Wine Store</span>
        </Typography>
        <Typography>Aqui você encontra os melhores vinhos à sua disposição.</Typography>
      </Card>

      <Grid container spacing={2}>
        {data?.map(wine => (
          <WineItem wine={wine} key={wine.id} />
        ))}
      </Grid>
    </ContentWrapper>
  )
}
