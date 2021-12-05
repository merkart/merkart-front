import "./Login.scss"
import ciclesImg from '../Home/assets/img/circles.png'
import {login, Container, NavDropdown, Button, Offcanvas, Row, Col, Toast} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {useContext, useState} from "react";
import {Product} from "../product/Product";
import {StoreContext} from "../store/Store";
export const Login=({}) => {
    let [user, dispatch] = useContext(StoreContext);
    const history = useHistory()
    const [Email, setEmail] = useState("");
    const [Contrasena, setPassword] = useState("");

    const handleClick = () => {
        let UserDto = {
            email: Email,
            password: Contrasena
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
    const redirectToRegister=()=>{
        history.push({
            pathname:"/Registry"
            }
        )
    }
    const [showA, setShowA] = useState(false);

    const toggleShowA = () => setShowA(!showA);
    const checkLogin = ()=>{
        history.push({
            pathname:"/Home"
        })
        console.log(Email,user)
       /* if(Email && Email in user.registered){
            if (Contrasena in user.registered.Email)
            dispatch({...user,currentSession:{
                    [Email]:Email

                }})
            history.push({
                    pathname:"/Home"
                }
            )
        }*/

        //si no no esta registrado
        setShowA(true)
    }
    return(
        <login>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <Col></Col>
                   <Col>
                       <Toast style={{maxHeight:"20px"}} show={showA} onClose={toggleShowA}>
                           <Toast.Header>
                               <img
                                   src="holder.js/20x20?text=%20"
                                   className="rounded me-2"
                                   alt=""
                               />
                               <strong className="me-auto">Bootstrap</strong>
                               <small>Hace unos segundos</small>
                           </Toast.Header>
                           <Toast.Body>Este Correo no está registrado!</Toast.Body>
                       </Toast>
                       <div className="cuadrado" style={{                       backgroundImage:`url(${ciclesImg}), linear-gradient(to right, #EF962D, #9C5518)`}}>
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
                                       <button onClick={()=>{redirectToRegister()}} className="BotonRegistro">Registrarme</button>
                                   </div>
                               </Col>
                               <Col>
                                   <div className="BotonInicio">
                                       <button className="BotonInicio"onClick={()=>{checkLogin()}}>Iniciar Sesion</button>
                                   </div>
                               </Col>
                           </Row>
                       </div>

                   </Col>
                    <Col></Col>
                   </div>
            </div>

        </login>)

}
export default Login;
