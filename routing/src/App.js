//routing is when you point at a URL 
//single page application (SPA)

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

const NewRoute = () => {
  return (
    <div>
      New Route 
    </div>
  );
}
class App extends React.Component {
 
   render(){
     return(
       <BrowserRouter>
       <Navigation/>
       <Switch>
       <Route path ='/' component ={Home} exact />
       <Route path ='/about' component ={About} />
       <Route path ='/contact' component ={Contact} />
       <Route component={Error}/>
       </Switch>
       </BrowserRouter>

     )
   } 
}
export default App; 