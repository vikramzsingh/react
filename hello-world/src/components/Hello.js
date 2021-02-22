import React from 'react'

// React component with or without JSX
const Hello = () => {
    /*
    return (
        <div className='dummyClass'>
            <h1>Hello Hello js</h1>
        </div>
    )
    */
   
    // JSX technique
    return React.createElement(
        'div', 
        {id: 'helo', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello h1 tag')
    )
}

export default Hello