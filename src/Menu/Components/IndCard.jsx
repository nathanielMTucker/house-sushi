import React from 'react';
import {catagories, linker} from '../Data/CatagoryList';
function dido(props){
    
}

export default function IndCards(props){
    return(
        linker[props.item]
            .map(
                (items)=>{        
                    return( 
                        <section className="index-cards">
                         
                            <h1>{items.title}</h1>
                            <p>{items.price}</p>
                        </section>);
                }
            )
    );
}