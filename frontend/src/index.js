import React from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import "./pages/style.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Traditions } from "./pages/Traditions";
import { Profile } from "./ui/Profile";
import { Food } from "./pages/Food";
import { SinglePage } from './pages/SinglePage'
import { Home } from "./pages/Home";
import { FooterElement } from './shared/components/FooterElement'
import { NavigationBar } from './shared/components/NavigationBar'
import {configureStore} from '@reduxjs/toolkit'
import reducer from './store'
import {Provider} from 'react-redux'
import { AboutMoldova } from './pages/AboutMoldova'
import { faDove, faEnvelope, faKey, faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { ConfirmEmail } from './ui/ConfirmEmail'


library.add(faLinkedin, faEnvelope,faKey, faDove, faUser, faSignOutAlt, faSignInAlt);

const store = configureStore({ reducer})

const Routing = (store) => (
  <>
    <Provider store={store}>
    <NavigationBar/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/aboutMoldova" component={AboutMoldova}/>
        <Route exact path="/profile/:profileId" component={Profile} profileId=":profileId"/>
        <Route exact path="/traditions" component={Traditions}/>
        <Route exact path="/foods" component={Food}/>
        <Route exact path="/destinations/:destinationId" component={SinglePage} destinationId=":destinationId"/>
       {/* <Route exact path="/sign-up/activation/:profileActivationToken" component={ConfirmEmail} profileActivationToken=":profileActivationToken"/>
       */} <Route component={Home}/>
      </Switch>
    </BrowserRouter>
    <FooterElement/>
    </Provider>
  </>
);
ReactDOM.render(Routing(store), document.querySelector('#root'))