import React from 'react';
import { useEffect, useState } from 'react';
import CashoutBox from '../components/CashoutBox';
import PayIn from '../components/PayIn';
import PlayGame from '../components/PlayGame';
import ShowBalance from '../components/ShowBalance';
import StreakBox from '../components/StreakBox';
import WheelsDisplay from '../components/WheelsDisplay';
import CashoutButton from '../components/CashoutButton';
import CashoutDisplay from '../components/CashoutDisplay';
import './GameBox.css'

const GameBox = ({ balance, updateBalance, cards, clearBalance, costPerGame }) => {

    const [wheelSet, setWheelSet] = useState(
        cards.map((card) => {
            return card.code
        })
    )

    const [wheelSetSchedules, setWheelSetSchedules] = useState(
        cards.map((card, index) => {
            return {
                _id: index,
                code: card.code,
                imageURL: card.images.svg,
                readableName: `${card.value} of ${card.suit}`,
                reward: 1
            }
        })
    )


    const [gamePlayedCounter, setGamePlayedCounter] = useState(-2)
    const [loseStreakCounter, setLoseStreakCounter] = useState(0)
    const [winStreakCounter, setWinStreakCounter] = useState(0)

    const [wheelSymbols, setWheelSymbols] = useState([wheelSet[0], wheelSet[0], wheelSet[0]])
    const [holdStatuses, setHoldStatuses] = useState([false, false, false])
    const [preventHold, setPreventHold] = useState(false)

    const [cashoutBalance, setCashoutBalance] = useState(0)

    const [spinWheels, setSpinWheels] = useState(false)

    const startAnimation = () => {
        setSpinWheels(true)
    }
    const resetAnimation = () => {
        setSpinWheels(false)
    }

    useEffect(() => {
        if (gamePlayedCounter >= 0) {
            console.log("gamePlayedCounter change detected")
            updateBalance(costPerGame)

            updateWheelSymbols()
        }
    }, [gamePlayedCounter])

    useEffect(() => {
        console.log("Change in wheelSymbols state detected")
        const checkAllEqual = arr => arr.every(v => v === arr[0])
        console.log(wheelSymbols)

        if (gamePlayedCounter > 0) {
            if (checkAllEqual(wheelSymbols)) {
                console.log("all symbols the same: Win!")
                incrementWinStreak()
                payReward()
                setPreventHold(true)
                setHoldStatuses([false, false, false])

            } else {
                console.log("all symbols not the same: Lose!")
                incrementLoseStreak()
                setPreventHold(false)
            }
        }
    }, [gamePlayedCounter])


    const payReward = () => {
        // Work out symbol on which streak occurs
        const winningSymbol = wheelSymbols[0]

        // Look up payout for symbol
        const activeSymbolPack = wheelSetSchedules.find(sym => sym.code === winningSymbol)
        const rewardAmount = activeSymbolPack.reward
        console.log('pay reward triggered')
        // console.log(`rewardAmount is ${rewardAmount}`)
        // increment account with this payout 
        updateBalance(rewardAmount)

    }

    const incrementWinStreak = () => {
        console.log("incrementWinStreak called")
        let temp = winStreakCounter
        temp = temp + 1
        setWinStreakCounter(temp)
        if (loseStreakCounter !== 0) {
            setLoseStreakCounter(0)
        }
    }

    const incrementLoseStreak = () => {
        console.log("incrementLoseStreak called")
        let temp = loseStreakCounter
        temp = temp + 1
        setLoseStreakCounter(temp)
        if (winStreakCounter !== 0) {
            setWinStreakCounter(0)
        }
    }

    const sampleOne = (arr) => {
        return arr[(Math.random() * arr.length) | 0]
    }

    const handlePlayClicked = () => {
        console.log("handlePlayclicked triggered")
        startAnimation()
        if (balance >= costPerGame / 2) {
            let temp = gamePlayedCounter
            temp = temp + 1
            setGamePlayedCounter(temp)
        }
    }

    const updateHoldStatuses = (id) => {
        let tempHoldStatuses = [...holdStatuses]
        tempHoldStatuses[id] = !holdStatuses[id]
        setHoldStatuses(tempHoldStatuses)
    }

    const updateWheelSymbols = () => {
        const tempSymbolOn = wheelSymbols.map((w, index) => {
            if (holdStatuses[index]) {
                return w
            } else {
                return sampleOne(wheelSet)
            }
        })

        setWheelSymbols(tempSymbolOn)

    }

    const requestCashout = () => {
        console.log('requestCashout triggered')
        // I'm going to make the requestCashout feature 'buggy' on purpose! 
        // 60% of the time it works as expected. 40% of the time it won't work
        const randomNumber = Math.random()

        if (randomNumber < 0.60) {
            // Make a nice paying cash out noise here 
            setCashoutBalance(balance)
            clearBalance()
            console.log("Cashout pays out")
        } else {
            // Make a crunchy broken-sounding noise here 
            console.log("Cashout doesn't pay out")
        }
    }

    const resetWheels = () => {
        setSpinWheels(false)
    }

    return (
        <div className="GameBox">

            <div className="gamebox-controls">
                <PayIn handlePayIn={(amt) => { updateBalance(amt) }} />
                <ShowBalance>{balance}</ShowBalance>
                <PlayGame handlePlay={handlePlayClicked} />
            </div>

            <WheelsDisplay
                wheelSet={wheelSet}
                wheelSymbols={wheelSymbols}
                updateWheelSymbols={updateWheelSymbols}
                holdStatuses={holdStatuses}
                updateHoldStatuses={updateHoldStatuses}
                wheelSetSchedules={wheelSetSchedules}
                spinWheels={spinWheels}
                resetAnimation={resetAnimation}
                resetWheels={resetWheels}//prob dont need this
                preventHold={preventHold}
            />
            <StreakBox
                winStreak={winStreakCounter}
                loseStreak={loseStreakCounter}
            />
            <div className="cashout-container">
                <CashoutButton requestCashout={requestCashout} />
                <CashoutDisplay cashoutBalance={cashoutBalance} />
            </div>
            <div className="left neon-strip"></div>
            <div className="right neon-strip"></div>
            {/* <CashoutBox/> */}
            {/* <AdminBox /> */}
        </div>
    );
}

export default GameBox;