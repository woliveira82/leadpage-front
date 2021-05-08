import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Wrapper, LoginBox, P, A } from './styles';
import { TopBar } from '../../components/TopBar';
import { api } from '../../utils';
import '../../styles/form.css';

export const Login:React.FC = () => {
    
    const history = useHistory();

    let [email, setEmail] = useState<string>('');
    let [password, setPassword] = useState<string>('');

    
    const login = () => {
        api.post('/login/', {
            email: email,
            password: password
        })
        .then((response) => {
            const token = response.data.data.access_token;
            localStorage.setItem('keyItemName', token);
            history.push('/campaign-list')
        }).catch((error) => {
            /* console.error(error.data); */
        });
    }

    return (
        <Wrapper>
            <TopBar title='Login' noMenu={ true } />
            <LoginBox>
                <h1>Login</h1>
                <input placeholder='e-mail'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type='password' placeholder='password' 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={login}>LOGIN</button>
                <P>Not registered? <A href='/campaign-list'>Create an account</A></P>
            </LoginBox>
        </Wrapper>
    );
}
