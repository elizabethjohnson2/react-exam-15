import React from"react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Nav from"./components/includes/Nav";
import NavBar from "./components/includes/NavBar";


function App() {
  return (
  <Router>
    <Nav/>
    <NavBar/>
    
    <Routes>
  <Route/>
  </Routes>
  </Router>
  );
  
}

export default App;
