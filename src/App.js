import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
//import Store from "./store/Store";

import {Login} from "./Login/Login";

function App() {


  return (
     // <Store>
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/Login">
                <Login  />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
     // </Store>
  );
}



export default App;
