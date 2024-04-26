import axios from 'axios';
import React, { useEffect, useState } from 'react'

function GitHub() {
    let [gitHub , setgitHub] = useState({});

    useEffect( () => {
        axios.get('https://api.github.com/users/Yash02092003')
        .then( (response)=> {
            setgitHub(response.data);
        })
        .catch( (error) =>{
            console.log("Something Went Wrong" , error);
        })        
    } , [])
  return (
    <div>
        <h1 style={{display : 'flex' , Height : '100px' , justifyContent : 'center' , alignItems : 'center' , gap : '24px' , flex : '1'}}>
            <div style={{height : '100%' , borderRadius : '50%'}}>
            <img style={{height : '50%' , borderRadius : '50%'}} src="data:image/png;base64,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" alt="" />
            </div>
            <p>{gitHub.login}</p>
        </h1>

    </div>
  )
}

export default GitHub