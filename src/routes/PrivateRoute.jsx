import React from "react"
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({...props}) => {
    const isAuth = useSelector(state => state.auth);

    return isAuth ? <Route {...props}/> : <Redirect to="/"/>
}

export default PrivateRoute;