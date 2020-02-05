import React from 'react';

export default function Logo(){
    return(
        <div>
            <div className="break"></div>
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
        </div>
    );
}