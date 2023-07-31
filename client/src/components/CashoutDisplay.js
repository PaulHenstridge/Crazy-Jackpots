import React from 'react';
import './CashoutDisplay.css'

const CashoutDisplay = ({ cashoutBalance }) => {
    return (
        <div className="CashoutDisplay"> <span>£{(Math.round(cashoutBalance * 100) / 100).toFixed(2)} </span></div>
    );
};

export default CashoutDisplay;