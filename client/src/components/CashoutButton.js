import React from 'react';
import './CashoutButton.css'

const CashoutButton = ({ requestCashout }) => {

    const handleClick = () => {
        console.log("Cashout button click detected")
        requestCashout()
    }
    return (
        <div className="CashoutButton">
            <button onClick={handleClick}>Cashout</button>
        </div>
    );
}

export default CashoutButton;