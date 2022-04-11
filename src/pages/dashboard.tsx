import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { ContentWrapper } from "../components/ContentWrapper"
import { Header } from "../components/Header"

export const DashboardPage = () => {
    return (
        <>
            <Header />
            <ContentWrapper>
                <Link to="/new-product">
                    <Button variant="contained">Adicionar</Button>
                </Link>
            </ContentWrapper>
        </>
    )
}