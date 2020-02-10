import React, { Component } from 'react'
import {catagories} from '../Data/CatagoryList';

var i = 3000;

export default class CatCards extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
        this.event = this.event.bind(this);
    }
    event(item){
        console.log(document.getElementById(item));
        var e = document.getElementById(item);
        var y = e.getBoundingClientRect();
        document.getElementById('items').scrollTo(0, y.top);
    }
    render() {
        return (
            catagories.map(
                (item) => 
                {  
                    return(
                        
                        <section key = {i++} className="catagory-cards">
                            <div className="text" onClick={() => this.event(item)}>{item}</div>
                        </section>
                    )
                }
            )
        )
    }
}
