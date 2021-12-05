import {Button, Navbar, Modal, Form,Card} from "react-bootstrap";
import {NavBar} from "../nav-bar/NavBar";
import "../global.scss"

import "./ProductSearch.scss"
import {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useHistory} from "react-router-dom";
import ciclesImg from "../Categories/assets/img/circles.png";


export const ProductSearch = ({productitem}) => {
    const [product,setProduct] = useState(productitem)
    const [artisan,setArtisan] = useState({
        name:"nicolas torres"
    })
    const history = useHistory();
    const goProduct = ()=>{
        history.push(
            {
                pathname:"/product/"+product.id
            }
            )

    }
    return (

        <div className={"d-flex justify-content-center "}>

                <Card className=" noHeigth mx-auto"
                      style={{
                          backgroundImage:`url(${ciclesImg}), linear-gradient(to right, #EF962D, #9C5518)`,
                          maxWidth :"800px",minWidth:'800px'
                      }} >
                    <Button onClick={()=>{goProduct()}} variant="light">
                    <Row>
                        <Col>
                            <Card.Img variant="top" className={"photo"} src={productitem.urlImage} />

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
                    </Button>
                </Card>




        </div>


    );
}