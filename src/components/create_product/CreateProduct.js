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
            name: 'Manilla de colores',
            description: 'Una manilla de colores',
            cost: 5000,
            quantity: 1,
            urlImage: '',
            urlVideo: '',
            artisanId: '614c209e2659a63de4955b98',
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
    const handlenumberchange = (event) => {
        const value = event.target.value;
        console.log(value)
        setProduct({
            ...product,
            [event.target.name]: parseInt(value)
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

       // console.log(productin,'productins',product)
        axios.post('https://merkart.herokuapp.com/artisan/product/insert/\'+product.artisanId'
            ,product)
         /*axios({ method: 'post',
            url: 'https://merkart.herokuapp.com/artisan/product/insert/'+product.artisanId,
            data: {
                product,

            },
             headers: {
                 'Content-Type': 'multipart/form-data',
             },
         })*/


            .then(response => {
                console.log(response)
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
                                <Form.Control type="text" name="name" id="productName"
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
                                <Form.Control type="number" name="cost" onChange={handlenumberchange}/>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="quantity">
                                <Form.Label>quantity</Form.Label>
                                <Form.Control type="number" name="quantity" onChange={handlenumberchange}/>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="urlImage">
                                <Form.Label>Url Imagen:</Form.Label>
                                <Form.Control type="file" name="urlImage" onChange={handleImageChange}/>
                                <img className="mt-3" src={product.urlImage} alt="urlImage" width="600"/>
                            </Form.Group>
                            <Form.Group className="m-3" controlId="urlVideo">
                                <Form.Label>Url Video:</Form.Label>
                                <Form.Control type="text" name="urlVideo" onChange={handleTextChange}/>
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