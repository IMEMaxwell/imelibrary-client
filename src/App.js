import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import HomeScreen from "./components/HomeScreen.component";
import CreateBookScreen from "./components/CreateBookScreen.component";
import BorrowScreen from "./components/BorrowScreen.component";
import ReturnScreen from "./components/ReturnScreen.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={HomeScreen}/>
        <Route path="/createbook" component={CreateBookScreen}/>
        <Route path="/borrow/:id" component={BorrowScreen}/>
        <Route path="/return/:id" component={ReturnScreen}/>
      </div>
    </Router>
  );
}

export default App;
