import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" render={() => <div>f</div>} />
            <Redirect to="/" />
        </Switch>
    )
}
