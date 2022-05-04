import React, { useState } from 'react'

function UseStateDemoForm() {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: userName,
            password: password
        };
        console.log('============', data)
    };

    console.log('UseStateDemoForm    renderinggggggggggggggggggggggggggg')

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>Username</label>
                <input value={userName} onChange={(e) => setUsername(e.target.value)} label="Username:" type="text" />
                <label>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}
                    label="Password:" type="password" />
                <div>
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UseStateDemoForm