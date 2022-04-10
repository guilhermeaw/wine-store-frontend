import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Header } from "../components/Header";
import { WinesList } from "../components/WinesList";

export const StorePage = () => {
  const navigate = useNavigate();

  const handleCart = () => {
    navigate('/cart');
  }

  return (
    <>
      <Header />
      <WinesList />
      <Fab onClick={handleCart} color="primary" sx={{ position: "absolute", bottom: '2rem', right: '2rem' }}>
        Carrinho
      </Fab>
    </>
  )
}
