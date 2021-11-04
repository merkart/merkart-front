import "./RegistryArtesan.css"
import {registroA, Row, Col} from 'react-bootstrap';

export const RegistroArtesano = ({}) => {
    return (
        <registroA>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="cuadrado">
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
                        <h3>Tipo de identificación:</h3>
                        <div className="TipoDeId">
                            <select name="TipoDeId">
                                <option value="Cedula cuidadania">Cedula de cuidadania</option>
                                <option value="Cedula Extranjeria">Cedula Extranjeria</option>
                                <option value="Pasaporte">Pasaporte</option>
                            </select>
                        </div>

                        <h3>Número de identificación:</h3>
                        <div className="NumeroId">
                            <input type="text" placeholder="Numero de Identificación"/>
                        </div>
                        <h3>Número de telefono:</h3>
                        <div className="NumeroTel">
                            <input type="text" placeholder="Numero de telefono"/>
                        </div>
                        <h3>País:</h3>
                        <div className="Pais">
                            <input type="text" placeholder="País"/>
                        </div>
                        <h3>Cuidad:</h3>
                        <div className="Cuidad">
                            <input type="text" placeholder="Cuidad"/>
                        </div>
                        <h3>Dirección:</h3>
                        <div className="Dirección">
                            <input type="text" placeholder="Dirección"/>
                        </div>
                        <h3>Descripción:</h3>
                        <div>
                            <div className="Descripción">
                                <textarea cols="23" rows="6" type="text" placeholder="Deja un descripción sobre ti "/>
                            </div>
                        </div>
                        <div>
                            <div className="BotonContinuar">
                                <button className="BotonContinuar">Continuar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </registroA>)

}
export default RegistroArtesano;