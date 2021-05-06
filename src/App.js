import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        {/* // ** Header Component */}
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            {/* //**  Body Component */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
