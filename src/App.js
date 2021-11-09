import React, {useContext, useState} from 'react'
import Timer from "./components/Timer";
import { ContextTime } from './contexts/ContextTime';
import Navbar from './components/Navbar';
import styled from 'styled-components';
function App() {
  const {Which} = useContext(ContextTime)
  // handleWhichValue : switch case which to render to correct value to timer
  // check value of which then switch background color
  return (
    <Container Display={Which}>
      <Navbar />
      <Timer Minutes = {1} />
    </Container>
  );
}
const Container = styled.div`
  background-color: ${props => 
            props.Display === 'pomo' && 'rgb(217, 85, 80)' 
            || props.Display === 'long' && 'rgb(69, 124, 163)' 
            || props.Display === 'short' && 'rgb(76, 145, 149)'
    };
  min-height : 100vh;
  transition: background-color 0.5s ease-in-out 0s;
  width: 100%;
`;
export default App;
