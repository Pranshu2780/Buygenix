import React, { useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Components/StateProvider";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Iw7cqSD5m7leAZw1py9uhTrF25tbW6JP4GRsYg7Mzd2QK1Og4eT4WuCGbrsyY6geU7M2Ry5qKySZjdbKVwae9Nh00nsGRMAIo"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>

            {/* <h1>I am the payment</h1> */}
            {/* <Checkout /> */}
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
