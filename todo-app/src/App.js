import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ListItems from './components/ListItems'
import './ListItems.css'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       currentItem:{
         text:'',
         key:''
       }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault()
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text !==""){
      const newitems = [...this.state.items, newItem];
      this.setState({
        items: newitems,
        currentItem: {
          text:'',
          key:''
        }
      })
    }
  }
  

  render() {
    return (
      <div className="App">
          <header>
            <form id="to-do-form" onSubmit={this.addItem}>
              <input type="text" placeholder="Enter text" value={this.state.currentItem.text} onChange={this.handleInput} />
              <button type="submit">Add</button>
            </form>
          </header>
          <ListItems items={this.state.items}></ListItems>
      </div>
    );
  }
  
}

export default App;
