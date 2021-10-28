import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
//import Store from "./store/Store";

import {NavBar} from "./nav-bar/NavBar";
import {Payment} from "./payment/Payment";
import {ShoppingCart} from "./ShoppingCart/ShoppingCart";
import {Home} from "./Home/pages/Home";

function App() {


  return (
     // <Store>
      <div>

        <Router>
          <div>


            <Switch>
              <Route path="/Home">
                <Home   />
              </Route>
              <Route path="/carrito/:id">
                <ShoppingCart   />
              </Route>
              <Route path="/historial/:id" >
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
              </Route>
              <Route path="/payment">
                <Payment />
              </Route>

            </Switch>
          </div>
        </Router>
      </div>
     // </Store>
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
