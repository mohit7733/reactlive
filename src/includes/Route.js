import React from 'react';
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Membership from '../pages/Membership'
import Terms from '../pages/Terms'
import Privacy from '../pages/Privacy'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


export default function Routing() {
    return (
        <Router>
            <div>
                <switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Blog" component={Blog} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/Membership" component={Membership} />
                    <Route exact path="/Privacy" component={Privacy} />
                    <Route exact path="/Terms" component={Terms} />
                </switch>
            </div>
        </Router>
    )
}