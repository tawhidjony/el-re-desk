import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DashboardScreen from '../Pages/Dashboard/DashboardScreen'
const AllRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={DashboardScreen} />
        </Switch>
    )
}

export default AllRoute
