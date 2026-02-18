import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
    return (
        <div className="flex flex-col justify-between min-h-screen bg-slate-300">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;
