import React, { useState, useEffect } from 'react'

function EffectStuff() {

    //state hooks for maintaining length and width
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    //Wrapper function refrence containing the set height 
    const setWindowHeight = () => {
        setHeight(window.innerHeight);
    }

    //Wrapper function refrence containing the set width 
    const setWindowWidth = () => {
        setWidth(window.innerWidth);
    }

    //effect hook that recalculates the height if it changes
    useEffect(() => {
        window.addEventListener('resize', setWindowHeight);

        return () => {
            window.removeEventListener('resize', setWindowHeight);
        }
    }, [height]);

    //effect hook that recalculates the width if it changes
    useEffect(() => {
        window.addEventListener('resize', setWindowWidth);

        return () => {
            window.removeEventListener('resize', setWindowWidth);
        }
    }, [width]);

    //show the results 
    return (
        <div>
            <p>Height: {height}px</p>
            <p>Width: {width}px</p>
            <p>Area is: {height * width}px</p>
        </div>
    )
}

export default EffectStuff