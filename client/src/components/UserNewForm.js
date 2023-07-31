import React, { useState } from 'react'
import './UserNewForm.css'

const UserNewForm = ({ handleUserAdd, newUser, handleNewUser }) => {

    const [userName, setUserName] = useState('')
    const [userBalance, setUserBalance] = useState(0.0)

    if (!newUser) return

    const handleNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handleUserBalanceChange = (e) => {
        setUserBalance(Number(e.target.value))
    }


    const handleNewUserSubmit = (e) => {
        e.preventDefault()
        console.log("button pressed")

        handleUserAdd(
            {
                name: userName,
                balance: Number(userBalance)
            }
        )
        setUserName('')
        setUserBalance('')
        handleNewUser(false)
    }

    return (
        <div className="UserNewForm">
            <form onSubmit={handleNewUserSubmit}>
                <label class="hidden" htmlFor="newUserName">Name:</label>
                <input
                    placeholder='Enter User Name'
                    type="text"
                    id='newUserName'
                    name='newUserName'
                    onChange={handleNameChange}
                    value={userName}
                />
                <label class="hidden" htmlFor="newUserBalance">Initial Balance:</label>
                <input
                    placeholder='Initial Stake'
                    type="number"
                    step="0.01"
                    id="newUserBalance"
                    name="newUserBalance"
                    min="0.00"
                    value={userBalance}
                    onChange={handleUserBalanceChange}
                />
                <input type="submit" value="Submit" ></input>
            </form>
        </div>
    );
}

export default UserNewForm;