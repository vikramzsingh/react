import React from 'react'

function ListItems(props) {

    const items = props.items
    const listItems = items.map(item => {
        return <div className="list" key="item.key">
            <p>{item.text}</p>
        </div>
    })
    return (
        <div>
            <h1>{listItems}</h1>
        </div>
    )
}

export default ListItems