import React, { Component } from 'react'
import Person from './components/person'
import './index.css';
export class App extends Component {

  render() {
    return (
      <div style={{
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform:'translate(-50%,-50%)'}} >
        <p> <Person> </Person></p>
      </div>
      
    )
  }
}

export default App
