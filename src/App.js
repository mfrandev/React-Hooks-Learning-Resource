import StateStuff from "./components/State/StateStuff";
import EffectStuff from "./components/Effect/EffectStuff";
import ReducerStuff from "./components/Reducer/ReducerStuff";
import MemoStuff from "./components/Memo/MemoStuff"
import RefStuff from "./components/Ref/RefStuff";
import ContextStuff from "./components/Context/ContextStuff";

function App() {
  return (
    <div className="App">

      {/* ---------------------------------------- 1. useState ---------------------------------------- */}

      {/*

        Notes On useState:

        1. useState takes either a value or a function as a parameter to set the initial state value
          i.e. useState(() => return { name: "chicken_mike" }) or useState({ name: "chicken_mike" })
          a. Function initialization is more efficient when managaing large states
          b. Make sure to say return when creating objection in lambda function

        2. useState returns a tuple of [state, setState], where
          a. state is an object or value matching the type (or return value) of the parameter passed to useState
          b. setState is a function object that accepts another function as a parameter 
             that details how state should be modified. This function can also access the previous state i.e. (prev) => {...}

      */}
      {/* <StateStuff/> */}


      {/* ---------------------------------------- 2. useEffect ---------------------------------------- */}

      {/*

        Notes On useEffect

        1. useEffect isn't typically set to a variable
        2. useEffect takes two parameters
          a. A function that specifies what should the effect should trigger
          b. A list of dependencies that trigger the effect
          c. Omitting the dependncy list causes everything to trigger the useEffect
        3. An empty set of dependencies means the effect triggers on page load and no other circumstances
        4. Have to be careful when using event listeners to return a function that removes the event listener for performance
        5. Have to also be careful that dependencies given do not cause any infinite loops because the dependency gets modified
           as a result of the dependency being changed previously

      */}
      {/* <EffectStuff /> */}


      {/* ---------------------------------------- 3. useReducer ---------------------------------------- */}

      {/*

        Notes On useReducer

        1. useReducer takes two parameters
          a. First is a function object of the reducer function
          b. Second is the initial state (usually some object)
        2. Returns a tuple [state, dispatch], where
          a. state is a state object matching the type of the initial state
          b. dispatch is a function that updates the state via the reducer function passed to useReducer
        3. Dispatch often takes a parameter (of type object)
          a. First is an action for the reducer function { type: ACTION.TYPE }
          b. Second is a payload containg data that might have been received from the user { payload: { name: name }}
        4. reducer takes two arguments
          a. First is a state object containing the current state before modification
          b. Second is an action object specifying what should be done (via switch) 
             and also contains the payload if applicable

      */}
      {/* <ReducerStuff /> */}


      {/* ---------------------------------------- 4. useMemo ---------------------------------------- */}

      {/* 

        Notes on useMemo

        1. React components will re-render when modified
        2. Can apply useMemo to tell portions of the component not to re-render if it would require an expensive computation 
           AND the value of that computation is unchanged from before the re-rendering
        3. By wrapping the expensive function call in useMemo, returning it from its function parameter, and properly setting
           the state dependencies, the value will not recalculate when the component re-renders as long as it is unchanged
        4. Consider how pass by reference might influence this
           a. i.e. how when the component re-renders, an object's values may be the same, but the memory reference changes
        5. Also keep in mind there is a memory and performance overhead for each useMemo introduced
          a. So only use it when the benefit is obvious

      */}
      {/* <MemoStuff /> */}


      {/* ---------------------------------------- 5. useRef ---------------------------------------- */}

      {/* 

        Notes on useRef

        1. Often used to:
          a. Access DOM elements via the ref field in an element
            i. Set a variable equal to useRef and place it in the ref={} tag of JSX element
            ii. Do NOT try to modify the state from this variable, as ref ??? state
          b. Storing values independently of the state across renders without triggering a re-render
            i. Can set the value of the previous state to the ref via useEffect
            ii. Count how many times a component renders by counting how many times the state variable changes
        2. useRef returns an object that looks like: 
          a. { current: __value } 

      */}
      {/* <RefStuff /> */}


      {/* ---------------------------------------- 6. useContext ---------------------------------------- */}

      {/* 

        Notes on useContext

        1. Requires an existing ContextObject to be passed as an argument
          a. This is created by calling React.createContext(InitialState)
          b. Initialization must also be an export statement
          c. Ex. export const MyContext = React.createContext(InitialState)
        2. Wrap components in which you want the context to exist with <ContextObject.Provider /> tags
          a. Set the 'value' field of <ContextObject.Provider /> equal to the context you want to provide
          b. Ex. <ContextObject.Provider value = { stateChildrenNeedToAccess } />
        3. Context seems to be most helpful when used with objects whose values ideally never change
        4. Context can be retrieved in a child component by importing the context objects from the appropriate file
           and setting a variable equal to useContext(ContextObject)
           a. Ex. const [red, setRed] = useContext(RedTeamContext), where RedTeamContext is an object returned by useState

      */}
      {/* <ContextStuff /> */}

    </div>
  );
}

export default App;
