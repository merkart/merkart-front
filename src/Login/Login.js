import "./Login.scss"
import ciclesImg from '../Home/assets/img/circles.png'
import {login, Container, NavDropdown, Button, Offcanvas, Row, Col} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {useState} from "react";
import {Product} from "../product/Product";
export const Login=({}) => {

    const history = useHistory()
    const [Email, setEmail] = useState("");
    const [Contraseña, setPassword] = useState("");

    const handleClick = () => {
        let UserDto = {
            email: Email,
            password: Contraseña
        }

    };
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    const hanldeEmailChanhe = (e) => {
        const value = e.target.value;
        setEmail(value);
    }

    return(
        <login>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="cuadrado" style={{
                        backgroundImage:`url(${ciclesImg}), linear-gradient(to right, #EF962D, #9C5518)`
                        }}>
                        <div className="Logo">
                        </div>
                        <div className="Titulo1">
                            <p className="Titulo1"><center>Bienvenidos</center></p>
                        </div>
                        <h3>Ingrese su usuario:</h3>
                        <div className="Email" style={{color: "#5A3F11"}}>
                            <input type="text" onChange={hanldeEmailChanhe} placeholder="Email" />
                        </div>
                        <h3>Ingrese su contraseña:</h3>
                        <div className="Contraseña">
                            <input type="password" onChange={handlePasswordChange} placeholder="Contraseña"/>
                        </div>
                        <a  className="Olvido" href="">¿Olvido su contraseña?</a>
                        <Row>
                            <Col>
                                <div className="BotonRegistro">
                                    <button className="BotonRegistro">Registrarme</button>
                                </div>
                            </Col>
                            <Col>
                                <div className="BotonInicio">
                                    <button className="BotonInicio"onClick={"/productos"}>Iniciar Sesion</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        </login>)

}
export default Login;
