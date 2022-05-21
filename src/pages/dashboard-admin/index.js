import React, { useEffect, useState } from "react";
import { Table, Form, Button, Container } from "react-bootstrap";
import axios from "axios";

const DashboardAdmin = () => {
    const [dataAllProducts, setDataAllProducts] = useState([]);
    const [addProductForm, setAddProductForm] = useState({
        name: "",
        price: "",
        quantity: "",
    });
    const [showForm, setShowForm] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const fetchGetAllProducts = async () => {
        await axios
            .get("http://localhost:8000/products")
            .then((response) => setDataAllProducts(response.data));
    };

    useEffect(() => {
        fetchGetAllProducts();
        setRefresh(false);
    }, [refresh]);

    const submitAddProduct = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/products", addProductForm, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        setShowForm(false);
        setRefresh(true);
    };

    const formAdd = () => {
        return (
            <Form className="mb-3" onSubmit={submitAddProduct}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter product name"
                        onChange={(e) =>
                            setAddProductForm({
                                ...addProductForm,
                                name: e.target.value,
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter product price"
                        onChange={(e) =>
                            setAddProductForm({
                                ...addProductForm,
                                price: e.target.value,
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter product quantity"
                        onChange={(e) =>
                            setAddProductForm({
                                ...addProductForm,
                                quantity: e.target.value,
                            })
                        }
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="button"
                    onClick={() => setShowForm(false)}
                >
                    Cancel
                </Button>
                <Button variant="primary" type="submit" className="mx-2">
                    Submit
                </Button>
            </Form>
        );
    };

    return (
        <Container className="my-5">
            {showForm ? (
                formAdd()
            ) : (
                <div className="text-end mb-3">
                    <Button
                        variant="primary"
                        type="button"
                        onClick={() => setShowForm(true)}
                    >
                        Add Product
                    </Button>
                </div>
            )}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dataAllProducts.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Button variant="warning" type="button">
                                    Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    type="button"
                                    className="mx-2"
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default DashboardAdmin;

// import React, { Component } from "react";
// import Contact from './contact'

// export default class Content extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0,
//         };
//     }

// componentWillMount() {
//     console.log("component will mount");
// }

// componentDidMount() {
//     console.log("component did mount");
// }

// componentDidUpdate() {
//     console.log("component did update");
// }

// componentWillUnmount() {
//     console.log("component Will Unmount");
// }

//     addCount = () => {
//         this.setState({ count: this.state.count + 1 });
//     }

//     render() {
//         return (
//             <div>
//                 FE Mini Project
//                 <button
//                     onClick={this.addCount}
//                 >
//                     Tambah count
//                 </button>
//                 <Contact />
//             </div>
//         );
//     }
// }
