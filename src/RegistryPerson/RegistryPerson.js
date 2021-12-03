import "./RegistryPerson.scss"
import ciclesImg from '../Home/assets/img/circles.png'
import {registroP, Row, Col, Form} from 'react-bootstrap';
import {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {StoreContext} from '../store/Store';
import {types} from "../Reducer/StoreReducer";
import axios from 'axios';
import { Link } from 'react-router-dom'

export const RegistryPerson = ({}) => {
    let [user, dispatch] = useContext(StoreContext);
    let history = useHistory();
    let [state,setState]= useState({

    });
    let handleChange = (event)=>{
        console.log(event,'evento')
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    let handleSubmit= (e)=>{
        e.preventDefault();
        console.log("Enviando a back: ",state);
        if(state.Rol === "ARTISAN"){
             dispatch({
                type:types.saveTask,
                payload:state,
            })
            //debugger
            console.log(user,'user')
            history.push({
                pathname: "/RegistryArtesan"
            })
        }
        if(state.Rol === "CLIENT"){
            axios.post(`http://localhost:8080/user`, state)
            .then(function (response) {
              console.log("Se envio la informacion del login al backend: ",response);
              document.location.href = "/login";
            }).catch(function (error) {
                console.log("error: ",error);
            });
            
            /*push axios */
            /*history.push({
                pathname: "/"
            })*/
        }

    }
   /* useEffect(() => {


        ()=>dispatch({
            type:types.saveTask,
            payload:state,
        })
    }, [])*/
    return (
        <registroP>
            <div  className="container">
                <Form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center h-100">
                        <div className="cuadradoRegPer" style={{
                            backgroundImage:`url(${ciclesImg}), linear-gradient(to right, #EF962D, #9C5518)`
                        }}>
                            <div className="LogoRegPer">
                            </div>
                            <div className="Titulo1">
                                <p className="Titulo1">
                                    <center>Registro</center>
                                </p>
                            </div>
                            <div className="Subtitulo">
                                <p className="Subtitulo">
                                    <center>Cuentanos más sobre ti</center>
                                </p>

                                <h3>Ingrese su correo Electronico:</h3>
                                <div className="Correo">
                                    <input name="email" onChange={(event)=>{handleChange(event)}} type="text" placeholder="Correo Electronico"/>
                                </div>
                                <h3>Ingrese el nombre:</h3>
                                <div className="Usuario">
                                    <input name="name" onChange={(event)=>{handleChange(event)}} type="text" placeholder="nombre"/>
                                </div>
                                <h3>Ingrese el apellido:</h3>
                                <div className="Usuario">
                                    <input name="lastName" onChange={(event)=>{handleChange(event)}} type="text" placeholder="apellido"/>
                                </div>
                                <h3>Ingrese su contraseña:</h3>
                                <div className="Contraseña">
                                    <input name="password" onChange={(event)=>{handleChange(event)}} type="password" placeholder="Contraseña"/>
                                </div>
                                <h3>Repita su contraseña :</h3>
                                <div className="Contraseña2">
                                    <input name="password2" onChange={(event)=>{handleChange(event)}} type="password" placeholder="Contraseña"/>
                                </div>
                                <h3>Escoja su Rol :</h3>
                                <div className="Rol">
                                    <select  onChange={(event)=>{handleChange(event)}} name="Rol">
                                        <option value="ARTISAN">Artesano</option>
                                        <option value="CLIENT">Comprador</option>
                                    </select>
                                </div>
                                <Row>
                                    <Col>
                                        <div className="BotonRe">
                                        <Link to="/login">
                                            <button className="BotonRe">Regresar</button>
                                        </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="BotonR">                                            
                                            <button type={"submit"} className="BotonR">Registrarme</button>                                                                                        
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Form>

            </div>

        </registroP>)

}
export default RegistryPerson;
