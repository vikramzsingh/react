import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassMouse from './components/ClassMouse';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import HookuseEffect from './components/HookuseEffect';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter> */}
      {/* <HookCounter></HookCounter> */}
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounterThree></HookCounterThree> */}
      {/* <HookCounterFour></HookCounterFour> */}
      {/* <HookuseEffect></HookuseEffect> */}
      {/* <ClassMouse></ClassMouse> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer /> */}
      <IntervalClassCounter></IntervalClassCounter>
      <IntervalHookCounter/>
    </div>
  );
}

export default App;
