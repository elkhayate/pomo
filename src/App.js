import React, {useContext, useState} from 'react'
import Timer from "./components/Timer";
import { ContextTime } from './contexts/ContextTime';
import Navbar from './components/Navbar';

function App() {
  
  // handleWhichValue : switch case which to render to correct value to timer
  // check value of which then switch background color
  return (
    <div className="App" style={{backgroundColor : '#d95550'}}>
      <Navbar />
      <Timer Minutes = {1} />
    </div>
  );
}

export default App;
