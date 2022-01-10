import React, { useState } from 'react'
import Score from './ScoreStateStuff';

function StateStuff() {

    //Use the useState hook to initialize and maintain the state of the red team
    const [redTeam, setRedTeam] = useState(() => {
        return {td: 0, fg: 0, total: 0}
    });

    //Use the useState hook to initialize and maintain the state of the blue team
    const [blueTeam, setBlueTeam] = useState(() => {
        return {td: 0, fg: 0, total: 0}
    });

    return (
        <div>
            {/* Display the score of the red team by passing the Score component the red team data as props */}
            <Score
                teamData = {redTeam}
                setTeamData = {setRedTeam}
                color = "Red" 
            />
            <br/><br/>

            {/* Display the score of the blue team by passing the Score component the blue team data as props */}
            <Score
                teamData = {blueTeam}
                setTeamData = {setBlueTeam}
                color = "Blue" 
            />
        </div>
    )
}

export default StateStuff
