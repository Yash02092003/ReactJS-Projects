import React, { useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
   height: 72px;
   width: 72px;
   border: 1px solid black;
   display: grid;
   place-items: center;
   font-size: 24px;
   font-weight: 700;
   background-color: ${({isSelected}) => ( isSelected ? 'black' : 'white')};
   color: ${({isSelected}) => (isSelected ? "white" : "black")};
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    height: 100%;
    margin-top : 10px;

    .flex{
        display: flex;
        gap: 20px;
    }

    p{
        font-weight: 700;
        font-size: 24px;
    }

`
function NumberSelector({selectedNumber , setSelectedNumber}) {
    const arrayNums = [1 , 2 , 3 , 4 , 5 , 6]
    
  return (
    <Container>
        <div className='flex'>
        {
            arrayNums.map( (item , index , arr) => {
                return <Box isSelected = {item === selectedNumber} key={item} 
                onClick={() => setSelectedNumber(item)}>{item}</Box>
            })
        }
        </div>
        <p>Select Number</p>

    </Container>
  )
}

export default NumberSelector