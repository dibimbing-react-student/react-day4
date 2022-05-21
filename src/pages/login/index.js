import React, { useRef, useState } from "react";
import style from "../../styles/Button.module.css";
import { Form } from "react-bootstrap";

const Login = () => {
    const nameInput = useRef(null);
    const [formInputLogin, setFormInputLogin] = useState({
        name: "",
        password: "",
    });
    const submitName = () => {
        // console.log(nameInput.current.value);
        console.log(formInputLogin, "submit");
    };

    const onChangeName = (event) => {
        // console.log(event.target.value)
        setFormInputLogin({ ...formInputLogin, name: event.target.value });
        console.log(formInputLogin.name);
    };

    const onChangePassword = (event) => {
        // console.log(event.target.value)
        setFormInputLogin({ ...formInputLogin, password: event.target.value });
        console.log(formInputLogin.password);
    };

    // const styleHeader = { color: "blue", fontSize: "40px" };

    return (
        <div>
            {/* <h2>Uncontrolled component</h2>
            <label>
                Name:
                <input type="text" ref={nameInput} />
            </label>
            <br />
            <button onClick={submitName}>Submit</button> */}

            {/* <h2>Controlled component</h2> */}
            <div className="card-login">
                <div className="card-content">
                    <h1 className="styleHeader">Login</h1>
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="name"
                        value={formInputLogin.name}
                        onChange={(event) => onChangeName(event)}
                        style={{ width: "80%" }}
                    />
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        value={formInputLogin.password}
                        onChange={(event) => onChangePassword(event)}
                        style={{ width: "80%" }}
                    />
                    <br />
                    <button className={style.btn} onClick={submitName}>
                        Submit
                    </button>
                </div>
            </div>
            <div className="card-register">
                <div className="card-content">
                    <h1 className="styleHeader">Register</h1>
                    <label>
                        Name:
                        <br />
                        <input
                            type="text"
                            value={formInputLogin.name}
                            onChange={(event) => onChangeName(event)}
                        />
                    </label>
                    <label>
                        Password:
                        <br />
                        <input
                            type="password"
                            value={formInputLogin.password}
                            onChange={(event) => onChangePassword(event)}
                        />
                    </label>
                    <label>
                        Address:
                        <br />
                        <input
                            type="text"
                            value={formInputLogin.password}
                            onChange={(event) => onChangePassword(event)}
                        />
                    </label>
                    <label>
                        Phone Number:
                        <br />
                        <input
                            type="text"
                            value={formInputLogin.password}
                            onChange={(event) => onChangePassword(event)}
                        />
                    </label>
                    <br />
                    <button className={style.btn} onClick={submitName}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
