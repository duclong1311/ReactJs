import { Outlet } from "react-router-dom";
import { Footer } from "../partial/Footer";
import { Header } from "../partial/Header";

export function Home() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}