import React, {useContext, useEffect, useRef, useState} from "react";
import {NavBar} from "../../nav-bar/NavBar";
import {Button, Card, Col, Image, Row} from "react-bootstrap";
import ReactPlayer from "react-player";
import axios from "axios";
import {useParams} from "react-router-dom";
import {map} from "react-bootstrap/ElementChildren";
import {StoreContext} from "../../store/Store";

export const TotalProduct = (props) => {
    let [user, dispatch] = useContext(StoreContext);
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState({
        id: "1",
        name: "Sombrero Vueltiao de 19 vueltas",
        description: "El sombrero vueltiao es elaborado con productos totalmente naturales y de una manera artesanal" +
            "dicha materia prima es la caña flecha que se cultiva en el territorio del pueblo indígena Zenú en " +
            "Córdoba y Sucre, de esta planta se sacan unas fibras delgadas con las cuales se realiza el tejido con el" +
            "que se elabora el sombrero vueltiao",
        urlImage: "https://http2.mlstatic.com/D_NQ_NP_2X_621664-MCO46914479146_072021-F.webp",
        urlVideo: "https://www.youtube.com/watch?v=iiFF-LrqJBc&ab_channel=sombrerovueltiaoSombvueltiaoSombrerovueltiao"
    })

    const mountedRef = useRef(true)
    const params = useParams();
    const pid=params.id;
    let [quantity,setQuantity]= useState(product.quantity)
    const consult = ()=>{
        axios.get('https://merkart.herokuapp.com/product/'+pid
        ).then(response => {

            let res= response.data;
            console.log(response,typeof res)

            setProduct(res );
            console.log(res)
            setQuantity(res.quantity)
            console.log()
            //return response;
        }).catch(error => {
            console.log(error);
        })

    }
    useEffect(() => {
        consult()

        return mountedRef.current = false
    },[]);
    const getProduct = () => {

        //setArtisan((artisan)=>({...artisan,email:correo}))
        //console.log(artisan)


        /*axios.post('', {artisan})
            .then((response) => console.log(response,'respuestica'))
            .then()*/
    }
    const addToCart = ()=>{
        console.log(user,'user')
        if(user.cart){
            console.log('entra',user)
            const cart = user.cart;

            if(product.id in user.cart){
                console.log(user.cart[product.id])
                user.cart[product.id].quantityToBuy=count;
            }

            if(!(product.id in user.cart)){
                console.log('no existe')
                user.cart[product.id]={
                    product

            ,quantityToBuy:count}
            }

            console.log("sale")
            //setQuantity(product.quantity)
           /* console.log(cart,product,Array.prototype.push.apply(cart, [product]))
            console.log(cart)*/
            //Array.prototype.push.apply(cart, moreVegs);
            //dispatch({...user,cart:Array.prototype.push.apply(cart, [product])})
            return;
        }
        console.log('sale')
        dispatch({...user,cart:{
            [product.id]:{
                product
                ,quantityToBuy:1
            }

        }})


        console.log(user)
       // dispatch({...user,cart:cart.push()})
    }

    const checkQuantity = ( )=>{
       console.log(product,user)
        // console.log(user.cart[product.id].quantityToBuy)

    }
    const handleIncrement = () => {
        console.log(count)
        setCount(prevCount => prevCount + 1);
        console.log(count)
        const cant = product.quantity-count;
        console.log(cant)
        console.log(quantity)
            setQuantity(cant)
        console.log(quantity)

    };
    const handleDecrement = () => {

        setCount(prevCount => prevCount - 1);
        const cant = product.quantity-count;
            setQuantity(cant)

    };
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div className="content-app">
                <Row>
                    <Row>
                        <Col style={{maxWidth:"10px"}}></Col>
                        <Col className={"mt-0"}>
                            <div style={{}}>
                                <Row>
                                    <strong className="d-flex justify-content-center">{product.name}</strong>
                                </Row>
                                <Row>
                                    <Col style={{maxWidth:"70%"}}>
                                        <p className="m-3">{product.description}</p>
                                    </Col>
                                    <Col style={{maxWidth:"30%"}}>
                                        <Image className="m-3" src={product.urlImage} width="300" alt="image"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col></Col>

                                    <Col style={{maxWidth:"90%"}}  className={"d-flex justify-content-center"}>
                                        <ReactPlayer width="300%" url={product.urlVideo}/>
                                    </Col>

                                    <Col></Col>

                                </Row>
                                <Row>
                                    <Col>

                                        <div>
                                            <Row>
                                                <Col> <Button onClick={handleDecrement}>-</Button></Col>
                                                <Col> <h5>Añadir {count} Productos al carrito</h5></Col>
                                                <Col> <Button onClick={handleIncrement}>+</Button></Col>



                                            </Row>
                                            <button onClick={() => setCount(0)}>Reset</button>
                                            <Button className={"generic-button-1 m-3"} variant="primary"onClick={()=>{addToCart()}}>
                                                Agregar al carrito
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col></Col>
                                    <Col></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col style={{maxWidth:"90px"}}>

                            <Row>Costo del producto</Row>
                            <Row>{product.cost}</Row>
                            <Row>Productos disponibles</Row>
                            <Row>{quantity}</Row>
                        </Col>
                    </Row>
                </Row>
            </div>
        </div>
    )
}
