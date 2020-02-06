import React from 'react';
import {linker} from '../Data/CatagoryList';

var i = 2000;
export default function IndCards(props){
    return(
        linker[props.item]
            .map(
                (items)=>{        
                    return( 
                        <section key={i++} className="index-cards">
                            <h1>{items.title}</h1>
                            <img src="sushi.jpg" alt="sushi"></img>
                            <p>{items.price}</p>
                        </section>);
                }
            )
    );
}