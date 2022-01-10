import React, { useState, useRef, useEffect } from 'react'



function RefStuff() {

    //Initialize the state as an empty string (should be familiar with this by now)
    const [name, setName] = useState(()=>'');

    //Ref is similar to state because it stores a value that persists between renders, 
    //but contains an object that always looks like the following: 
    //{ current: __value }
    const inputRef = useRef();
    const prevState = useRef();

    //When the input field state changes, set prevState equal to the old state value
    useEffect(() => {

        //To update the value of the ref, change the value of current in { current: __value }
        prevState.current = name;

        //This is the condition that triggers this useEffect
    }, [name]);

    return (
        <div>

            {/* 
                Set inputRef equal to a specific DOM element by setting 
                the useRef variable as the 'ref' field in the intended tag.

                onChange updates the state to what is currently in the input field
            */}
            <input ref={inputRef} value={name} onChange={(e) => setName(()=>e.target.value)} />

            {/* Print the current and previous state */}
            <div>My name is {name} and it was {prevState.current} </div>

            {/* Use the ref associated with the input tag above to focus that element onClick */}
            <button onClick={() => {
                inputRef.current.focus()
            }}>Focus</button>
        </div>
    )
}

export default RefStuff
