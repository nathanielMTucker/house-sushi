import React from 'react';
import {catagories} from '../Data/CatagoryList';
export default function CatCards(){
    return(
        catagories.map(
            (item) => 
            {
                return(
                    <section className="catagory-cards">
                        <div className="text">{item}</div>
                    </section>
                )
            }
        )
    );
}