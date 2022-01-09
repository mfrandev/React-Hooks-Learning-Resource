import React from 'react'

function Score({ color, team, ACTIONS, ACTOR, dispatch }) {
    return (
        <div>
            <h3>{color} Team TD: {team.td}</h3>
            <h3>{color} Team FG: {team.fg}</h3>
            <h3>{color} Team Score: {team.total}</h3>
            <br/>
            <button onClick={() => dispatch( { type: ACTIONS.FG, team: ACTOR } )}>Add FG</button>
            <button onClick={() => dispatch( { type: ACTIONS.TD, team: ACTOR } )}>Add TD</button>
        </div>
    )
}

export default Score
