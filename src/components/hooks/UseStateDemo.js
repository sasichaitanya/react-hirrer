import React, { useState } from 'react'

function UseStateDemo() {
    // this.state = {
    //     itemName: '',
    //     age: 20,
    // }
    const [itemName, setItemName] = useState('')
    const [age, setAge] = useState(20)

    const [items, setItems] = useState([]);
    const [form, setState] = useState({
        username: '',
        password: ''
    });

    // // in class component setstate
    // this.setState({
    //     itemName: 'changed'
    // })
    // this.setState({
    //     age: 30
    // })
    // // in functional component setstate
    // setName('changed')
    // setAge(30)


    const ageIncrement = () => {
        setAge(prevState => prevState + 1)
    }

    const addItem = event => {
        event.preventDefault();
        if (itemName.length === 0) {
            alert('please enter something')
            return;
        }
        setItems([
            ...items,
            {
                id: items.length,
                name: itemName
            }
        ]);
        setItemName('')
    };




    const printValues = e => {
        e.preventDefault();
        console.log(form.username, form.password);
        // have to do api call here 
    };

    const updateField = e => {
        let copyObj = {
            ...form, 
            [e.target.name]: e.target.value
        }
        console.log('==============', copyObj)
        setState(copyObj);
    };


    return (
        <>
            <div>UseStateDemo {age}</div>
            <button onClick={() => ageIncrement()}>Increment Age</button>


            <hr />

            <h3>List of items </h3>
            <input type="text" value={itemName} onChange={e => setItemName(e.target.value)} />
            <button onClick={(e) => addItem(e)}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>



            <hr />
            <form onSubmit={printValues}>
                <label>
                    Username:
                    <input
                        value={form.username}
                        name="username"
                        onChange={updateField}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        value={form.password}
                        name="password"
                        type="password"
                        onChange={updateField}
                    />
                </label>
                <br />
                <button>Submit</button>
            </form>
        </>

    )
}

export default UseStateDemo