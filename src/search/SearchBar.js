import './search.scss';
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {ProductSearch} from "./ProductSearch";


function SearchBar() {

  const [productos, setProductos]= useState([{
      id:"1",
      name:"patata",
      artisanId:"2",
      description:"Sombrero hecho por... ",


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
      Category:"otroitems2"}
  ]);
  const [tablaProductos, setTablaProductos]= useState([{
    id:"1",
    name:"patata",
    artisanId:"2",
    description:"Sombrero hecho por...",


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
  }
  ]);
  const [busqueda, setBusqueda]= useState("");
  //setTablaProductos(productos);

const peticionGet=async()=>{
  await axios.get("https://merkart-dev.herokuapp.com/product")
  .then(response=>{
    setProductos(response.data);
    setTablaProductos(response.data);
  }).catch(error=>{
    console.log(error);
  })
}
const handleChange=e=>{
  console.log(e.target.value)
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  
  const filtrar=(terminoBusqueda)=>{
  console.log(productos)
    var resultadosBusqueda=tablaProductos.filter((elemento)=>{
      console.log(elemento)
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.Category.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    });
    setProductos(resultadosBusqueda);
  }
  
  useEffect(()=>{
  peticionGet();
  },[])
  
    return (
      <div className="App">
        <div className="containerInput">
          <input
            className="form-control inputBuscar"
            value={busqueda}
            placeholder="Búsqueda por Nombre o Empresa"
            onChange={handleChange}
          />

          <button className="btn btn-success">
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </div>
  
       <div className="table-responsive">
         shoppingcart
         {productos && productos.map((product)=>{
           console.log("product",product)
           return( <ProductSearch productitem={product} />)

         })}
        {/* <table className="table table-sm table-bordered">
           <thead>
             <tr>
               <th>ID</th>
               <th>Nombre</th>
               <th>Teléfono</th>
               <th>Nombre de Usuario</th>
               <th>Correo</th>
               <th>Sitio Web</th>
               <th>Ciudad</th>
               <th>Empresa</th>
             </tr>
           </thead>
  
           <tbody>
             {productos && 
             productos.map((usuario)=>(
               <tr key={usuario.id}>
                 <td>{usuario.id}</td>
                 <td>{usuario.name}</td>
                 <td>{usuario.phone}</td>
                 <td>{usuario.username}</td>
                 <td>{usuario.email}</td>
                 <td>{usuario.website}</td>
                 <td>{usuario.address.city}</td>
                 <td>{usuario.company.name}</td>
               </tr>
             ))}
           </tbody>
  
         </table>
  */}
       </div>
      </div>
    );
  }
  
  export default SearchBar;