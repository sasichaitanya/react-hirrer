import React, { useRef } from 'react'

function UseRefDemo() {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        console.log('============', data)
    };

    console.log('UseRefDemo    renderinggggggggggggggggggggggggggg')

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>Username</label>
                <input ref={usernameRef} label="Username:" type="text" />
                <label>Password</label>
                <input ref={passwordRef} label="Password:" type="password" />
                <div>
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UseRefDemo