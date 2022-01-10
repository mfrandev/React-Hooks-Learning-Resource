import React, { useContext } from 'react'

//Import the context objects
import { RedTeamContext, BlueTeamContext, ActionsContext } from './ContextStuff'

//This component actually returns what is displayed
function Score() {

    //Fetch the contexts for each teams' state and the ACTIONS object
    //Note useContext(Red/BlueTeamContext) is deconstructed here because the values are used in this component
    const [redTeam, redDispatch] = useContext(RedTeamContext);
    const [blueTeam, blueDispatch] = useContext(BlueTeamContext);
    const actions = useContext(ActionsContext);

    return (
        <div>
            
            {/* Current red team state exists in redTeam as retrieved by useContext(RedTeamContext) */}
            <h3>Red Team TD: {redTeam.td}</h3>
            <h3>Red Team FG: {redTeam.fg}</h3>
            <h3>Red Team Score: {redTeam.total}</h3>
            <br/>

            {/* 
                The on-click function uses the appropriate dispatch is as it would for any reducer hook.
                Uses actions.FG/TD as retrieved by useContext(ActionsContext)
            */}
            <button onClick={() => redDispatch( { type: actions.FG } )}>Add FG</button>
            <button onClick={() => redDispatch( { type: actions.TD } )}>Add TD</button>

            <br/><br/>

            {/* Current blue team state exists in blueTeam as retrieved by useContext(BlueTeamContext) */} 
            <h3>Blue Team TD: {blueTeam.td}</h3>
            <h3>Blue Team FG: {blueTeam.fg}</h3>
            <h3>Blue Team Score: {blueTeam.total}</h3>
            <br/>

            {/* 
                The on-click function uses the appropriate dispatch is as it would for any reducer hook.
                Uses actions.FG/TD as retrieved by useContext(ActionsContext)
            */}
            <button onClick={() => blueDispatch( { type: actions.FG } )}>Add FG</button>
            <button onClick={() => blueDispatch( { type: actions.TD } )}>Add TD</button>
        </div>
    )
}

export default Score;

