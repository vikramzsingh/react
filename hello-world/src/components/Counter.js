import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
              count: 0
        }
    }
    
    Increment() {
    /*    this.setState({
            count: this.state.count + 1
        },
        () => {
            console.log('callback value', this.state.count) // code executes after state changes
        } 
        )
    */
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    IncrementFive() { // this will execute as a one group
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.IncrementFive()}>Increment</button> 
            </div>
        )
    }
}

export default Counter
