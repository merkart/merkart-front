import React from "react";
import ciclesImg from '../assets/img/circles.png'
import category from '../assets/img/categorias.png'
import history from '../assets/img/historias.png'
import recomen from '../assets/img/recomendaciones.png'
import { Link } from 'react-router-dom'
import tarea from '../assets/img/Tarea.png'

import './styles/Card.css'


class Card extends React.Component{
render(){
        return(
            <div>
                <div className="card mx-auto Market-Card-Top"
                    style={{
                        backgroundImage:`url(${ciclesImg}), linear-gradient(to right, #EF962D, #9C5518)`
                }}>
                    <div className="card.body">
                        <div className="row center">
                            <div className="col-6">
                                <Link to="/categorias">
                                    <img src={category} className="img float-right"/>
                                </Link>
                            </div>
                                <div className="col-6 Market-Card-Info"  >
                                <Link to="/categorias">
                                    <h1>Categorias</h1>
                                </Link>
                                    <p>Aquí encontraras todos los productos ordenados por categoría</p>
                                </div>
                            </div>
                        </div>
                    </div>



                <div className="card mx-auto Market-Card"
                    style={{
                        backgroundImage:`url(${ciclesImg}), linear-gradient(to right, #EF962D, #9C5518)`
                }}>
                    <div className="card.body">
                        <div className="row center">
                            <div className="col-6">
                                <Link to="/historias">
                                    <img src={history} className="img float-right"/>
                                </Link>
                            </div>
                            <div className="col-6 Market-Card-Info"  >
                                <Link to="/historias">
                                    <h1>Historias</h1>
                                </Link>
                                <p>Conoce la historia de nuestros artesanos, su cultura  y  el esfuerzo detras de su arte</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="card mx-auto Market-Card-Bottom"
                    style={{
                        backgroundImage:`url(${ciclesImg}), linear-gradient(to right,#EF962D, #9C5518)`
                }}>
                    <div className="card.body">
                        <div className="row center">
                            <div className="col-6">
                                <Link to="/recomendaciones">
                                    <img src={recomen} className="img float-right"/>
                                </Link>
                            </div>
                            <div className="col-6 Market-Card-Info"  >
                                <Link to="/recomendaciones">
                                    <h1>Recomendaciones</h1>
                                </Link>
                                <p>Encuentra los mejores productos en base a tus ultimas visitas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card