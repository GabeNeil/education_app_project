import React from 'react';
import {ReactComponent as BoxyMusic} from './Boxy_Music.svg';

const LessonLanding = ({inputName, startLesson, selectedInstrument}) => {
    //   const setText = () => {  
    //     let line1 = document.querySelector('#line1');
    //     let line2 = document.querySelector('#line2');
    //     let line3 = document.querySelector('#line3');
    //     line1.textContent = "Click me";
    //     line2.textContent = "to hear a";
    //     line3.textContent = selectedInstrument.name;
    //};

    function clickBoxy(){
            let numberOfSounds = selectedInstrument.sounds.length;
            let choice = Math.floor(Math.random()*numberOfSounds);
            let audioSrc = selectedInstrument.sounds[choice];
            let audio = require('../sounds/' + audioSrc).default;
            let clip = new Audio(audio);
            let instrument = document.querySelector('#musical-instrument');
            instrument.textContent = selectedInstrument.name;
            clip.play();
        };
    
    return(
        <div>

        <h3>Hi {inputName? <span>{inputName}</span> : <span>there</span>}, 
        welcome to the {selectedInstrument.name} Lesson!</h3>
        <BoxyMusic className="boxy" onClick={clickBoxy}/>
        <p>Click the button below when you are ready to start!</p>
        <button type="button" className="form-submit-button" onClick={startLesson}>Start Lesson</button>

        </div>
    )
}

export default LessonLanding