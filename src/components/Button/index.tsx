import React from 'react';
import { BasicButton } from './styles';

type Props = {
    text: string
}

export const Button:React.FC<Props> = ({ text }:Props) => (
    <BasicButton>{ text }</BasicButton>
);