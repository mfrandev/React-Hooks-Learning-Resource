import React, { useState, useMemo, useEffect } from 'react'

//The only purpose of this function is to double number value of the parameter
//The for loop inside of it is only meant to noticably increase execution time
const doubleSlow = (number) => {

    //Console.log to keep track of when this function executes
    console.log("Double Slow");
    for(var i = 0; i < 1000000000; i++) {}
    return number * 2
}

function MemoStuff() {

    //Initialize the state for the counter and dark theme toggle
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    //Wrap the assignment for doubleNumber inside of a function parameter to useMemo to memoize its assignment
    //i.e., doubleNumber is only re-computed if the value of the underlying number being doubled is changed
    //This is not necessarily performed upon re-rendering of the component
    const doubleNumber = useMemo(() => {
        return doubleSlow(number);
    }, [number]);

    //Wrap the assignment for themeStyle inside of a function parameter to useMemo to memoize its assignment
    //i.e., themeStyle is only re-computed if the value of 'dark' is being toggled
    //This is not necessarily performed upon re-rendering of the component
    const themeStyle = useMemo(() => {
        return { 
                backgroundColor: dark ? 'black' : 'white',
                color: dark ? 'white' : 'black'
               }
    }, [dark]);

    //This useEffect hook puts a notice in the console every time themeStyle is computed to verify
    //that useMemo is working as intended
    useEffect(() => {
        console.log("Theme Updated")
    }, [themeStyle])

    return (
        <div>
            {/* This input field accepts numbers and sets the number state equal to the input */}
            <input type="number" value={number} onChange={(e) => {
                setNumber(parseInt(e.target.value))
            }}/><br/>
            
            {/* This button toggles the dark theme on and off */}
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Change Color
            </button><br/>

            {/* This div is where the dark theme manifests itself and shows the value of doubleNumber */}
            <div style={themeStyle}> {doubleNumber} </div>
        </div>
    )
}

export default MemoStuff
