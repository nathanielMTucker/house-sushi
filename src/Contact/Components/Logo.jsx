import React from 'react';
import {Link} from 'react-router-dom';

export default function Logo(){
    return (
        <figure className="panel">
           <Link to="/"> <img src="./hs-logo.png" alt="house-sushi-logo"></img></Link>
        </figure>
    );
}