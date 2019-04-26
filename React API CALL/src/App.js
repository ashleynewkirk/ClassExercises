import React from 'react';
import './App.css';
import UserForm from "./components/UserForm"; 
import axios from "axios";

class App extends React.Component {
  getUser = (e) => {
    e.preventDefault(); //prevents form from reloading
      const user = e.target.elements.username.value; 
      axios.get(``)
      //console.log(user);
  }
  render() {
  return (
    <div className ="App">
      <header className="App-header">
        <h1 className="App-title">HTTP Requests in React</h1> 
      </header>
      <UserForm getUser ={this.getUser}/>
    </div>
  );
}
}
export default App;
