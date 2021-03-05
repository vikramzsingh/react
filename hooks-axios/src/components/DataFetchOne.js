import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchOne() {

    const [post, setpost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) =>{
            console.log(res)
            setpost(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [idFromButtonClick])

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button type="submit" onClick={handleClick}>Fetch post</button>
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetchOne
