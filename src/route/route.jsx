import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { privateRoutes, publickRoutes } from '.'
import { AuthContext } from '../context'
import Loading from '../components/UI/jsx/loading';

function AppRoute() {
    const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading) {
        return <Loading />
    }
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route component={route.component} path={route.path} exact={route.exact} key={route.path} />
                )}
                <Redirect to="/posts" />
            </Switch>
            :
            <Switch>
                {publickRoutes.map(route =>
                    <Route component={route.component} path={route.path} exact={route.exact} key={route.path} />
                )}
                <Redirect to="/login" />
            </Switch>
    )
}

export default AppRoute