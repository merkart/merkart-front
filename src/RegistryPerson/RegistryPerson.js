import "./RegistryPerson.scss"
import ciclesImg from '../Home/assets/img/circles.png'
import {registroP, Row, Col} from 'react-bootstrap';

export const RegistryPerson = ({}) => {
    return (
        <registroP>
            <div className="container">
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
                                <input type="text" placeholder="Correo Electronico"/>
                            </div>
                            <h3>Ingrese el usuario:</h3>
                            <div className="Usuario">
                                <input type="text" placeholder="Usuario"/>
                            </div>
                            <h3>Ingrese su contraseña:</h3>
                            <div className="Contraseña">
                                <input type="password" placeholder="Contraseña"/>
                            </div>
                            <h3>Repita su contraseña :</h3>
                            <div className="Contraseña2">
                                <input type="password" placeholder="Contraseña"/>
                            </div>
                            <h3>Escoja su Rol :</h3>
                            <div className="Rol">
                                <select name="Rol">
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
                                        <button className="BotonR">Registrarme</button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>

        </registroP>)

}
export default RegistryPerson;
