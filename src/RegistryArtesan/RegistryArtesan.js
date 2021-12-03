
import "./RegistryArtesan.scss"
import ciclesImg from '../Home/assets/img/circles.png'
import {registroA, Row, Col} from 'react-bootstrap';

import "./RegistryArtesan.scss"

import {Button, Card, Form} from 'react-bootstrap';
import {TypeOfId} from "../components/artisanProfile/TypeOfId";
import {CountryDropdown, RegionDropdown} from "react-country-region-selector";
import React, {useContext, useEffect, useRef, useState} from "react";
import axios from "axios";
import {StoreContext} from '../store/Store';
import {useHistory} from "react-router-dom";


export const RegistroArtesano = ({}) => {
    let [user, dispatch] = useContext(StoreContext);
    console.log("Payload: ",user.payload);
    const email= user.payload.email;
    const password= user.payload.password;
    const name = user.payload.name;
    const lastName = user.payload.lastname;
    const rol= user.payload.Rol;
    const [artisan, setArtisan] = useState({
        idNumber:"",
        email:"",
        name:"",
        lastName:"",
        password:"",
        role:"",
        typeOfId:"",
        country:"",
        phone:"",
        url:"",
        productList:[
        ]
    })
    const history = useHistory()


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

    const handleSubmit = (event) => {

    }

    let addNewArtisan = (event) => {
        event.preventDefault();
        //setArtisan((artisan)=>({...artisan,email:correo}))
        //url: "https://merkart.herokuapp.com/artisan" ,
        console.log("Artisan a back: ",artisan);
        axios.post(`http://localhost:8080/artisan`, artisan)
        .then(function (response) {
          console.log("Se envio la informacion del login al backend segundo form: ",response);
          document.location.href = "/login";
        }).catch(function (error) {
            console.log("error: ",error);
        });        
        /*axios.post('', {artisan})
            .then((response) => console.log(response,'respuestica'))
            .then()*/
    }
    const mountedRef = useRef(true)
    useEffect(() => {
        //peticion();
        setArtisan((artisan)=>({...artisan,email:email}))
        setArtisan((artisan)=>({...artisan,password: password}))
        setArtisan((artisan)=>({...artisan,role: rol}))
        setArtisan((artisan)=>({...artisan,name: name}))
        setArtisan((artisan)=>({...artisan,lastName: lastName}))
        console.log(user.payload.email,'correin',user)

        console.log(artisan)

        //return mountedRef.current = false

    }, [user])
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

                                <div className="selectCountry" >

                                    <CountryDropdown className="country-select-dropdown "
                                                     value={artisan.country}
                                                     name={"country"}
                                                     onChange={(val) => selectCountry(val)}/>
                                    <RegionDropdown className="country-select-dropdown"
                                                    country={artisan.country}
                                                    value={artisan.region}
                                                    name={"country"}
                                                    onChange={(val) => selectRegion(val)}/>
                                </div>
                                <Form.Group className="m-3" controlId="address">
                                    <Form.Control  placeholder="Direccion" type="text" name="address" id="address" onChange={handleTextChange}/>
                                </Form.Group>
                                <Form.Group className="m-3" controlId="description">
                                    <Form.Control placeholder="Descripcion" type="textarea" value={artisan.description} name="description" id="description" onChange={handleTextChange}/>
                                </Form.Group>
                                <div>
                                    <div className="BotonContinuar">

                                        <Button className={"generic-button-1 m-3 "} style={{background:`#5A3F11`}} variant="primary" type="submit" >

                                            Registrarse
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </Card>

                    </div>
                </div>
            </div>

        </registroA>)

}
export default RegistroArtesano;