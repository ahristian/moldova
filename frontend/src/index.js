import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import "./pages/style.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Traditions } from "./pages/Traditions";
import { Food } from "./pages/Food";
import { DestinationsPage } from "./pages/Destinations";
import { SinglePage } from './pages/singlePage'
import { Home } from "./pages/Home";
import { FooterElement } from './shared/components/FooterElement'
import { NavigationBar } from './shared/components/NavigationBar'


import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {configureStore} from '@reduxjs/toolkit'
import reducer from './store'
import {Provider} from 'react-redux'

const store = configureStore({ reducer})

const Routing = (store) => (
  <>
    <Provider store={store}>
    <NavigationBar/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/traditions" component={Traditions}/>
        <Route exact path="/foods" component={Food}/>
        <Route exact path="/destinations" component={DestinationsPage}/>
        <Route exact path="/destinations/:destinationId" component={SinglePage}/>
        <Route component={Home}/>
      </Switch>
    </BrowserRouter>
    <FooterElement/>
    </Provider>
  </>
);
ReactDOM.render(Routing(store), document.querySelector('#root'))