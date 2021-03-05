import './App.css';
import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


class App extends Component {
  
  render() { 
    return (
      <div className="App">
            <div class="container">
	            <form class="was-validated">
    
    	          <div class="form-group">
                  <label for="uname">Username</label>
 		              <input type="text" id="t1" class="form-control" required />
                  <div class="valid-feedback">looks good</div>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
                  
                <div class="form-group">
                  <label for="password">Password</label>
 		              <input type="text" id="t1" class="form-control" required />
                  <div class="valid-feedback">looks good</div>
                  <div class="invalid-feedback">Please fill out this field</div>
                </div>
        
                <input type="button" value="Login" class="btn btn-success btn-block" />

              </form>
            </div>
      </div>      
    );
  }
}

export default App;
