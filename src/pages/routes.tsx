import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from './Login/index';
import { CampaignList } from './CampaignList/index';

export const Routes:React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/campaign-list">
                <CampaignList />
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    </BrowserRouter>
);