import React, {useState} from "react";
import axios from "axios";
import {CategorySelect} from "./CategorySelect";
import {Button, Col, Container, Form, Navbar} from "react-bootstrap";
import {NavBar} from "../nav-bar/NavBar";
import Row from "react-bootstrap/Row";

const CreateProduct = (props) => {

    const [product, setProduct] = useState(
        {
            productName: 'Manilla de colores',
            description: 'Una manilla de colores',
            cost: '5000',
            quantity: '4',
            urlImage: '',
            urlVideo: ''
        }
    )

    const [url, setUrl] = useState(null)

    const handleTextChange = (event) => {
        const value = event.target.value;
        setProduct({
            ...product,
            [event.target.name]: value
        });
    }

    const addNewProduct = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/product', {product})
            .then((response) => response)
            .then(window.location.reload)
    }


    return (
        <div>
            <NavBar/>
            <Row className="content-app">
                <Col></Col>
                <Col className="mt-0">
                    <div className="container">
                        <Form onSubmit={addNewProduct}>
                            <Form.Group className="mb-3" controlId="productName">
                                <Form.Label>¿Cómo se llama tu producto?</Form.Label>
                                <Form.Control type="text" name="productName" id="productName" onChange={handleTextChange}/>
                            </Form.Group>
                            <CategorySelect/>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Descripción del producto</Form.Label>
                                <Form.Control type="textarea" id="description" name="description"
                                              placeholder="Describe tu producto"
                                                onChange={handleTextChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="cost">
                                <Form.Label>Costo</Form.Label>
                                <Form.Control type="text" name="cost" id="cost" onChange={handleTextChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="quantity">
                                <Form.Label>Costo</Form.Label>
                                <Form.Control type="number" name="quantity" id="quantity" onChange={handleTextChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="urlImage">
                                <Form.Label>Url Imagen:</Form.Label>
                                <Form.Control type="text" name="urlImage" id="urlImage" onChange={handleTextChange}/>
                                <img className="mt-3" src={product.urlImage} alt="urlImage" width="300"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="urlImage">
                                <Form.Label>Url Video:</Form.Label>
                                <Form.Control type="text" name="urlVideo" id="urlVideo" onChange={handleTextChange}/>
                                <iframe className="mt-3" width="300" src={product.urlVideo}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </Form.Group>
                            <Button className={"generic-button-1"} variant="primary" type="submit">
                                Crear
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default CreateProduct;