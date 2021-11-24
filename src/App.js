import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
//import Store from "./store/Store";
import {Payment} from "./payment/Payment";

import CreateProduct from "./components/create_product/CreateProduct";
import {ShoppingCart} from "./ShoppingCart/ShoppingCart";
import {TotalProduct} from "./components/total_product/TotalProduct";

import {Home} from "./Home/pages/Home";

import {SearchPage} from "./search/SearchPage";
import Login from "./Login/Login";
import RegistryPerson from "./RegistryPerson/RegistryPerson";
import RegistryArtesan from "./RegistryArtesan/RegistryArtesan";

import { Categories } from "./Categories/pages/Categories";

import {EditArtisanProfile} from "./components/artisanProfile/EditArtisanProfile";
import Store from "./store/Store";



function App() {


  return (
      <div>
        <Store>
        <Router>

          <div>
            <Switch>
              <Route path="/Home">
                <Home/>
              </Route>
              <Route path="/Categories">
                <Categories/>
              </Route>

              <Route path="/Bolsos">
                <Bolsos/>
              </Route>
              <Route path="/Sombreros">
                <Sombreros/>
              </Route>
              <Route path="/Canastos">
                <Canastos/>
              </Route>
              <Route path="/Accesorios">
                <Accesorios/>
              </Route>
              <Route path="/VasijasYEsculturas">
                <VasijasYEsculturas/>
              </Route>
              <Route path="/Otros">
                <Otros/>
              </Route>

              <Route path="/carrito/:id">
                <ShoppingCart/>
              </Route>
              <Route path="/crearProducto">
                <CreateProduct/>
              </Route>
{/*              <Route path="/historial/:id" >
                <Historial />
              </Route>
              <Route path="/categorias" >
                <Categorias />
              </Route>
              <Route path="/historias">
                <Historias />
              </Route>
              <Route path="/recomendaciones">
                <Recomendaciones />
              </Route>*/}
              <Route path="/payment">
                <Payment />
              </Route>
              <Route path="/product/:id">
                <TotalProduct/>
              </Route>
              <Route path="/searchpage/:find?">
                <SearchPage />
              </Route>
              <Route path="/Registry">
                <RegistryPerson/>
              </Route>
              <Route path="/RegistryArtesan">
                <RegistryArtesan/>
              </Route>
              <Route path="/editArtisan">
                <EditArtisanProfile/>
              </Route>
              <Route path="/">
                <Login/>
              </Route>
            </Switch>
          </div>
        </Router>
        </Store>
      </div>
  );
}
function Bolsos() {
  return <h2>Bolsos: Bolsos coloridos, de todos los tamaños</h2>;
}
function Sombreros() {
  return <h2>Sombreros: Sombreros elegantes y de alta calidad</h2>;
}
function Canastos() {
  return <h2>Canastos: Canastos para cuaquier uso</h2>;
}
function Accesorios() {
  return <h2>Accesorios: Llaveros, collares, aretes, pulseras y más</h2>;
}
function VasijasYEsculturas() {
  return <h2>Vasijas Y Esculturas: Dale estilo a tu hogar con las mejores obras</h2>;
}
function Otros() {
  return <h2>Mas Categorias futuras</h2>;
}


export default App;
