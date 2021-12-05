
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

    const correo= user.payload.Correo;
    const password= user.payload.Contraseña;
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
        console.log(artisan)
        if(!user.registered){
            user["registered"]={}
        }
        if(user.registered){
            console.log('entra',user)
            const cart = user.registered;

            if(artisan.email in user.registered){
                console.log("ya existe no se vuelve a agregar")

            }

            if(!(artisan.email in user.registered)){
                console.log('no existe')
                dispatch({...user,[artisan.email]:{


                    idNumber:artisan.idNumber,
                        email:artisan.email,

                        name: artisan.name,

                        lastName:artisan.lastName,

                        password: artisan.password,

                        role:artisan.role,

                        typeOfId:artisan.typeOfId,

                        country:artisan.country,

                        phone:artisan.phone,

                        url:artisan.url,

                        productList:artisan.productList,

                        address:artisan.address,

                        description:artisan.description,


                }})
                //user.registered[artisan.email]=
            }

            console.log("sale")
            //setQuantity(product.quantity)
            /* console.log(cart,product,Array.prototype.push.apply(cart, [product]))
             console.log(cart)*/
            //Array.prototype.push.apply(cart, moreVegs);
            //dispatch({...user,cart:Array.prototype.push.apply(cart, [product])})

        }
        /*console.log('sale2')
        user["registered"]={}
        user.registered[artisan.email]={
            artisan

        }*/
        /*dispatch({...user,registered:{
                [artisan.email]:{
                    artisan
                }

            }})*/

        axios.post('https://merkart.herokuapp.com/artisan'
            ,artisan).then(response => {
                console.log(response)
                history.push({
                    pathname: "/"
                })
                //return response;
            }).catch(error => {
            console.log(error);
        })
        /*axios.post('', {artisan})
            .then((response) => console.log(response,'respuestica'))
            .then()*/
    }

    const setUserRegistry = ()=>{


    }
    const mountedRef = useRef(true)
    useEffect(() => {
        //peticion();
        setArtisan((artisan)=>({...artisan,email:correo}))
        setArtisan((artisan)=>({...artisan,password: password}))
        setArtisan((artisan)=>({...artisan,role: rol}))
        console.log(user.payload.Correo,'correin',user)

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