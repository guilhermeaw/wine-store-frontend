import { Button } from "@mui/material"

import { ContentWrapper } from "../components/ContentWrapper"
import { Header } from "../components/Header"
import { RouterLink } from "../components/RouterLink"

export const DashboardPage = () => {
    return (
        <>
            <Header />
            <ContentWrapper>
                <RouterLink to="/new-product">
                    <Button variant="contained">Adicionar</Button>
                </RouterLink>
            </ContentWrapper>
        </>
    )
}