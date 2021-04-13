import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacto from "./Contacto";
import Footer from "./Footer";
import Gestion from "./Gestion";
import Header from "./Header";
import Inicio from "./Inicio";

export default class Switcher extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/gestion">
            <Gestion />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
