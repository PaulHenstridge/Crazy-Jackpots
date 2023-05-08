import React from 'react';
import './PayIn.css'

const PayIn = ({ handlePayIn }) => {

    return (
        <>
            <div className="PayIn" onClick={(e) => { handlePayIn(0.50) }}>

                <span id="coin-price">50p</span>

            </div>
        </>

    );
}

export default PayIn;