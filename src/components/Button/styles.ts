import styled from 'styled-components';

export const BasicButton = styled.button`
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #689EAD;
    width: 100%;
    height: 3rem;
    border: 0;
    padding: 1rem;
    border-radius: 0.2rem;
    color: #FFFFFF;
    font-size: bold;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
    &:hover {
        background: #7DB3C2;
    }
`;