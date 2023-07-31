import React, { useRef, useState, useEffect } from 'react'
import "./Wheel.css"
/*
symbols = code for all images for each wheel
symbol = code for image to stop on
wheelSetSchedules = array of objects linking code to imageURLs

*/
const Wheel = ({ symbols, symbol, wheelSetSchedules, spinningWheel, resetAnimation }) => {

    const [spinning, setSpinning] = useState([false, false, false, false])
    const [stopped, setStopped] = useState([false, false, false, false]);

    const [wheelSetURLs, setWheelSetURLs] = useState([])
    const [chosenURL, setChosenURL] = useState('')

    useEffect(() => {
        setWheelSetURLs(wheelSetSchedules.map(image => image.imageURL))
    }, [wheelSetSchedules])

    useEffect(() => {
        let chosen = wheelSetSchedules.find(image => image.code === symbol)
        setChosenURL(chosen.imageURL)
    }, [symbol, wheelSetSchedules])

    const wheelSides = useRef([])
    // const overlay = useRef(null)

    // let chosen = wheelSetSchedules.find(image => image.code === symbol)
    // let chosenURL = chosen.imageURL


    // if spinningWheel is passed in as true the spin func is called
    useEffect(() => {
        if (spinningWheel) {
            spin();
        }
    }, [spinningWheel]);


    function spin() {
        console.dir(wheelSides.current[0])
        // overlay.current.style.opacity = 0
        wheelSides.current.forEach((wSide, i) => {
            // Set the background image and style properties of the div
            wSide.style.backgroundImage = `url(${wheelSetURLs[i]})`;
            wSide.style.backgroundSize = "cover";
            wSide.style.backgroundPosition = "center";
            wSide.style.backgroundRepeat = "no-repeat";
            wSide.style.animationDelay = `${i * 1000}ms`;
        })
        // state of each image set to true, so animation begins
        setSpinning([true, true, true, true])
        // TODO - add .spinnng-fast for a few secs, then remove.
        setTimeout(() => stopOnSymbol(), 4000) // TODO <-- set this as a variable
    }

    // put wrong symbols in an array, loop over and remove one at a time, with a delay between
    const stopOnSymbol = function () {
        let wrongSymbols = wheelSides.current.filter(
            (wSide, i) => wSide.style.backgroundImage !== `url("${chosenURL}")` && spinning[i]
        );

        const removeSpinning = (index) => {
            setSpinning((prevState) =>
                prevState.map((val, i) => (i === index ? false : val))
            );
        };

        wrongSymbols.forEach((wSide, i) => {
            setTimeout(() => {
                let index = wheelSides.current.findIndex((el) => el === wSide);
                if (index !== -1) {
                    removeSpinning(index);
                }
            }, (i + 1) * 600);
        });

        // when all wrong options removed, stop animation on correct symbol, and keep it vidsible.
        setTimeout(() => {
            let winnerIndex = wheelSides.current.findIndex(
                (wSide) => wSide.style.backgroundImage === `url("${chosenURL}")`
            );
            setSpinning((prevState) =>
                prevState.map((val, index) => (index === winnerIndex ? false : val))
            );
        }, 2400);

        setTimeout(() => {
            let winnerIndex = wheelSides.current.findIndex(
                (wSide) => wSide.style.backgroundImage === `url("${chosenURL}")`
            );
            setStopped((prevState) =>
                prevState.map((val, index) => (index === winnerIndex ? false : true))
            );
        }, 2500);

        setTimeout(() => {
            setSpinning(prevState => prevState.map(() => false));
            setStopped(prevState => prevState.map(() => false));
            resetAnimation();
            // overlay.current.style.opacity = 1;
        }, 10500);
    };

    // below we map over symbols to create each 'wheel-side' (i was struggling for names for that one... :-)
    // sybmols is only the codes, but dont think it matters at its the right length array and symbol is never used
    // however, nothing is showing up, so...

    // spinnig and stopped states are referenced in ternary ops, changing classes with re-renders

    return (<div className="Wheel">
        <div className="wheel-container">
            {symbols.map((symbol, index) => (
                <div
                    key={index}
                    ref={(el) => (wheelSides.current[index] = el)}
                    className={`symbol s${index + 1} ${spinning[index] ? 'spinning' : ''}  ${stopped[index] ? 'stopped' : ''}`}
                ></div>
            ))}
            {/* <div ref={overlay} className="overlay">?</div> */}
        </div>
        {/* <button ref={spinBtn} className="spin" onClick={spin}>SPIN!</button> */}

    </div>);
}

export default Wheel;