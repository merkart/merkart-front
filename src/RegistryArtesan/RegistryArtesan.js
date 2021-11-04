import "./RegistryArtesan.scss"
import ciclesImg from '../Home/assets/img/circles.png'
import {registroA, Row, Col} from 'react-bootstrap';
import {Button, Card, Form} from 'react-bootstrap';
import {TypeOfId} from "../components/artisanProfile/TypeOfId";
import {CountryDropdown, RegionDropdown} from "react-country-region-selector";
import React, {useState} from "react";
import axios from "axios";

export const RegistroArtesano = ({}) => {

    const [artisan, setArtisan] = useState({
        idNumber:"",
        email:"",
        username:"",
        password:"",
        rol:"",
        typeOfId:"",
        country:"",
        phone:""
    })

    const handleTextChange = (event) => {
        const value = event.target.value;
        console.log(value)
        setArtisan({
            ...artisan,
            [event.target.name]: value
        });
    }

    const selectCountry = (val) => {
        setArtisan({...artisan,country: val});
    }

    const selectRegion = (val) => {
        setArtisan({...artisan,region: val});
    }

    const addNewArtisan = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/product', {artisan})
            .then((response) => response)
            .then(window.location.reload)
    }



    return (
        <registroA>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="cuadradoRegArt" style={{
                        backgroundImage:`url(${ciclesImg}), linear-gradient(to right, #EF962D, #9C5518)`
                        }}>
                        <div className="Logo">
                        </div>
                        <div className="Titulo1">
                            <p className="Titulo1">
                                <center>Artesano</center>
                            </p>
                        </div>
                        <div className="Subtitulo">
                            <p className="Subtitulo">
                                <center>Cuentanos más sobre ti</center>
                            </p>
                        </div>



                        <Card className="cardReg" style={{
                            backgroundImage:`url(${ciclesImg}), linear-gradient(to right, #EF962D, #9C5518)`
                        }}>
                            <Form onSubmit={addNewArtisan}>
                                
                                <TypeOfId className="TipoID"/>
                                <Form.Group className="m-3" controlId="numberId">
                                    <Form.Control placeholder="Numero de Identificacion" type="text" name="idNumber" id="idNumber" onChange={handleTextChange}/>
                                </Form.Group>
                                <Form.Group className="m-3" controlId="phone">
                                    <Form.Control placeholder="Celular" type="text" name="phone" id="phone" onChange={handleTextChange}/>
                                </Form.Group>
                                <div className="selectCountry">
                                    <CountryDropdown className="country-select-dropdown "
                                                     value={artisan.country}
                                                     onChange={(val) => selectCountry(val)}/>
                                    <RegionDropdown className="country-select-dropdown"
                                                    country={artisan.country}
                                                    value={artisan.region}
                                                    onChange={(val) => selectRegion(val)}/>
                                </div>
                                <Form.Group className="m-3" controlId="address">
                                    <Form.Control placeholder="Direccion" type="text" name="address" id="address" onChange={handleTextChange}/>
                                </Form.Group>
                                <Form.Group className="m-3" controlId="description">
                                    <Form.Control placeholder="Descripcion" type="textarea" value={artisan.description} name="description" id="description" onChange={handleTextChange}/>
                                </Form.Group>
                            </Form>
                        </Card>
                        <div>
                            <div className="BotonContinuar">
                                <Button className={"generic-button-1 m-3 "} style={{background:`#5A3F11`}} variant="primary" type="submit" >
                                    Registrarse
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </registroA>)

}
export default RegistroArtesano;