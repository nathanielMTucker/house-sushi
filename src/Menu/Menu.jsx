import React from 'react';
import Logo from '../Contact/Components/Logo';
import Nav from '../Contact/Components/Nav';
import Items from './Components/Items';
import Catagories from './Components/Catagories';
export default function Menu(){
    
    return (
        <div className="menu-page">
            <Logo />
            <Nav />
            <Items />
            <Catagories />
        </div>
    );
        
}