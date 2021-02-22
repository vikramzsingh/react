import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`) // ES6 feature
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>       
            </div>
            // greetHandler(props-par) passed to ChildComponent button. Passmethod as props
        )
    }
}

export default ParentComponent
