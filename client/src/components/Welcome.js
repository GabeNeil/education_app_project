import React from 'react';
import Boxy_Hello from "./Boxy_Hello.png";
import Logo from "./Logo.png";
import "./Welcome.css";
import '../App.css';


const Welcome = () => {

    return (
        <>
        <div id='icon-grid'>
            <img id='logo-size' src={Logo} alt=""/>
        </div>
        <div id='select-text-grid'>
                <h1>Select a box to start a lesson</h1>
        </div>
        <div id='welcome-slide-grid'>
            <div className='welcome-slide-border'>
                <div id='welcome-grid-container'>
                <h2 id='welcome-text-grid'>Welcome to Learning Box!</h2>
                <img className='boxy-size' id ='welcome-boxy-grid' src={Boxy_Hello} alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}




export default Welcome