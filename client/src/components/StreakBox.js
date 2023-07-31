import React from 'react';
import './StreakBox.css'

const StreakBox = ({ winStreak, loseStreak }) => {
    return (
        <div className="StreakBox">
            Streak -  <span class="s-win">Win:{winStreak}</span>
            <span class="s-lose"> Lose:{loseStreak}</span>
        </div>
    );
}

export default StreakBox;