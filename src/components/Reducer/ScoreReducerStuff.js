import React from 'react'

//Deconstruct the team data props sent via <Score /> in ReducerStuff.js
function Score({ color, team, ACTIONS, ACTOR, dispatch }) {
    return (
        <div>
            {/* Display the current state of the team */}
            <h3>{color} Team TD: {team.td}</h3>
            <h3>{color} Team FG: {team.fg}</h3>
            <h3>{color} Team Score: {team.total}</h3>
            <br/>

            {/* Lambda function tells the reducer how to update the state based on which button is clicked via switch statement */}
            <button onClick={() => dispatch( { type: ACTIONS.FG, team: ACTOR } )}>Add FG</button>
            <button onClick={() => dispatch( { type: ACTIONS.TD, team: ACTOR } )}>Add TD</button>
        </div>
    )
}

export default Score
