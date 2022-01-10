import React, { useContext, useReducer } from 'react'

//Import the context objects
import { RedTeamContext, BlueTeamContext, ActionsContext } from './ContextStuff'

//The { children } parameter is the value for the portion of the DOM subtree 
//that is deeper than all of the <Context.Provider /> layers
function ContextWrapper({ children }) {

    //Fetch the context values with the useContext(ContextObject) hook
    const actions = useContext(ActionsContext);
    const redContext = useContext(RedTeamContext);
    const blueContext = useContext(BlueTeamContext);

    //Logic for the Reducer.
    //More generic than the one found in '../Reducer/ReducerStuff.js' because context objects split
    //redTeam and blueTeam states into two separate variables.
    const reducer = (state, action) => {
        switch(action.type) { 
            case actions.FG:
                return {
                    ...state, 
                    fg: state.fg + 1,
                    total: state.total + 3
                }
            case actions.TD:
                return {
                    ...state, 
                    td: state.td + 1,
                    total: state.total + 7
                }
            default:
                return state;
        }
    }

    //Call the useReducer hook.
    //This result should be deconstructed in the component where the values will actually be used
    //i.e., ScoreContextStuff.js
    const red = useReducer(reducer, redContext);
    const blue = useReducer(reducer, blueContext);

    return (
        //Wrap the children in the relevant <Context.Provider /> tags to provide context to the children
        <RedTeamContext.Provider value={red}>
                <BlueTeamContext.Provider value={blue}>
                    <ActionsContext.Provider value={actions}>
                        { children }
                    </ActionsContext.Provider>
                </BlueTeamContext.Provider> 
            </RedTeamContext.Provider>
    )
}

export default ContextWrapper
