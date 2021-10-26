import "./Login.css"
import {login, Container, NavDropdown, Button, Offcanvas, Row, Col} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
export const Login=({}) => {
    return(
        <login>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="cuadrado">
                        <div className="Logo">
                        </div>
                        <div className="Titulo1">
                            <p className="Titulo1"><center>Bienvenidos</center></p>
                        </div>
                        <h3>Ingrese su usuario:</h3>
                        <div className="Usuario">
                            <input type="text" placeholder="Usuario"/>
                        </div>
                        <h3>Ingrese su contraseña:</h3>
                        <div className="Contraseña">
                            <input type="password" placeholder="Contraseña"/>
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
                                    <button className="BotonInicio">Iniciar Sesion</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        </login>)

}
export default Login;
