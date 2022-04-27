import React from 'react'
// cutom HOC is a simple js function taking component as parameter and returning enhanced class
function HocDemo(OriginalComponent, countToIncrement) {

    class Hoc extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState((prevState) => {
                return {
                    count: prevState.count + countToIncrement
                }
            })
        }

        render() {
            return <OriginalComponent count={this.state.count} increment={this.incrementCount} />
        }
    }

    return Hoc
}

export default HocDemo











// custom HOC 
// commonly shared code is kept here