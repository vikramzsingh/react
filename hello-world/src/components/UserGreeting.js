import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true 
        }
    }

    render() {
        return this.state.isLoggedIn && <div>Welcome Vikram</div>

        /*
        // with ternary operator
        return this.state.isLoggedIn ? (// if true
            <div>Welcome Vishwas</div>
        ) : (
            <div>Welcome Guest</div>
        )
        */

        /*
        if (this.state.isLoggedIn) {
            return <div>Welcome Vikram</div>    
        } else {
            return <div>Welcome Guest</div>
        }
        */

        /*
        return (
            <div>
                <div>Welcome Vikram</div>                
                <div>Welcome Guest</div>
            </div>
        )
        */
        
        /*
        let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome Vikram</div>
        } else {
            message = <div>Welcome Guest</div>
        }

        return <div>{message}</div>
        */
    }
}

export default UserGreeting
