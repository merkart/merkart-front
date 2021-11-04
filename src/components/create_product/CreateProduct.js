import React, {useRef, useState} from "react";
import axios from "axios";
import {CategorySelect} from "./CategorySelect";
import {Button, Col, Card, Form, Navbar} from "react-bootstrap";
import ReactPlayer from 'react-player'
import {NavBar} from "../../nav-bar/NavBar";
import Row from "react-bootstrap/Row";
import {useHistory} from "react-router-dom";

const CreateProduct = (props) => {
    const history = useHistory();
    const [product, setProduct] = useState(
        {
            productName: 'Manilla de colores',
            description: 'Una manilla de colores',
            cost: '5000',
            quantity: '1',
            urlImage: '',
            urlVideo: '',
            artisanId: '1',
            placeOfCreation: '',
            Category: '',
            isSelected: false,
            createdAt: ""

        }
    )

    const fileInputRef = useRef();

    const [url, setUrl] = useState(null)
    const [image, setImage] = useState(null)

    const handleTextChange = (event) => {
        const value = event.target.value;
        console.log(value)
        setProduct({
            ...product,
            [event.target.name]: value
        });
    }

    const handleImageChange = (event) => {
        setProduct({
            ...product,
            [event.target.name]: URL.createObjectURL(event.target.files[0])
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post({
                method: 'post',
                url: " https://merkart.herokuapp.com/product/insert/" + product.artisanId,
                headers: {},
                data: {
                    productDto: product, // This is the body part
                }
            }
        )
            .then(response => {
                history.push('/')

                return response;
            }).catch(error => {
            console.log(error);
        })
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
                    <Card className="mt-3" style={{width: '40rem'}}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="m-3" >
                                <Form.Label>¿Cómo se llama tu producto?</Form.Label>
                                <Form.Control type="text" name="productName2" id="productName1"
                                              onChange={handleTextChange}/>
                            </Form.Group>
                            <CategorySelect/>
                            <Form.Group className="m-3" controlId="description">
                                <Form.Label>Descripción del producto</Form.Label>
                                <Form.Control type="textarea" name="description"
                                              placeholder="Describe tu producto"
                                              onChange={handleTextChange}/>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="cost">
                                <Form.Label>Costo</Form.Label>
                                <Form.Control type="text" name="cost2" onChange={handleTextChange}/>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="quantity">
                                <Form.Label>Costo</Form.Label>
                                <Form.Control type="number" name="quantity2" onChange={handleTextChange}/>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="urlImage">
                                <Form.Label>Url Imagen:</Form.Label>
                                <Form.Control type="file" name="urlImage2" onChange={handleImageChange}/>
                                <img className="mt-3" src={product.urlImage} alt="urlImage" width="600"/>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="urlVideo">
                                <Form.Label>Url Video:</Form.Label>
                                <Form.Control type="text" name="urlVideo2" onChange={handleTextChange}/>
                            </Form.Group>
                            <ReactPlayer className="m-3" url={product.urlVideo} width="600"/>
                            <Button  className={"generic-button-1 m-3"} variant="primary"
                                    type="submit">
                                Crear
                            </Button>
                        </Form>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default CreateProduct;