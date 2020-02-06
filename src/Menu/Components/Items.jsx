import React from 'react';
import IndCards from './IndCard';
import {catagories} from '../Data/CatagoryList';

export default function Items(){
    return(
        <section className="items">
        
            {catagories.map((item) => {
               return (
                    <div>
                        <h1>{item}</h1>
                        <IndCards item={item}/>
                    </div>
                   )
            })}
            
            
        </section>
    );
}