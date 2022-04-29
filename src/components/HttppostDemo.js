import React, { Component } from 'react'
import axios from 'axios'

export class HttppostDemo extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // loader enable
        axios.post('https://jsonplaceholder.tyicode.com/posts',
            {
                "id": 123,
                "title": "hello",
                "body": "hi how are u"
            })
            .then(resp => {
                // loader disable
                console.log('response========', resp)
            })
            .catch(err => {
                // loader disable
                console.log('error========', err)

            })
    }

    render() {
        return (
            <div>HttppostDemo</div>
        )
    }
}

export default HttppostDemo