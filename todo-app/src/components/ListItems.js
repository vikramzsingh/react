import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItems(props) {

    const items = props.items
    const listItems = items.map(item => {
        return <div className="list" key="item.key">
            <p>{item.text}
            <span>
                <FontAwesomeIcon className="faicons" icon='trash' onClick={ () => props.deleteItem(items.key)}></FontAwesomeIcon>
            </span>
            </p>
        </div>
    })
    return (
        <div>
            <h1>{listItems}</h1>
        </div>
    )
}

export default ListItems