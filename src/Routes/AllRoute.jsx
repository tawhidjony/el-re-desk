import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginScreen from '../Pages/Auth/Login/LoginScreen'
import DashboardScreen from '../Pages/Dashboard/DashboardScreen'
const AllRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route exact path="/dashboard" component={DashboardScreen} />
        </Switch>
    )
}

export default AllRoute
