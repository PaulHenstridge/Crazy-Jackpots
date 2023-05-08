import React from 'react';
import './WheelBox.css'
import { useState } from 'react';

import Wheel from './Wheel';
import WheelHold from './WheelHold';

const WheelBox = ({ wheelId, symbols, symbol, holdStatus, updateHoldStatus, wheelSetSchedules, preventHold, spinning, resetAnimation }) => {


    const handleToggle = () => {
        updateHoldStatus(wheelId)
    }




    return (
        <div className="WheelBox">
            <Wheel
                symbols={symbols}
                symbol={symbol}
                wheelSetSchedules={wheelSetSchedules}
                spinningWheel={spinning}
                resetAnimation={resetAnimation}
            />

            <WheelHold hold={holdStatus} toggleHold={handleToggle} preventHold={preventHold} />
        </div>
    );
}

export default WheelBox;