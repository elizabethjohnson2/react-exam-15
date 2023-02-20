import React from"react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Nav from"./components/includes/Nav";
import Main from"./components/Screens/Main";


function App() {
  return (
  <Router>
    <Nav/> 
    <Routes>
  <Route path="/" element={<Main/>}/>
  </Routes >
  </Router>
  );
  
}

export default App;
