import React from 'react';

export default function Header(){
    return(
        <div className="logo">
            <div className="break"></div>
            <div className="head">
                <img src="./hs-logo.png" alt="house-sushi-logo"/>
            </div>
            <div className="sub-heading">
                <span>
                    Traditional & Modern style sushi
                </span>
                <br/>
                <span className="j">
                    Japanese Cuisine
                </span>
            </div>
            <div className="menu">
                <a href="google.com"><p>Food!</p></a>
            </div>
            <div className ="contact">
            <a href="google.com"><p>Stop by!</p></a>
            </div>
        </div>
    );
}