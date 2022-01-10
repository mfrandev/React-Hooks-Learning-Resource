import React from 'react'

//Unpack the props sent to the component
function Score({ teamData, setTeamData, color }) {
    return (
        <div>
            {/* Display the team state using the prop data */}
            <h3>{ color } Team TD: {teamData.td}</h3>
            <h3>{ color } Team FG: {teamData.fg}</h3>
            <h3>{ color } Team Score: {teamData.total}</h3>
            <br/>

            {/* Use the setTeamData function from the props to update the state accordingly upon clicking ADD FG */}
            <button onClick={() => setTeamData(p => {
                return {
                    ...p,
                    fg: p.fg + 1,
                    total: p.total + 3
                }
            })}>Add FG</button>

            {/* Use the setTeamData function from the props to update the state accordingly upon clicking ADD TD */}
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
