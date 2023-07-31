
import React, { useEffect, useState } from 'react';

import './UserSelection.css'

import UserExistingSelect from '../components/UserExistingSelect';
import UserNewForm from '../components/UserNewForm';

const UserSelection = ({ users, handleActiveUserSelected, handleAddNewUser, activeUser }) => {

    const [newUser, setNewUser] = useState(false)

    const handleUserSelect = (id) => {
        console.log(`handleUserSelect called with id ${id}`)
        if (id === "") {
            handleActiveUserSelected(null)
        } else {
            const activeUser = users.filter((user) => { return (user._id === id) })[0]
            console.log(activeUser)
            handleActiveUserSelected(activeUser)
        }
    }

    const handleUserAdd = (newUser) => {
        console.log("handleUserAdd called")
        console.log(newUser)
        handleAddNewUser(newUser)
        handleActiveUserSelected(newUser)
    }

    const handleNewUser = (val) => {
        setNewUser(val)
    }

    return (
        <div className="UserSelection">
            <h2 class="neon">CR<span class="drop-out">AZY J</span>ACKPOTS</h2>
            {/* <p>There are {users.length} users</p> */}
            <UserExistingSelect
                users={users}
                handleUserSelect={handleUserSelect}
                acceptNewUser={handleNewUser}
                activeUser={activeUser}
            />
            <UserNewForm
                handleUserAdd={handleUserAdd}
                newUser={newUser}
                handleNewUser={handleNewUser}
            />
        </div>
    );
}

export default UserSelection;