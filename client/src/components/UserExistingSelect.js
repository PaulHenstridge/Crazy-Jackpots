import React from 'react';
import './UserExistingSelect.css'

const UserExistingSelect = ({ users, handleUserSelect, activeUser, acceptNewUser }) => {

    const renderUserOptions = users.map(user => {
        return <option key={user._id} value={user._id}>{user.name}</option>
    })

    const handleUserSelected = (e) => {
        console.log(`handleUserSelected triggered with ${e.target.value}`)
        //PH TODO - if e.t.val === new user, reveal form, else call handle select vslue
        if (e.target.value === 'new-user') {
            acceptNewUser(true)
        }
        handleUserSelect(e.target.value)
    }

    return (
        <div className="UserExistingSelect">
            {/* {activeUser && <p>The active user is {activeUser.name}</p>} */}
            <label htmlFor="user-selections" className='hidden' >Select a user</label>
            <select
                name="user-selections"
                id="user-selections"
                onChange={handleUserSelected}
                value={activeUser ? activeUser._id : ""}
            >
                <option value="">Select a user</option>
                {renderUserOptions}
                <option value="new-user">Add New User</option>

            </select>
        </div>
    );
}

export default UserExistingSelect;