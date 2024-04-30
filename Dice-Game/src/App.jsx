import React from 'react'
import styled from 'styled-components';
import StartGame from './Components/StartGame';
import GamePlay from './Components/GamePlay';
import { useState } from 'react';


function App() {
  const [isGameStarted , setisGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStarted ( (prev) => !prev);
  }
  return (
    <div>
      {
        isGameStarted ? <GamePlay/> : <StartGame toggle = {toggleGamePlay}/>      
      }
    </div>
  )
}

export default App