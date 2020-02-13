import React from 'react';
import IndCards from './IndCard';
import {catagories} from '../Data/CatagoryList';
import { Component } from 'react';
import { createRef } from 'react';


var i = 0;

export default class Items extends Component{

    constructor(props){
        super(props);
        this.ref = React.createRef();
    } 
    
    render() {
        return(
            <section id="items">
                {
                    catagories.map(
                        (item) => {
                            return (
                                <div key={item} ref = {this.ref} className="bb" id={item}>
                                    <h1 className="h">{item}</h1>
                                    <div className="aa">
                                        <IndCards item={item}/>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </section>
        )
    }
}