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
                                    <h1>Bolsos</h1>
                                </Link>
                                    <p>Bolsos coloridos, de todos los tamaños</p>
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
                                    <h1>Sombreros</h1>
                                </Link>
                                <p>Sombreros elegantes y de alta calidad</p>
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
                                    <h1>Canastos</h1>
                                </Link>
                                <p>Canastos para cuaquier uso</p>
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
                                    <h1>Accesorios</h1>
                                </Link>
                                <p>Llaveros, collares, aretes, pulseras y más</p>
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
                                    <h1>Vasijas y Esculturas</h1>
                                </Link>
                                <p>Dale estilo a tu hogar</p>
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
                                    <h1>Otros</h1>
                                </Link>
                                <p>Si no lo encuentras, está acá</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Card