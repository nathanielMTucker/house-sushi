import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav(){
    return (
        <nav className="nav">
            <div className="food">
                <Link to="/menu">Food!</Link>
            </div>
            
            <div className="cont">
                <Link to="/contact">Stop by!</Link>
            </div>
        </nav>
    );
}