import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, history } from 'react-router-dom';
import Home from './src/components/Home/Home.dom.js';

ReactDOM.render(
    <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
    </BrowserRouter>,
    document.getElementById("react-root")
);
