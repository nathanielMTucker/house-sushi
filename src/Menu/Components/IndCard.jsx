import React from 'react';
import {linker} from '../Data/CatagoryList';


export default function IndCards(props){
    return(
        linker[props.item]
            .map(
                (items)=>{        
                    return( 
                        <section className="index-cards">
                         
                            <h1>{items.title}</h1>
                            <img src="sushi.jpg" alt="sushi"></img>
                            <p>{items.price}</p>
                        </section>);
                }
            )
    );
}