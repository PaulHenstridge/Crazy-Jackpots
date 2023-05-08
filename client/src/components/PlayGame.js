import React, { useRef } from 'react';
import './PlayGame.css'

const PlayGame = ({ handlePlay }) => {
    const handleContainer = useRef(null)
    const knob = useRef(null)

    const PullKnob = () => {
        handleContainer.current.classList.add('pulled');
        setTimeout(() => {
            handleContainer.current.classList.remove('pulled');
        }, 1200)
        handlePlay()
    }


    return (<div className="Handle">
        <div className="content-container" ref={handleContainer}>
            <div className="base"></div>
            <div className="handle-overlay"></div>
            <div className="knob" ref={knob} onClick={PullKnob}></div>
        </div>


    </div>);
}



export default PlayGame;