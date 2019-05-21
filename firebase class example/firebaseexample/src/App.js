import React from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDYpjyIYGDsvgizafs91Xafkh55g4IFKV8",
  authDomain: "inclassexample-9ee28.firebaseapp.com",
  databaseURL: "https://inclassexample-9ee28.firebaseio.com",
  projectId: "inclassexample-9ee28",
  storageBucket: "inclassexample-9ee28.appspot.com",
  messagingSenderId: "374400377779"
};
firebase.initializeApp(config);

const database = firebase.database();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "stuff"
    };
  }

componentDidMount(){
  const textRef = database.ref('text/');
  textRef.on("value", snapshot => {
    this.setState ({
      text: snapshot.val()
    })
  })
}
writeData = e => { 
  e.preventDefault();
  const textValue = e.target.elements.inputText.value; 
  database.ref('text/').set(textValue, function(error) {
    error ? alert('error') : console.log('it works')})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> {this.state.text} </h1>
          <form onSubmit= {this.writeData}>
            <input type="text" name="inputText" />
            <input type="submit" name="submitButtons" value="Do Stuff" />
          </form>
        </header>
      </div>
    );
  }
}
export default App;
