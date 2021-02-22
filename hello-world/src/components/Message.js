import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super() // calling parent or super class constructor
        this.state = {
            message: 'Welcome visitor state'
        }
    }

    changeMessage() {
        
        this.setState({
            message: 'Thank you for Subscribe'
        })
        
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message