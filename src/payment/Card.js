import React, {useState} from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {Form} from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Card = () => {
    const [data, setData] = useState({
        cvc: "",
        expiry: "",
        name: "",
        number: ""
    });
    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="col-12 mt-4" id="PaymentForm">
            <Col ><Cards

                cvc={data.cvc}
                expiry={data.expiry}
                focus={data.focus}
                name={data.name}
                number={data.number}
            /></Col>

            <div className="col-12 mt-5">
                <Row>
                    <Col></Col>
                    <Col className="" xs={9}>
                        <form action="">
                            <Row>
                                <Col>
                                    <Form.Control

                                        type="number"
                                        name="cvc"
                                        placeholder="CVC"
                                        onChange={handleInputChange}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control type="date"
                                                  name="expiry"
                                                  placeholder="Expire Date"
                                                  onChange={handleInputChange}
                                    />
                                </Col>

                                <Col>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        onChange={handleInputChange}
                                    />
                                </Col>

                                <Col> <Form.Control
                                    type="number"
                                    name="number"
                                    placeholder="Card Number"
                                    onChange={handleInputChange}
                                /></Col>

                            </Row>
                        </form>
                    </Col>
                    <Col></Col>
                </Row>

            </div>

        </div>
    );
};

