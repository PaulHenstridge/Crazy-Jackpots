import React from 'react';
import './RulesDisplay.css'

const RulesDisplay = () => {
    return (
        <>
            <div className="RulesDisplay" >
                <div className="Rules">
                    <h3>Game Rules</h3>
                    <h4>One player to one machine, respect your fellow players</h4>
                    <h4>Place coin cup over handle to signal you are taking a break</h4>
                    <h4>No sawdust? No spitting!</h4>
                </div>
                <div className="Scoring">
                    <h3>Scoring</h3>
                    <div>
                        <p>
                            <h3>777 = 8 points</h3>
                            <h3>775 = 6 points</h3>
                            <h3>755 = 4 points</h3>
                        </p>
                        <p>
                            <h3>888 = 12 points</h3>
                            <h3>333 = 2 points</h3>
                            <h3>234 = 0 points</h3>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RulesDisplay;


// insert coins to add to balance, click to play