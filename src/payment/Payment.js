import {Button, Navbar,Modal,Form} from "react-bootstrap";
import {NavBar} from "../nav-bar/NavBar";
import "../global.scss"
import {useLocation, useParams} from "react-router-dom";
import {Card} from "./Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoogleApiWrapper from "../maps/googleApiWrapper";
import "./payment.scss"
import {useState} from "react";

export const Payment = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div>
            <NavBar/>
            <div className="content-app">


                pago

                <p>Resumen de compra</p>
                Nombre del producto
                Cantidad
                Producto
                envio
                <div className={"justify-content-center mx-1"}>



                            <p className={"text-center"}><strong>Detalles de pago</strong></p>



                </div>

                <Card/>
                <div className={"justify-content-center text-center mt-4 mx-1"}>
                    <p><strong> Detalles de entrega</strong></p>

                    <p>Tiempo de llegada</p>

                    <div className="d-grid gap-2 mx-5">

                        <Button size={"lg"} variant="outline-info" onClick={handleShow}>
                            Dirección
                        </Button>
                    </div>

                    <Modal size="lg"  centered show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Selecciona tu dirección</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className={"modals"}><div>
                            <GoogleApiWrapper/>


                        </div></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                cerrar
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Confirmar dirección
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <div className={"d-flex justify-content-center text-center mt-4"}>

                        <div className={"col-5"}>
                            <p><strong> Tiempo Estimado de llegada</strong></p>

                            <Form.Control className={ "mt-4  justify-content-center text-center"} type="text" placeholder="Tiempo estimado de llegada" readOnly />

                        </div>


                    </div>

                </div>

                 <div className="col-md-12 text-end ">
                    <Button className={"generic-button-1"} size="lg">Comprar</Button>

                </div>
            </div>



        </div>


    );
}