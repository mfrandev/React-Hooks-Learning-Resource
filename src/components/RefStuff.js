import React, { useState, useRef, useEffect } from 'react'



function RefStuff() {

    const [name, setName] = useState(()=>'');
    //Similar to state by storing a value that persists between renders, 
    //but contains a set object that looks like the following: 
    //{ current: __value }
    const inputRef = useRef();
    const prevState = useRef();

    useEffect(() => {
        prevState.current = name;
    }, [name]);

    return (
        <div>
            <input ref={inputRef} value={name} onChange={(e) => setName(()=>e.target.value)} />
            <div>My name is {name} and it was {prevState.current} </div>
            <button onClick={() => {
                inputRef.current.focus()
            }}>Focus</button>
        </div>
    )
}

export default RefStuff
