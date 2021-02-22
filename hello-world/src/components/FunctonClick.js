import React from 'react'

export default function FunctonClick() {
    
    function clickHandler() {
        console.log('Button clicked')
    }
    // leave paranthesis to clickHandler, because we want handler not function call
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
