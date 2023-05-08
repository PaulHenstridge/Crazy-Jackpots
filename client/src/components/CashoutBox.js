
import React from 'react';
import './CashoutBox.css'
import CashoutButton from './CashoutButton';
import CashoutDisplay from './CashoutDisplay';

const CashoutBox = () => {
    return (
        <div className ="CashoutBox">
            <h3>CashoutBox</h3>
            <CashoutButton/>
            <CashoutDisplay/>
        </div>
      );
}
 
export default CashoutBox;