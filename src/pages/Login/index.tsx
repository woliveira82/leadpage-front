import React from 'react';
import { Wrapper, LoginBox, P, A } from './styles';
import { TopBar } from '../../components/TopBar';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export const Login:React.FC = () => (
    <Wrapper>
        <TopBar title="Login" noMenu={ true } />
        <LoginBox>
            <h1>Login</h1>
            <Input placeholder="e-mail"/>
            <Input type="password" placeholder="password"/>
            <Button text="LOGIN" />
            <P>Not registered? <A href="/campaign-list">Create an account</A></P>
        </LoginBox>
    </Wrapper>
);