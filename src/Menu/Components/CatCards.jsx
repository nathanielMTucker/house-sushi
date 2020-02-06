import React from 'react';
import {catagories} from '../Data/CatagoryList';

var i = 3000;

export default function CatCards(){
    
    return(
        catagories.map(
            (item) => 
            {
                return(
                    <section key = {i++} className="catagory-cards">
                        <div className="text">{item}</div>
                    </section>
                )
            }
        )
    );
}