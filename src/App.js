import './App.css';
import Login from './Screen/Login/index'
import SignUp from './Screen/Registration/index'
import Home from './Screen/Home/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './Constant/history'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react' 
import { store, persistore } from './Redux/index'
import ForgotPassword from './Screen/ForgotPassword/index';
import ChangePassword from './Screen/ChangePassword/index'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>
          <Router history={history}>
              <Switch>
                  <Route exact render={(props) =>   <Home {...props} />} path="/" />
                  <Route exact render={(props) =>   <Login {...props} />} path="/login" />
                  <Route exact render={(props) =>   <SignUp {...props} />}  path='/signup'/>
                  <Route exact render={(props) =>   <ForgotPassword {...props} />} path='/forgotPassword'  />
                  <Route exact render={(props) =>   <ChangePassword {...props} />} path='/api/:userId/:token'  />
              </Switch>
            </Router>
          </PersistGate>
        </Provider>    
    </div>
  );
}

export default App;
