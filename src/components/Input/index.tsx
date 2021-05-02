import React from 'react';
import { BasicInput } from './styles';

type Props = {
    type?: string,
    placeholder?: string
}

export const Input:React.FC<Props> = ({ type, placeholder }: Props) => (
    <BasicInput 
        type={ type ? type : "text" }
        placeholder={ placeholder ? placeholder : "" }
    />
);