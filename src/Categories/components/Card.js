import React from "react";
import ciclesImg from '../assets/img/circles.png'

import bolsos from '../assets/img/Bolsos.PNG'
import sombreros from '../assets/img/Sombreros.PNG'
import canastos from '../assets/img/Canastos.PNG'
import accesorios from '../assets/img/Accesorios.PNG'
import vasijas from '../assets/img/Vasijas.PNG'
import otros from '../assets/img/Otros.PNG'

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
                                <Link to="/bolsos">
                                    <img src={bolsos} className="img float-right"/>
                                </Link>
                            </div>
                                <div className="col-6 Market-Card-Info"  >
                                <Link to="/bolsos">
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
                                <Link to="/sombreros">
                                    <img src={sombreros} className="img float-right"/>
                                </Link>
                            </div>
                            <div className="col-6 Market-Card-Info"  >
                                <Link to="/sombreros">
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
                                <Link to="/canastos">
                                    <img src={canastos} className="img float-right"/>
                                </Link>
                            </div>
                            <div className="col-6 Market-Card-Info"  >
                                <Link to="/canastos">
                                    <h1>Canastos</h1>
                                </Link>
                                <p>Canastos hechos a mano para cuaquier uso</p>
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
                                <Link to="/accesorios">
                                    <img src={accesorios} className="img float-right"/>
                                </Link>
                            </div>
                            <div className="col-6 Market-Card-Info"  >
                                <Link to="/accesorios">
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
                                <Link to="/vasijasYEsculturas">
                                    <img src={vasijas} className="img float-right"/>
                                </Link>
                            </div>
                            <div className="col-6 Market-Card-Info"  >
                                <Link to="/vasijasYEsculturas">
                                    <h1>Vasijas y Esculturas</h1>
                                </Link>
                                <p>Dale estilo a tu hogar con las mejores obras</p>
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
                                <Link to="/otros">
                                    <img src={otros} className="img float-right"/>
                                </Link>
                            </div>
                            <div className="col-6 Market-Card-Info"  >
                                <Link to="/otros">
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