import React  from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Component/Home';
import Registration from './Component/Registration'
import Main from './Component2/Main'


function App() {
  return (
    <div className=''> 
    <Router>
    <Home/>
  
      <Main/>
      </Router>    
    </div>
  );
}
export default App;
