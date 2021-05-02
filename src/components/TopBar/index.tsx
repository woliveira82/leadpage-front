import React from 'react';
import { Bar, Link, Path } from './styles';

type Props = {
    title: string,
    noMenu?: boolean
}

export const TopBar:React.FC<Props> = ({ title, noMenu }: Props) => (
    <Bar>
        { !noMenu ? <Link href='#menu'>MENU</Link> : null }
        <Path>{ title }</Path>
    </Bar>
);
