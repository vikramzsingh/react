import React from 'react'

function Colums() {
    const { items } = []
    return (
        <React.Fragment>
            {/* {
                items.map((item) => (
                    <React.Fragment key={key.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}
            <>
            <td>Name</td>
            <td>Vikram</td>
            </>
            <td>Name</td>
            <td>Vikram</td>
        </React.Fragment>
    )
}

export default Colums