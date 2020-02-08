import React from 'react';
import IndCards from './IndCard';
import {catagories} from '../Data/CatagoryList';
function ItemCards(props){
    return (
            <div className="bb" id={props.item}>
                <h1 className="h">{props.item}</h1>
                <div className="aa">
                    <IndCards item={props.item}/>
                </div>
                
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