import React, { Component } from 'react'

export class ErrorBoundaryDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    // this method is used for catching the error
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        // it has to return updated state
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (<div><b>Something went wrong</b></div>)
        } else {
            return (
                <>{this.props.children}</>
            )
        }

    }
}

export default ErrorBoundaryDemo