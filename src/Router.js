import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    console.log(cookies);
    return cookies["loggedIn"] ? true : false
}


// Write ProtectedRoute function here
const ProtectedRoute = () => {
    return (
        <Route 
        // {...rest}
        render={(props) => checkAuth()
        ? <Home {...props}/>
        : <Redirect to="/login" />}
        />
    )
}


const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} /> */}
            <ProtectedRoute path="/about" component={About} />
        </Switch>
    );
};

export default Router;