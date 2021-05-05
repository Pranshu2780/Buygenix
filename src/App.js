import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            {/* // ** Header Component */}
            <Header />
            <h1>Checkout Page</h1>
          </Route>

          <Route path="/">
            {/* // ** Header Component */}
            <Header />
            {/* //**  Body Component */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
