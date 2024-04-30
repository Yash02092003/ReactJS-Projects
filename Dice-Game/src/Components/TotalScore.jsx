import React, { useEffect } from 'react'
import styled from 'styled-components'


const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1{
    font-size: 72px;
    font-weight: 400;
    margin: 0;
  }
  p {
    margin-top: 0;
    font-size: 24px;
    font-weight: 500;
  }
`
function TotalScore({total}) {
  return (
    <ScoreContainer>
    <h1>{total}</h1>
    <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore