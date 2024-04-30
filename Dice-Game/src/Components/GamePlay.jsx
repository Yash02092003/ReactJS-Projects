import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import ShowRules from './ShowRules'


const MainContainer = styled.div`
    .top-Section{
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
    }
`
function GamePlay() {
  const [dice , setDice] = useState(1);
  const [selectedNumber , setSelectedNumber] = useState(1);
  const [total , setTotal] = useState(0);
  const [showRules , setShowRules] = useState(false)
  return (
    <MainContainer>
        <div className='top-Section'>
       <TotalScore total = {total} setTotal = {setTotal} selectedNumber = {selectedNumber}  dice = {dice}/>
       <NumberSelector selectedNumber = {selectedNumber} setSelectedNumber = {setSelectedNumber}/>
       </div>
       <RollDice dice = {dice} setDice = {setDice} setTotal = {setTotal} selectedNumber = {selectedNumber} setShowRules = {setShowRules}/>
       {showRules ? <ShowRules/> : null}
    </MainContainer>
  )
}

export default GamePlay