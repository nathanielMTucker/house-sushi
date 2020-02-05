import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <div className="logo">
            <div className="break" />
            <div className="head">
                <img src="./hs-logo.png" alt="house-sushi-logo"/>
            </div>
            <div className="sub-heading">
                <span>
                    Traditional & Modern style sushi
                </span>
                <span className="j">
                    Japanese Cuisine
                </span>
            </div>
            <div className="menu">
                <Link to="/menu">
                    <p>Food!</p>
                </Link>
            </div>
            <div className ="contact">
                <Link to="/contact">
                    <p>Stop by!</p>
                </Link>
            </div>
        </div>
    );
}