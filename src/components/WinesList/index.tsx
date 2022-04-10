import { Card, Container, Grid, Typography } from "@mui/material";

import { useFetchWines } from "../../services/queries";
import theme from "../../styles/theme";
import { WineItem } from "../WineItem";

import * as S from './styles';

export const WinesList = () => {
  const { data } = useFetchWines();

  return (
    <S.ContentWrapper>
      <Container maxWidth="xl" sx={{ padding: '2rem 0' }}>
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
      </Container>
    </S.ContentWrapper>
  )
}
