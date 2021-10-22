import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
const CreateProduct = (props) => {

    const [product, setProduct] = useState({
        productName: '',
        description: '',
        cost: '',
        quantity: ''
    })

    const handleTextChange = (event) => {
        const value = event.target.value;
        setProduct({
            ...product,
            [event.target.name]: value
        });
    }

    const addNewProduct = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/product',{product})
            .then((response) => response)
            .then(window.location.reload)
    }


    return(
        <div>
            <form onSubmit={addNewProduct}>
                <label for="productName">¿Cómo se llama tu producto?</label>
                <input type="text" name="productName" id="productName" onChange={handleTextChange}/>
                //TODO: select de categorias
                <label for="description">Descripción del producto</label>
                <textarea name="description" rows="10" cols="10"/>
                <label for="cost">Precio</label>
                <input type="text" name="cost" id="cost" onChange={handleTextChange}/>
                <label for="quantity">Existencias del producto</label>
                <input type="number" name="quantity" id="quantity" onChange={handleTextChange}/>
                //TODO: mirar como cargar imagenes
                //TODO: mirar como cargar un video
                <button onClick={addNewProduct}>Crear</button>
            </form>
        </div>
    )
}

export default CreateProduct;