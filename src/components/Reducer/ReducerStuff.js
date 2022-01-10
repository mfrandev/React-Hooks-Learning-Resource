import React, { useReducer } from 'react'
import Score from './ScoreReducerStuff'

//This file should produce the same logic as StateStuff except with useReducer

//Set up the initial state for the logic
//Retrospectively, could have split this up into two states and use two reducers
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

//Create the possible actions the reducer can perform
const ACTIONS = {
    FG: 'fg',
    TD: 'td'
}

//Determines if red or blue team scored
const ACTORS = {
    BLUE: 'blue',
    RED: 'red'
}

//Create the logic that is called from dispatch for all the different scenarios 
//Action is what is passed to dispatch, state is the current state before updating
//The shape of action in this scenario will look like: { type: ACTIONS.FG, team: ACTORS.BLUE }
const reducer = (state, action) => {
    
    //IF THE RED TEAM SCORES...
    if(action.team === ACTORS.RED) {
        switch(action.type) {

            //A FG, DO THIS
            case ACTIONS.FG:
                return {
                    ...state,
                    redTeam: {
                        ...state.redTeam,
                        fg: state.redTeam.fg + 1,
                        total: state.redTeam.total + 3
                    } 
                }

            //A TD, DO THIS
            case ACTIONS.TD:
                return {
                    ...state, 
                    redTeam: {
                        ...state.redTeam,
                        td: state.redTeam.td + 1,
                        total: state.redTeam.total + 7
                    } 
                }
            
            //SOMETHING UNEXPECTED, DO NOTHING
            default: 
                return state
        }
    } 
    
    //IF BLUE TEAM SCORES...
    else if(action.team === ACTORS.BLUE) {
        switch(action.type) {

            //A FG, DO THIS
            case ACTIONS.FG:
                return {
                    ...state,
                    blueTeam: {
                        ...state.blueTeam,
                        fg: state.blueTeam.fg + 1,
                        total: state.blueTeam.total + 3
                    } 
                }

            //A TD, DO THIS
            case ACTIONS.TD:
                return {
                    ...state, 
                    blueTeam: {
                        ...state.blueTeam,
                        td: state.blueTeam.td + 1,
                        total: state.blueTeam.total + 7
                    } 
                }

            //SOMETHING UNEXPECTED, DO NOTHING
            default: 
                return state
        }
    }
}

function ReducerStuff() {

    //useReducer hook returns a [state, dispatchFunction] tuple
    //state is the current state, dispatchFunction updates the state using the reducer function object parameter
    //useReducer hook accepts a function object and the initial state as parameters
    const [state, dispatch] = useReducer(reducer, initialState);

    return (

        <div>
            
            {/* Display the score of the red team by passing the Score component the red team data as props */}
            <Score 
                color="Red"
                team={state.redTeam}
                ACTIONS={ACTIONS}
                ACTOR={ACTORS.RED}
                dispatch={dispatch}
            />

            <br/><br/>

            {/* Display the score of the blue team by passing the Score component the blue team data as props */}
            <Score 
                color="Blue"
                team={state.blueTeam}
                ACTIONS={ACTIONS}
                ACTOR={ACTORS.BLUE}
                dispatch={dispatch}
            />
        </div>
    )
}

export default ReducerStuff
