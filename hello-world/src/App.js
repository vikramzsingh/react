import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet, Reet } from './components/Greet' // we can omit .js extension
import {Welcome} from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctonClick from './components/FunctonClick';
import ClassCliickNew from './components/ClassCliickNew';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';

class App extends Component {
    render() { 
        return ( 
            <div className = "App">
               <Greet></Greet> 
                <Reet> </Reet> 
                
                <Welcome></Welcome>
                
                <Hello></Hello>
                
                <Greet name="App" heroName="Batman">
                    <p>This is childern props</p>
                </Greet> 
                <Greet name="Clark" heroName="Wonder Women">
                    <button>Action</button>
                </Greet>
                <Greet name="Bruce" heroName="Jack Sparrow"></Greet>

                <Welcome name="App" heroName="Batman"></Welcome>
                <Welcome name="Clark" heroName="Wonder Women"></Welcome>
                <Welcome name="Bruce" heroName="Jack Sparrow"></Welcome>
                
                <Message></Message>

                <Counter></Counter>

                <FunctonClick></FunctonClick>

                <ClassCliickNew></ClassCliickNew>

                <EventBind></EventBind>
             

              <ParentComponent></ParentComponent>

              <UserGreeting></UserGreeting>

              <NameList></NameList>

              <Stylesheets primary={true}></Stylesheets>
              
              <Inline></Inline>

              <h1 className='error'>Error</h1>
              <h1 className={styles.success}>Success</h1>

              <Form></Form>

              <LifeCycleA></LifeCycleA>
              
            </div>
        );
    }
}
export default App; 