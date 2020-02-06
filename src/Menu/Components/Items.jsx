import React from 'react';
import IndCards from './IndCard';
import {catagories} from '../Data/CatagoryList';
function ItemCards(props){
    return (
            <div className="aa" id={props.item}>
                <h1 className="h">{props.item}</h1>
                <IndCards item={props.item}/>
            </div>
    );
}
var i = 0;
export default function Items(){
    return(
        <section className="items">
        
            {catagories.map((item) => {
               return (
                    <ItemCards key={i++} item={item}/>
                   )
            })}
            
            
        </section>
    );
}