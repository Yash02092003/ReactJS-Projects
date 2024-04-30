import React, { useState } from 'react'
import styled from 'styled-components'

const Dice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    .die{
        cursor: pointer;
    }

    .Button{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`
const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    align-items: center;
    padding: 10px 18px;
    min-width: 220px;
    height: 44px;
    background: #000000;
    border-radius: 5px;
    border: none;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;
    transition-delay: 0.4s;
    cursor: pointer;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
    }
`

function RollDice({dice , setDice , setTotal , selectedNumber , setShowRules}) {

    const chnage = () => {
        let num = Math.floor(Math.random() * 6) + 1;
        setDice(num)
        if(selectedNumber === dice){
            setTotal( (prevtotal) => prevtotal + dice);
        }
        else{
            setTotal( (prevtotal) => prevtotal - dice);
        }
    }
  return (
    <Dice>
        <div className='die'>
        <img src={`/dices/dice_${dice}.png`} alt="" onClick={chnage}/>
        </div>
        <p>CLICK ON THE DICE TO ROLL</p>
        <div className='Button'>
            <Button onClick={ () => {setTotal(0)}}>RESET SCORE</Button>
            <Button onClick={ () => setShowRules( (rules) => !rules)}>SHOW RULES</Button>
        </div>
    </Dice>
  )
}

export default RollDice