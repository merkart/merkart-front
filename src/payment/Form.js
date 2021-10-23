import {NavBar} from "../nav-bar/NavBar";
import {Card} from "./Card";

export const Form = () => {

    return(

        <div>
            <NavBar/>
            <div className="content-app"></div>
            pago

            <p>Resumen de compra</p>
            Nombre del producto
            Cantidad
            Producto
            envio
            <p><strong>Detalles de pago</strong></p>

            <img src="https://img.icons8.com/ios/50/000000/bank-card-back-side.png"/>Numero de tarjeta
            Fecha de expiracion
            CVV
            <p><strong> Detalles de entrega</strong></p>
            Direccion
            Tiempo de llegada
            <Card/>
        </div>


    );
}