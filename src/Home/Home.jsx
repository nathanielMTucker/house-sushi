import React from 'react';
import LeftBar from './Components/LeftBar';
import RightBar from './Components/RightBar';
import Header from './Components/Header';

export default function Home(){
    return(
        <div className="App">
            <LeftBar/>
            <Header/>
            <RightBar/>
        </div>
    );
}