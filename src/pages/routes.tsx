import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './Login/index';

export const Routes:React.FC = () => (
    <BrowserRouter>
        <Route path="/">
            <Login />
        </Route>
    </BrowserRouter>
);