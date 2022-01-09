import React from 'react'


function Score({ teamData, setTeamData, color }) {
    return (
        <div>
            <h3>{ color } Team TD: {teamData.td}</h3>
            <h3>{ color } Team FG: {teamData.fg}</h3>
            <h3>{ color } Team Score: {teamData.total}</h3>
            <br/>
            <button onClick={() => setTeamData(p => {
                return {
                    ...p,
                    fg: p.fg + 1,
                    total: p.total + 3
                }
            })}>Add FG</button>
            <button onClick={() => setTeamData(p => {
                return {
                    ...p,
                    td: p.td + 1,
                    total: p.total + 7
                }
            })}>Add TD</button>
        </div>
    )
}

export default Score
