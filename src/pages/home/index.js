import React, { useState, useContext, useEffect } from "react";
import { ValueContext } from "../../App";
const Home = () => {
    const cartContext = useContext(ValueContext);
    const { cart, setCart } = cartContext;
    const [resultData, setResultData] = useState([]);

    const fetchApi = async () => {
        let requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        await fetch("http://localhost:8000/products", requestOptions)
            .then((response) => response.json())
            .then((result) => setResultData(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div>
            <button onClick={() => setCart(cart + 1)}>Tambah keranjang</button>
            {resultData.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </div>
    );
};

export default Home;
