import React, { useRef, useEffect } from 'react'
import "./handle.css"

const Handle = () => {

    const handleContainer = useRef(null)
    const knob = useRef(null)

    const PullKnob = () => {
        handleContainer.current.classList.add('pulled');
        setTimeout(() => {
            handleContainer.current.classList.remove('pulled');
        }, 1200);
    };


    return (<div className="Handle">
        <div className="content-container" ref={handleContainer}>
            <div className="base"></div>
            <div className="handle-overlay"></div>
            <div className="knob" ref={knob} onClick={PullKnob}></div>
        </div>


    </div>);
}

export default Handle;