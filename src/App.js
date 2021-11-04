import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import {RegistroArtesano} from "./RegistroArtesano/RegistroArtesano";

function App() {


  return (
     // <Store>
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/RegistroArtesano">
                <RegistroArtesano />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
     // </Store>
  );
}



export default App;
