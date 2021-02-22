import React from 'react'

function ChildComponent(props) { // recieved greetParant as a props parameter, which is assigned as greetHandle para
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent