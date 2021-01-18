import React, {Component} from 'react'
import LayoutTemplateHeader from './components/LayoutTemplateHeader.jsx'
import Main from './Main.jsx'
import GetAppointment from './components/Appointment/LayoutTemplateAppointment.jsx'
import LayoutTemplateFooter from './components/LayoutTemplateFooter.jsx'
import './App.css';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';

function RouteWithSubRoutes(route) {
    console.log("route: ", route)
    console.log("route: ", route.location.pathname)
    return (
        <Route path={route.path} render={props => (<route.component {...props} />)}/>
    )
}

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            routes: [
                {
                    path: "/getAppointment",
                    component: GetAppointment
                },
                {
                    path: "/",
                    component: Main
                },
            ]
        };
    }


    render() {
        const routesItems = this.state.routes.map((item, i) => {
            return (<RouteWithSubRoutes key={i} {...item} />)
        });
        return (
            <Router>
                <div id="wrapper">
                    <header id="idHasLayout" className="haslayout">
                        <LayoutTemplateHeader/>
                        <nav id="nav" className="haslayout navbar">
                            <div className="container">
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul id="menu-main-menu" className="">
                                        <li id="menu-item-23">
                                            <NavLink exact className="nav-link"
                                                     activeClassName="nav-link nav-link-active" to="/">Home</NavLink>
                                        </li>
                                        <li id="menu-item-22">
                                            <NavLink exact className="nav-link"
                                                     activeClassName="nav-link nav-link-active" to="/getAppointment">Book
                                                Appointment</NavLink>
                                        </li>
                                        <li id="menu-item-22">
                                            <NavLink exact className="nav-link"
                                                     activeClassName="nav-link nav-link-active" to="/">About</NavLink>
                                        </li>
                                        <li id="menu-item-18">
                                            <NavLink exact className="nav-link"
                                                     activeClassName="nav-link nav-link-active" to="/">Contact
                                                Us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
                <Switch>
                    {routesItems}
                </Switch>
                <LayoutTemplateFooter/>

            </Router>
        );
    }
}