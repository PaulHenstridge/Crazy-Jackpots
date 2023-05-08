import React from 'react';
import './ShowBalance.css'

const ShowBalance = ({ children }) => {
    return (
        <div className='ShowBalance'>
            <span>£{(Math.round(children * 100) / 100).toFixed(2)} </span>
        </div>

    );
}

export default ShowBalance;

//{Math.round(children * 100) / 100}