import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    const [posts, setposts] = useState([])

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/posts"
        axios.get(url)
        .then((res) =>{
            console.log(res)
            setposts(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DataFetching
