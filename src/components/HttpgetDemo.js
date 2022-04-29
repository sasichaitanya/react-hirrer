import React, { Component } from 'react'
import axios from 'axios';

export class HttpgetDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            errMessage: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.tyicode.com/posts')
            .then(resp => {
                console.log('response========', resp)
                this.setState({
                    list: resp.data
                })
            })
            .catch(err => {
                console.log('error========', err)
                this.setState({
                    errMessage: 'Error while rendering the data'
                })
            })
    }

    render() {
        if (this.state.errMessage) {
            return <div>{this.state.errMessage}</div>
        }
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((ele) => {
                            return <li key={ele.id}>{ele.id}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default HttpgetDemo