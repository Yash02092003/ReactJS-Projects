import React from 'react'
import styled from 'styled-components'
const Rules = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 500px;
    background-color: #FBF1F1;
    margin: 10px auto;
    justify-content: center;

    ul {
        list-style: none;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;

    }
    h1 {
        text-align: center;
        width: 100%;
    }

    li{
        width: 90%;
    }
`
function ShowRules() {
  return (
    <Rules>
        <h1>How to Play Dice Game</h1>
        <ul>
            <li>1 . Select any Number</li>
            <li>2 . Click on dice to roll</li>
            <li>3 . After Clicking on dice if selected number is equal to dice number you will get same point as on dice</li>
            <li>4 . If selected number and dice number does not matches same amount of points will be deducted</li>
        </ul>
    </Rules>
  )
}

export default ShowRules