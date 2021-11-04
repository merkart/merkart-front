import './search.scss';
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {ProductSearch} from "./ProductSearch";


function SearchBar() {

  const [productos, setProductos]= useState([]);
  const [tablaProductos, setTablaProductos]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  //setTablaProductos(productos);

  const peticionGetAll=async()=>{
    await axios.get("https://merkart.herokuapp.com/product" )
        .then(response=>{
          console.log(response,"hol")
          setProductos(response.data);

          setTablaProductos(response.data);
        }).catch(error=>{
          console.log(error);
        })
  }
const peticionGet=async()=>{
    console.log(busqueda)
  return await axios.get("https://merkart.herokuapp.com/name/search/"+busqueda )
  .then(response=>{
    console.log(response,"hol")
    setProductos(response.data);

    setTablaProductos(response.data);
  }).catch(error=>{
    console.log(error);
  })
}
const handleChange=e=>{
e.persist()
  console.log(e)
  console.log(e.target.value)
  //console.log(e.target.value)
    //setBusqueda(e.target.value);
  console.log(e)
  console.log(busqueda)
  peticionGet()
    //filtrar(e.target.value);
  }
  
  const filtrar=(terminoBusqueda)=>{
    console.log(terminoBusqueda)
  console.log(productos);
  console.log(peticionGet())
    var resultadosBusqueda=  peticionGet().then(res=> {
      console.log("res",res)
      setProductos(res)
    });
    /*var resultadosBusqueda=tablaProductos.filter((elemento)=>{
      console.log(elemento)
      console.log(elemento.name)
      console.log(elemento.category)

      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      || elemento.category.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return elemento;
      }
    }
    );*/
    setProductos(resultadosBusqueda)
    return resultadosBusqueda;
    ;
  }

  
  useEffect(()=>{
    peticionGetAll();

  },[])
  
    return (
      <div className="App">
        <div className="containerInput">
          <input
            className="form-control inputBuscar"
            value={busqueda}
            placeholder="Búsqueda por Nombre o Empresa"
            onChange={(event)=>handleChange(event)}
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