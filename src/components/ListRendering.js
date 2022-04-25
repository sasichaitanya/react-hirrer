import React, { Component } from 'react'

export class ListRendering extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const list = [
            {
                color: "red",
                value: "#f00"
            },
            {
                color: "green",
                value: "#0f0"
            },
            {
                color: "blue",
                value: "#00f"
            },
            {
                color: "cyan",
                value: "#0ff"
            },
            {
                color: "magenta",
                value: "#f0f"
            },
            {
                color: "yellow",
                value: "#ff0"
            },
            {
                color: "black",
                value: "#000"
            }
        ]
        return (
            <>
                <h3>List Rendering</h3>
                {list.map((ele, ind) => {
                    return <div key={ind}>Color is : {ele.color} & value is : {ele.value}</div>
                })}
            </>
        )
    }
}

export default ListRendering