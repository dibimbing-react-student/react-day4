import React, { useState, useEffect, createContext } from "react";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import DashboardAdmin from "./pages/dashboard-admin";

export const ValueContext = createContext();

function App() {
    const [cart, setCart] = useState(0);
    // const cart = 0

    const fontColor = {
        color: "blue",
    };

    useEffect(() => {
        console.log("semua method");
    }, [cart]);

    return (
        <>
            <ValueContext.Provider value={{ fontColor, cart, setCart }}>
                <Header cart={cart} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard-admin" element={<DashboardAdmin />} />
                </Routes>
            </ValueContext.Provider>
        </>
    );
}

export default App;
