import React, { Component } from 'react'
import {catagories} from '../Data/CatagoryList';

var i = 3000;

export default class CatCards extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
        this.event = this.event.bind(this);
        this.ref = React.createRef();
    }
    event(item){
        var e = document.getElementById(item);
        console.log(e, e.offsetTop);
        var d = document.getElementById('items');
        console.log(d);
        e.scrollIntoView({behavior: "smooth"});
        
    }
    render() {
        return (
            catagories.map(
                (item) => 
                {  
                    return(
                        <section key = {i++} className="catagory-cards" onClick={() => this.event(item)}>
                            <div ref className="text" >{item}</div>
                        </section>
                    )
                }
            )
        )
    }
}
