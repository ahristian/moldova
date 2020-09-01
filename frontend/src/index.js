import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import "./pages/style.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Traditions } from "./pages/Traditions";
import { FoodWine } from "./pages/FoodWine";
import { Destinations } from "./pages/Destinations";
import { FooterElement } from './shared/components/FooterElement'
import { NavigationBar } from './shared/components/NavigationBar'
import { Home } from "./pages/Home";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {Test} from './pages/Test'

import { library } from "@fortawesome/fontawesome-svg-core"
library.add(faGithub)
library.add(faLinkedin);

const Routing = () => (
  <>
    <NavigationBar/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/traditions" component={Traditions}/>
        <Route exact path="/foodWine" component={FoodWine}/>
        <Route exact path="/destinations" component={Destinations}/>
        <Route exact path="/test" component={Test}/>
        <Route component={Home}/>
      </Switch>
    </BrowserRouter>
    <FooterElement/>
  </>
);
ReactDOM.render(<Routing/>, document.querySelector('#root'));