import React, {useEffect, useRef, useState} from "react";
import {NavBar} from "../../nav-bar/NavBar";
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import ReactPlayer from "react-player";
import axios from "axios";
import {useParams} from "react-router-dom";
import {map} from "react-bootstrap/ElementChildren";

export const TotalProduct = (props) => {

    const [product, setProduct] = useState({
        id: "1",
        name: "Sombrero Vueltiao de 19 vueltas",
        description: "El sombrero vueltiao es elaborado con productos totalmente naturales y de una manera artesanal" +
            "dicha materia prima es la caña flecha que se cultiva en el territorio del pueblo indígena Zenú en " +
            "Córdoba y Sucre, de esta planta se sacan unas fibras delgadas con las cuales se realiza el tejido con el" +
            "que se elabora el sombrero vueltiao",
        urlImage: "https://http2.mlstatic.com/D_NQ_NP_2X_621664-MCO46914479146_072021-F.webp",
        urlVideo: "https://www.youtube.com/watch?v=iiFF-LrqJBc&ab_channel=sombrerovueltiaoSombvueltiaoSombrerovueltiao"
    })
    const mountedRef = useRef(true)
    const params = useParams();
    const pid=params.id;
    const consult = ()=>{
        axios.get('https://merkart.herokuapp.com/product/'+pid
        ).then(response => {

            let res= response.data;
            console.log(response,typeof res)

            setProduct(res );

            console.log()
            //return response;
        }).catch(error => {
            console.log(error);
        })

    }
    useEffect(() => {
        consult()

        return mountedRef.current = false
    },[]);
    const getProduct = () => {

        //setArtisan((artisan)=>({...artisan,email:correo}))
        //console.log(artisan)


        /*axios.post('', {artisan})
            .then((response) => console.log(response,'respuestica'))
            .then()*/
    }

    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div className="content-app">
                <Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Card style={{width:"1000"}}>
                                <Row>
                                    <strong className="m-3">{product.name}</strong>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="m-3">{product.description}</p>
                                    </Col>
                                    <Col>
                                        <Image className="m-3" src={product.urlImage} width="300" alt="image"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col></Col>
                                    <Col>
                                        <ReactPlayer width="350%" url={product.urlVideo}/>
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className={"generic-button-1 m-3"} variant="primary" type="submit">
                                            Comprar
                                        </Button>
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </Row>
            </div>
        </div>
    )
}
