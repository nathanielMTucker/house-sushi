import React, { Component } from 'react'
import {catagories} from '../Data/CatagoryList';

var i = 3000;

export default class CatCards extends Component {
    
    event(item) {
        document
        .getElementById(item)
        .scrollIntoView(
            {
                behavior: "smooth"
            }
        ); 
    }
    render() {
        return (
            catagories.map(
                (item) => 
                {  
                    return(
                        <section key={i++} className="catagory-cards" onClick={() => this.event(item)}>
                            <div className="text" >{item}</div>
                        </section>
                    )
                }
            )
        )
    }
}
