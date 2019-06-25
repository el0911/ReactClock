import React from 'react';
import logo from './logo.svg';
import Somto from '../src/components/somto'
import Clock from './components/clock'
import './App.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import Accordion from 'react-bootstrap/Accordion'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      date:new Date(),
      name:'somto',
      country:'Nigeria'
    }
  }

  render(){
    return(
      <div className='App-header'>
      <Clock></Clock>
      </div>
      )
  }
}


export default App;
