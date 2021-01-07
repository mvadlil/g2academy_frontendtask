import React, { Component } from 'react';
import Education from './education';
import Experience from './experience';
import Jumbotron from './jumbotron';
import Contact from './contact';
import './style.css';
import Line from './line';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <>
        <Jumbotron />
        <Experience />
        <Line />
        <Education />
        <Line />
        <Contact />
      </>
    );
  }
}
 
export default App;

