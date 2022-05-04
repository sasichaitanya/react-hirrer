import React, { useEffect, useState } from 'react'

function UseEffectDemo(props) {
    const [name, setName] = useState('Hyderabad')
    const [count, setCount] = useState(0)

    // componentDidMount
    // giving an empty array as 2nd parameter, it is called only once on first render
    useEffect(() => {
        console.log('here to make an api call')
    }, []);


    // componentDidUpdate
    useEffect(() => {
        console.log('called when dependency value (name) changes')
    }, [name]);

    useEffect(() => {
        console.log('called when dependency value (count) changes', count)
    }, [count]);


    // componentWillUnmount
    useEffect(() => {
        // let myInterval = setInterval(() => {
        //     console.log('called for every second')
        // }, 1000)

        // returned function will be called on component unmount 
        return () => {
            
            // clearInterval(myInterval)
        }
    }, [])

    return (
        <>
            <div>UseEffectDemo {name}</div>
            <button onClick={() => setName('Vizag')}>Change Name</button>
            <hr />
            <div>Count is {count}</div>
            <button onClick={() => {
                setCount(prevState => prevState + 1)
            }}>Increment</button>
        </>
    )
}

export default UseEffectDemo