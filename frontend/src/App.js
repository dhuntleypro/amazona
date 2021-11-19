import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
//import TestScreen from "./screens/TestScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <main>
          <Switch>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
            {/* <Route path="/product/:id" element={<ProductScreen />}></Route> */}
            {/* <Route path="/" element={<HomeScreen />} exact></Route> */}
            {/* <Route path="/client/:id" exact> */}
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
