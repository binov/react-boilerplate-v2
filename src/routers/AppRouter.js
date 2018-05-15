import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from './../components/DashboardPage';
import NotFoundPage from './../components/NotFoundPage';
import LoginPage from './../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


//React passes props to the components inside of Route
// - history object - used for redirection
// - match object - params ; pathparams - {props.match.params.id}
// - location - query params, sort, hash (for moving to the particular component in a SPA)
// - 

//Need for Redux
// - No common parent to store the state in case of complex apps which uses routes
// - Components are closely coupled wiith props, may not be able to reuse 
//   when using redux,no props are passed,Instead they interact wih global state container 
//   for get or set values
// Props are perfectly valid if the compnents are actually using it

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;



