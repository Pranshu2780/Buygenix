import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
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
