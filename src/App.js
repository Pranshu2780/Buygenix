import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login"

function App() {
  return (
    <Router>
      <div className="app">
        {/* // ** Header Component */}
        {/* <Header /> */}
        <Switch>
          <Route path="/login">
            <Login />
            {/* <h1>login</h1> */}
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            {/* //**  Body Component */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
