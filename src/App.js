import React from"react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Nav from"./components/includes/Nav";
import Demo from "./components/Screens/Demo";
import Main from"./components/Screens/Main";


function App() {
  return (
  <Router>
    
    <Routes>
  <Route path="/" element={<Demo/>}/>
  </Routes >
  </Router>
  );
  
}

export default App;
