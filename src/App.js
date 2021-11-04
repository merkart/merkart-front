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


function App() {


  return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/Home">
                <Home/>
              </Route>
              <Route path="/Categories">
                <Categories/>
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
              <Route path="/searchpage">
                <SearchPage />
              </Route>
              <Route path="/Registry">
                <RegistryPerson/>
              </Route>
              <Route path="/RegistryArtesan">
                <RegistryArtesan />
              </Route>
              <Route path="/">
                <Login/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
  );
}
function Carrito() {
  return <h2>carrito</h2>;
}

function Historial() {
  return <h2>historial</h2>;
}

function Categorias() {
  return <h2>Categorias</h2>;
}
function Historias() {
  return <h2>Historias</h2>;
}
function Recomendaciones() {
  return <h2>Recomendaciones</h2>;
}


export default App;
