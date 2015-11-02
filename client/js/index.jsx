import React from 'react';
import { render } from 'react-dom';

import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Home from './home';
import Login from './login';

render(
    <Router history={createBrowserHistory()}>
        <Route path="/" component={Login} />
        <Route path="/home" component={Home} />
    </Router>, document.getElementById('content')
);
