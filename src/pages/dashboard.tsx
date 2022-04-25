import { Button, Card, Typography } from "@mui/material"

import { ContentWrapper } from "../components/ContentWrapper"
import { Header } from "../components/Header"
import { RouterLink } from "../components/RouterLink"

export const DashboardPage = () => {
    return (
        <>
            <Header />
            <ContentWrapper>
                <RouterLink to="/new-product">
                    <Card sx={{ padding: '1rem' }}>
                        <Typography variant="h2">Adicionar vinho</Typography>
                        <Typography variant="subtitle1">Clique no botão abaixo para acessar o formulário de adição de vinhos</Typography>
                        <Button variant="contained">Adicionar</Button>
                    </Card>
                </RouterLink>
            </ContentWrapper>
        </>
    )
}