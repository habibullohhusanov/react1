import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { privateRoutes, publickRoutes } from '.'

function AppRoute() {
    const isAuth = false;
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route component={route.component} path={route.path} exact={route.exact} />
                )}
                <Redirect to="/posts" />
            </Switch>
            :
            <Switch>
                {publickRoutes.map(route =>
                    <Route component={route.component} path={route.path} exact={route.exact} />
                )}
                <Redirect to="/login" />
            </Switch>
    )
}

export default AppRoute