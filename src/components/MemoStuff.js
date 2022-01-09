import React, { useState, useMemo, useEffect } from 'react'


const doubleSlow = (number) => {
    console.log("double slow");
    for(var i = 0; i < 1000000000; i++) {}
    return number * 2
}


function MemoStuff() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return doubleSlow(number);
    }, [number]);
    const themeStyle = useMemo(() => {
        return { 
                backgroundColor: dark ? 'black' : 'white',
                color: dark ? 'white' : 'black'
               }
    }, [dark]);

    useEffect(() => {
        console.log("update")
    }, [themeStyle])

    return (
        <div>
            <input type="number" value={number} onChange={(e) => {
                setNumber(parseInt(e.target.value))
            }}/><br/>
            <button onClick={() => setDark((prevDark) => !prevDark)}>
                Change Color
            </button><br/>
            <div style={themeStyle}> {doubleNumber} </div>
        </div>
    )
}

export default MemoStuff
