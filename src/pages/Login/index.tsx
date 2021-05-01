import React from 'react';
import { TopBar } from '../../components/TopBar';

export const Login:React.FC = () => (
    <>
        <TopBar title="Login" noMenu={ true } />
        <h1>Login</h1>
        <a href="/campaign-list">lista de campanha</a>
    </>
);