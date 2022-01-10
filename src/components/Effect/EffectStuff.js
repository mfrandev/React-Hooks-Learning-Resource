import React, { useState, useEffect } from 'react'

function EffectStuff() {

    //Initialize state for window height and width using useState(heightValue/widthValue)
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    /*
        The two functions below exist because without them, it wouldn't be possible 
        to remove the event listeners from the browser after each useEffect trigger.
        Consider them as "memory reference functions"
    */

    //Wrapper function that updates the state for height using setHeight(currentHeight)
    const setWindowHeight = () => {
        setHeight(window.innerHeight);
    }

    //Wrapper function that updates the state for width using setWidth(currentWidth)
    const setWindowWidth = () => {
        setWidth(window.innerWidth);
    }

    // --------------------- End Memory Reference Functions ---------------------

    //useEffect hook that recalculates the height of the viewport if it changes
    useEffect(() => {
        window.addEventListener('resize', setWindowHeight);

        //This return function is "cleanup" for any objects created to perform the effect.
        //Without this, the browser would eventually be flooded with unnecessary eventListeners
        //and performance would drop
        return () => {
            window.removeEventListener('resize', setWindowHeight);
        }
        //This height value is a "dependency," or the condition that triggers this useEffect to trigger
    }, [height]);

    //useEffect hook that recalculates the width of the viewport if it changes
    useEffect(() => {
        window.addEventListener('resize', setWindowWidth);

        //This return function exists for the same purpose as in the useEffect above
        return () => {
            window.removeEventListener('resize', setWindowWidth);
        }
        //This width value is a "dependency," or the condition that triggers this useEffect to trigger
    }, [width]);

    //Show the results every time the viewport dimensions change
    return (
        <div>
            <p>Height: {height}px</p>
            <p>Width: {width}px</p>
            <p>Area is: {height * width}px</p>
        </div>
    )
}

export default EffectStuff