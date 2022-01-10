import React from 'react'
import Score from './ScoreContextStuff';
import ContextWrapper from './ContextWrapper';


/*

----------------- Set up the initial state for the logic ----------------- 
1. Each sub object is assigned to an individual context variable
2. Using context to manage this data is suboptimal because
   a. ScoreContextStuff must contain the explicit JSX for both red and blue team making it less modular 
   b. Should be managed by state instead, this method is just for the sake of context example

*/
const initialState = {
    redTeam: {
        td: 0,
        fg: 0,
        total: 0
    },
    blueTeam: {
        td: 0,
        fg: 0,
        total: 0
    }
}

/*

----------------- Initialize the actions object ----------------- 
//This object is a good candidate for context under non-demonstrational circumstances 
//since its contents are not meant to change

*/
const ACTIONS = {
    TD: 'td',
    FG: 'fg'
}

// Create the initial context objects using the initial state. 
// Important that these are EXPORTED
export const RedTeamContext = React.createContext(initialState.redTeam);
export const BlueTeamContext = React.createContext(initialState.blueTeam);
export const ActionsContext = React.createContext(ACTIONS);

function ContextStuff() {

    return (
        <div>
            {/* Context wrapper contains the reducer logic and state management. Values passed to wrapper via context */}
            <ContextWrapper>
                {/* Score contains the JSX for the actual display and the update logic. */}
                <Score />
            </ContextWrapper>
        </div>
    )
}

export default ContextStuff
