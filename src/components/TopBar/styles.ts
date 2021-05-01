import styled from 'styled-components';

export const Bar = styled.div`
    overflow: hidden;
    background-color: #333333;
    position: fixed;
    top: 0;
    width: 100%;
`;

export const Link = styled.a`
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 0.8rem 1.2rem;
    text-decoration: none;
    &:hover {
        background: #dddddd;
        color: #000000;
    }
`;

export const Path = styled.div`
    float: center;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 0.8rem 1.2rem;
    text-decoration: none;
`;
