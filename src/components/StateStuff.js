import React, { useState } from 'react'
import Score from './ScoreStateStuff';

function StateStuff() {

    //Setup the useState hook for the red team 
    const [redTeam, setRedTeam] = useState(() => {
        console.log("setup red");
        return {td: 0, fg: 0, total: 0}
    });

    //Setup the useState hook for the blue team 
    const [blueTeam, setBlueTeam] = useState(() => {
        console.log("setup blue");
        return {td: 0, fg: 0, total: 0}
    });

    return (
        <div>
            <Score
                teamData = {redTeam}
                setTeamData = {setRedTeam}
                color = "Red" 
            />
            <br/><br/>
            <Score
                teamData = {blueTeam}
                setTeamData = {setBlueTeam}
                color = "Blue" 
            />
        </div>
    )
}

export default StateStuff
