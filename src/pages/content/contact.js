import React, { useContext } from "react";
import { ValueContext } from "../../App";

const Contact = () => {
    const colorContext = useContext(ValueContext);
    const { fontColor } = colorContext;

    return (
        <div style={fontColor}>
            <h1>Contact Us</h1>
        </div>
    );
};

export default Contact;
