import {Navbar} from "react-bootstrap";
import {NavBar} from "../nav-bar/NavBar";
import "../global.scss"
import {useLocation, useParams} from "react-router-dom";
import {Card} from "./Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const Payment = () => {

    return(

        <div>
            <NavBar/>
            <div className="content-app"></div>
                        pago

            <p>Resumen de compra</p>
            Nombre del producto
            Cantidad
            Producto
            envio
                <Row>
                    <Col>

                    </Col>
                    <Col>
                        <p ><strong>Detaslles de pago</strong></p>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            <Card/>

                <p><strong> Detalles de entrega</strong></p>
            Direccion
            Tiempo de llegada

            </div>


    );
}