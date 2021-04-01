import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    <div className="App">
      <button onClick={this.setMyStorage}>Set My Storage</button>
      <button onClick={this.getMyStorage}>Get My Storage</button>
    </div>
    )
  }

  setMyStorage() {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }

  getMyStorage() {
    var myCookieData = document.cookie.match(new RegExp("(^| )Year=([^;]+)"))[2];
    var myLocalStorageData = localStorage.getItem('Paragon');
    var mySessionStorageData = sessionStorage.getItem('frontend');
    return { myCookieData, myLocalStorageData, mySessionStorageData};
  }
}

export default App;