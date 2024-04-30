import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin:  auto;
    max-width: 1180px;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
        margin-bottom: 0;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 0;
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

function StartGame({toggle}) {
  return (
    <Container>
        <div>
        <img src="/images/dices 1.png" alt="" />
        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={ () => toggle()}>PLAY NAME</Button>
        </div>
    </Container>
  )
}

export default StartGame