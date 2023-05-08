import React, { useState, useEffect } from 'react';
import Wheel from './components/Wheel';
import './wheelContainer.css'


const WheelContainer = () => {

    const [w1Spinning, setW1Spinning] = useState(false)
    const [w2Spinning, setW2Spinning] = useState(false)
    const [w3Spinning, setW3Spinning] = useState(false)
    const [chosenSymbols, setChosenSymbols] = useState(["🍑", "🍌", "🍆"])

    const symbols = ["🍑", "🍌", "🍆", "🍏"]
    // let chosenSymbol = "🍑"

    const spinWheels = () => {
        setW1Spinning(true)
        setTimeout(() => setW2Spinning(true), 500)
        setTimeout(() => setW3Spinning(true), 1000)
    }


    return (
        <>
            <div className="App" >
                <Wheel symbols={symbols} chosenSymbol={chosenSymbols[0]} spinningWheel={w1Spinning} />
                <Wheel symbols={symbols} chosenSymbol={chosenSymbols[1]} spinningWheel={w2Spinning} />
                <Wheel symbols={symbols} chosenSymbol={chosenSymbols[2]} spinningWheel={w3Spinning} />
            </div>
            <button onClick={spinWheels}>Spin Wheels</button>
        </>
    );

}

export default WheelContainer;