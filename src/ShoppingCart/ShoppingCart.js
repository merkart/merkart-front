import {Button, Navbar, Modal, Form} from "react-bootstrap";
import {NavBar} from "../nav-bar/NavBar";
import "../global.scss"

import "./cart.scss"
import {useContext, useState} from "react";
import {Product} from "../product/Product";
import {useHistory} from "react-router-dom";
import {StoreContext} from "../store/Store";

export const ShoppingCart = () => {
    /*const [cart,setCart] = useState([{
        id:"1",
         name:"patata",
         artisanId:"2",
        description:"jaja xd",


        cost:"15000",
        placeOfCreation:"Bogotá",
         createdAt:"27-10-2021",
        isSelected:"true",
        img:"https://m.media-amazon.com/images/I/517AaC2FOoL._AC_UX385_.jpg",
         quantity:"2",
        Category:"Sombrerpos"
    },{
        id:"1",
        name:"otro items",
        artisanId:"2",
        description:"jaja xd",
        img:"https://m.media-amazon.com/images/I/517AaC2FOoL._AC_UX385_.jpg",

        cost:"15000",
        placeOfCreation:"Bogotá",
        createdAt:"27-10-2021",
        isSelected:"true",

        quantity:"2",
        Category:"otroitems2"
    }]);*/
    //const [cart,setCart] = useState([{}]);
    let [user, dispatch] = useContext(StoreContext);
    const [cart,setCart] = useState([user.cart]);
    const history = useHistory();
    const goPage = ()=>{
        history.push({
                pathname: "/payment"
            }
        )
    }
    return (

        <div>
            <NavBar/>
            <div className="content-app">
                <Button onClick={()=>{goPage()}}> CHECKOUT</Button>
                {console.log(user,cart)}

                {
                    cart.map((product,key)=>{
                        const keys = Object.keys(product);
                    //console.log("product",product,key,product[keys[key]].product,Object.keys(product),product["61a80b0b16433c41e3708d2f"].product)
                        console.log(product[keys[key]].product,'llave')
                    return( <Product productitem={product[keys[key]].product} />)

                })}


            </div>


        </div>


    );
}