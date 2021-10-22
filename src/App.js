import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <Router>
          <div>
              <Switch>
                  <Route path="/createproduct">
                      <CreateProduct/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
