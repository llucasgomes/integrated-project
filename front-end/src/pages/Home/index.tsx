import { BrowserRouter } from "react-router-dom"
import { SideBar } from "../../shared/components/SideBar"
import { Body } from "../../shared/components/Body"
import { Container_Portifolio } from "./styled"

export const Portifolio = () => {
    return (
        <Container_Portifolio>
            <SideBar />
            <BrowserRouter>
                <Body />

            </BrowserRouter>
        </Container_Portifolio>
    )
}