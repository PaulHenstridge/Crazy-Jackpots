import React from 'react';
import './WheelHold.css'


const WheelHold = ({hold, toggleHold, preventHold}) => {

    const handleClick = () => {
        console.log("WheelHold toggled")
        if (!preventHold) {
            toggleHold()
        }
    }

    return (
        <div className="WheelHold">
            {hold ? <button onClick = {handleClick}>Unhold</button> : <button onClick={handleClick} >Hold</button>}
        </div>
    );
}

export default WheelHold;