import React, { Component } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vikram'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Vikram'           
            })
        }, 2000);
    }
    
    render() {
        console.log("********************Parent comp render********************")
        return (
            <div className="bg-primary">
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />                 */}
            </div>
        )
    }
}

export default ParentComp
