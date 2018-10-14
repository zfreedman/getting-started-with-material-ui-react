import React, { Component } from 'react';

import CourseList from "./CourseList";
import Navbar from "./Navbar";

import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CourseList />
      </div>
    );
  }
}

export default App;
