import React from 'react';
import Logo from './Components/Logo';
import Nav from './Components/Nav';
import Details from './Components/Details';
import Map from './Components/Map';
export default function Contact(){
    
       return (
        <div className="contact-page">
            <Logo />
            <Details/>
            <Nav/>
            <Map/>
        </div>
       );
        
}