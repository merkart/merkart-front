import "./RegistryPerson.scss"
import ciclesImg from '../Home/assets/img/circles.png'
import {registroP, Row, Col, Form} from 'react-bootstrap';
import {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {StoreContext} from '../store/Store';
import {types} from "../Reducer/StoreReducer";
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
        console.log("asd",state)
        if(state.Rol === "Artesano"){
             dispatch({
                type:types.saveTask,
                payload:state,
            })
            debugger
            console.log(user,'user')
            history.push({
                pathname: "/RegistryArtesan"
            })
        }
        if(state.Rol === "Comprador"){
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
                                    <input name="Correo" onChange={(event)=>{handleChange(event)}} type="text" placeholder="Correo Electronico"/>
                                </div>
                                <h3>Ingrese el usuario:</h3>
                                <div className="Usuario">
                                    <input name="name" onChange={(event)=>{handleChange(event)}} type="text" placeholder="Usuario"/>
                                </div>
                                <h3>Ingrese su contraseña:</h3>
                                <div className="Contraseña">
                                    <input name="Contraseña" onChange={(event)=>{handleChange(event)}} type="password" placeholder="Contraseña"/>
                                </div>
                                <h3>Repita su contraseña :</h3>
                                <div className="Contraseña2">
                                    <input name="Contraseña2" onChange={(event)=>{handleChange(event)}} type="password" placeholder="Contraseña"/>
                                </div>
                                <h3>Escoja su Rol :</h3>
                                <div className="Rol">
                                    <select  onChange={(event)=>{handleChange(event)}} name="Rol">
                                        <option value="Artesano">Artesano</option>
                                        <option value="Comprador">Comprador</option>
                                    </select>
                                </div>
                                <Row>
                                    <Col>
                                        <div className="BotonRe">
                                            <button className="BotonRe">Regresar</button>
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
