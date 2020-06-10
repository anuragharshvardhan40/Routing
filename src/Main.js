import React,{Component} from "react";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import Route from  "react-router-dom/Route";
export default class Main extends React.Component{
    render(){
        return(
        <Router>
          <div>
                <NavLink to = "/page_one"
                  activeStyle={{color:"red"}}
                  exact strict
                  style={{marginRight:100}}>Page_one</NavLink>
                <NavLink to = "/page_two"
                  activeStyle={{color:"green"}}
                  exact strict
                  style={{marginRight:100}}>Page_two</NavLink>
                <NavLink to = "/page_three"
                  activeStyle={{color:"orange"}}
                  exact strict>Page_three</NavLink>
                  <br></br><br></br>
                  <Route path = "/page_one" component= {Pageone} exact strict/>
                  <Route path = "/page_two" component= {Pagetwo} exact strict/>
                  <Route path = "/page_three" component= {Pagethree} exact strict/>
         </div>
        </Router>
        )
    }
}