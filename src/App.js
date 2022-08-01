import React, { Component } from 'react';
import './App.css'
import LifeCycleA from './components/LifeCycleA';
class App extends Component {
  


  render() {

    return (
      <div className='App'>
        <h1>Class Component Life Cycle</h1>
        <LifeCycleA/>
      </div>
    );
  }
}

export default App;