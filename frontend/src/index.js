import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import "./pages/style.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Traditions } from "./pages/Traditions";
import { Profile } from "./pages/Profile";
import { Food } from "./pages/Food";
import { SinglePage } from './pages/SinglePage'
import { Home } from "./pages/Home";
import { FooterElement } from './shared/components/FooterElement'
import { NavigationBar } from './shared/components/NavigationBar'
import {configureStore} from '@reduxjs/toolkit'
import reducer from './store'
import {Provider} from 'react-redux'
import { AboutMoldova } from './pages/AboutMoldova'

const store = configureStore({ reducer})

const Routing = (store) => (
  <>
    <Provider store={store}>
    <NavigationBar/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/aboutMoldova" component={AboutMoldova}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/traditions" component={Traditions}/>
        <Route exact path="/foods" component={Food}/>
        <Route exact path="/destinations/:destinationId" component={SinglePage}  destinationId=":destinationId"/>
        <Route component={Home}/>
      </Switch>
    </BrowserRouter>
    <FooterElement/>
    </Provider>
  </>
);
ReactDOM.render(Routing(store), document.querySelector('#root'))