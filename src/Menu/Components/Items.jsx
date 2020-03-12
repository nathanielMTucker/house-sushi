import React from 'react';
import IndCards from './IndCard';
import {catagories} from '../Data/CatagoryList';
import { Component } from 'react';

export default class Items extends Component{

    render() {
        return(
            <section id="items">
                {
                    catagories.map(
                        (item) => {
                            return (
                                <div key={item} className="bb" id={item}>
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