import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchDataOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setpost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(false)
            setpost(response.data)
            setError('')
        })
        .catch((error) => {
            setLoading(false)
            setpost({})
            setError('something went wrong!')
        })
        
    }, [])

    return (
        <div>
            {loading ? 'loding..' : post.title}
            {error ? error : null}
        </div>
    )
}

export default FetchDataOne
