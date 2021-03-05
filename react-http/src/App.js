import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import PostList from './components/PostList';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import PostForm from './components/PostForm';

class App extends Component {
  render () {
    return (
      <div className="App">
        {/* <PostList /> */} 
        <PostForm></PostForm>
      </div>
    );
  }
}

export default App;
