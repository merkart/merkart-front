import './search.scss';
import {useEffect, useRef, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {ProductSearch} from "./ProductSearch";


function SearchBar() {

    const [productos, setProductos] = useState([]);
    const [tablaProductos, setTablaProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const mountedRef = useRef(true)
    const peticionGetAll = async () => {
        await axios.get("https://merkart.herokuapp.com/product")
            .then(response => {
                setProductos(response.data);
                setTablaProductos(response.data);
            }).catch(error => {
                console.log(error);
            })
    }
    const peticionGet = (terminoBusqueda) => {

        axios.get("https://merkart.herokuapp.com/product/name/search/" + busqueda)
            .then(response => {
                setProductos(response.data);
                setTablaProductos(response.data);

                return response;
            }).catch(error => {
            console.log(error);
        })
    }
    const handleChange = e => {
        e.persist()
        setBusqueda(e.target.value);
        return filtrar(e.target.value);


    }

    const filtrar = (terminoBusqueda) => {
        console.log(terminoBusqueda)
        console.log(productos);

        if (terminoBusqueda != "") {
            return peticionGet(terminoBusqueda)
        }
        return peticionGetAll()
    }


    useEffect(() => {
        peticionGetAll();

        return mountedRef.current = false

    }, [])

    return (
        <div className="">
            <div className="containerInput">
                <input
                    className="form-control inputBuscar"
                    value={busqueda}
                    placeholder="Búsqueda por Nombre o Empresa"
                    onChange={(event) => handleChange(event)}
                />

                <button className="btn btn-success">
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </div>



                {productos && productos.map((product) => {

                    return (<ProductSearch productitem={product}/>)

                })}


        </div>
    );
}

export default SearchBar;