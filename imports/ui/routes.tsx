import { Meteor } from 'meteor/meteor';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
// import forceLogin from './utils';

// root container
import App from '../ui/containers/App';

// containers
import Home from '../ui/containers/Home';
import Login from '../ui/containers/Login';
import TaskBoard from '../ui/containers/TaskBoard';

const routes = (
  <Route component={App}>
    <Route path="/" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/tasks" component={TaskBoard}/>
    {/*<Route path="/admin" component={Admin} onEnter={forceLogin}>*/}
    {/*<Route path="tasks" component={TasksContainer} />*/}
    {/*</Route>*/}
  </Route>
);

Meteor.startup(() => {
  ReactRouterSSR.Run(
    routes,
  );
});
