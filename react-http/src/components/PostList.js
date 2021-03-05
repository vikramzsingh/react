import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: ''
        }
    }

    callData() {
        const url = "https://jsonplaceholder.typicode.com/posts";

        axios.get(url)
        .then((response) => {
            console.log(response)
            this.setState({ posts: response.data})
        })
        .catch((error) => {
            console.log(error)
            this.setState({ errorMsg: 'Error retriving data'})
        })
        // .finally(() => {
        //     this.setState({ loading: 'false'})
        // })
    } 

    componentDidMount() {
        this.callData();
    }
    
    render() {
        const { posts, errorMsg } = this.state 
        return (
            <div>
                <h1 className="display-3">list of post</h1>
                <div>
                    {
                        posts.length ?
                        posts.map((post) => <div key={post.id}>{post.id} = {post.title}</div>) :
                        null

                    }
                    { errorMsg ? <div>{errorMsg}</div> :null }
                </div>                
            </div>
        )
    }
}

export default PostList
