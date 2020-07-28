import React from 'react';
import logo from './logo.svg';
import './App.css';

import Add from './Component2/testadd'
import Home from './Component2/test'

function App() {
  return (
   <Router>
     <div>
       <Route path="/" exact component={Home} />
       <Route path="/add"  component={Home} />
     </div>
   </Router>
  );
}

export default App;
