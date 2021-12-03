import {Button, Navbar, Modal, Form,Card} from "react-bootstrap";
import {NavBar} from "../nav-bar/NavBar";
import "../global.scss"

import "./ProductSearch.scss"
import {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export const ProductSearch = ({productitem}) => {
    const [product,setProduct] = useState(productitem)
    const [artisan,setArtisan] = useState({
        name:"nicolas torres"
    })

    return (

        <div className={"d-flex justify-content-center mt-5"}>

            <Card style={{width: '60%', height:"25%" }}>
                <Row>
                    <Col>
                        <Card.Img variant="top" className={"photo"} src={productitem.img} />

                    </Col>
                    <Col>
                        <strong>{productitem.name}</strong>
                        <div>Descripcion: {product.description}</div>
                        <div className={"mt-5"}>Lugar de creación: {product.placeOfCreation}</div>
                        <div className={"mt-1"}>Fecha de creación: {product.createdAt}</div>
                        <div className={"mt-1"}>Artesano: {artisan.name}</div>
                    </Col>
                    <Col>
                        <div>unidad: ${product.cost}</div>

                    </Col>
                </Row>

            </Card>


        </div>


    );
}