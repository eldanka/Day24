import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>Set Local Storage</button>
        <button onClick={this.getLocalStorage}>Get Local Storage</button>
      </div>
    )
  }

  setLocalStorage() {
    localStorage.setItem('Arena', 'Selection Month');
  } 

  getLocalStorage() {
    var myLocalStorageData = localStorage.getItem('Arena');
    return myLocalStorageData;
  }
}

export default App;
