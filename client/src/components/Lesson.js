import React from 'react';
import Slide from './Slide.js';
import QuizForm from './QuizForm.js';
import LessonLanding from './LessonLanding.js';

const Lesson = ({selectedInstrument, quizStarted, setQuizStarted, currentSlideIndex, setSlideIndex, inputName, inputAge, lessonStarted, setLessonStarted, returnClick, audioEnd, setAudioEnd}) => {

    const finalSlideIndex = selectedInstrument.slides.length - 1;

    const startLesson = () => {
        return(
            setLessonStarted(true)
        )
    };

    const prev = () => {
        if (currentSlideIndex>0) {setSlideIndex(currentSlideIndex - 1)};
    };
    const next = () => {
        if (currentSlideIndex<finalSlideIndex) {setSlideIndex(currentSlideIndex + 1)};
    };

    const startQuiz = () => {
        return(
            setQuizStarted(true)
        )
    };


    return (
        <div id="welcome-slide-grid" >
            <div className="welcome-slide-border">
        {lessonStarted ? 
        <>
        {quizStarted ? 
        <QuizForm selectedInstrument={selectedInstrument} returnClick={returnClick}/> : 
        <div>
        <Slide selectedInstrument={selectedInstrument} 
        currentSlideIndex={currentSlideIndex} 
        finalSlideIndex={finalSlideIndex}
        prev={prev}
        next={next}
        startQuiz={startQuiz}
        /> 
        </div>}
        </> : 
        <LessonLanding inputName={inputName} 
        startLesson={startLesson}
        selectedInstrument={selectedInstrument}
        audioEnd={audioEnd} 
        setAudioEnd={setAudioEnd}
        />}
        </div>
        </div>
    )
}



export default Lesson;