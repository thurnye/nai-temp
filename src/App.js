import React, { Component } from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Branding from './container/Branding/branding'
import Contact from './container/Contact/contact'
import Durham from './container/Durham/durham'
import Home from './container/Home/home'
import LogoWork from './container/LogoWork/logoWork'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


export default class App extends Component {

  state = {
    homeSlide : [
      {
        id: 1,
        name: "Durham College",
        description: "this is the durham college work slide",
        link: "/durham-college"
      },
      {
        id: 2,
        name: "Branding",
        description: "This is my branding slide",
        link: "/branding"
      },
      {
        id: 3,
        name: "Logo Works",
        description: "This is the logo works slide",
        link: "/logo-works"
      },
      {
        id: 4,
        name: "Contact",
        description: "This is the contact slide",
        link: "/contact"
      },
      
    ]
  }





  render() {
  return (
    <React.Fragment>
      <Router>
      <Switch>
                <Route path="/"  exact>
                  <Home contents = {this.state.homeSlide}/>
                </Route>
                <Route path="/branding"  component={Branding} />
                <Route path="/contact"  component={Contact} />
                <Route path="/durham-college"  component={Durham} />
                <Route path="/logo-works"  component={LogoWork} />
                
                
            </Switch>
        </Router>
    </React.Fragment>
  )}
}


