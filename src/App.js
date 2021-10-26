import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import {RegistroPersona} from "./RegistroPersona/RegistroPersona";

function App() {


  return (
     // <Store>
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/RegistroPersona">
                <RegistroPersona />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
     // </Store>
  );
}



export default App;
