import React, { Component } from 'react';
import './App.css';
import SearchOrAdd from "./components/SearchOrAdd";
import FamilyTree from "./components/FamilyTree";

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchOrAdd />
      <br />
      <FamilyTree />
      </div>
    );
  }
}

export default App;
