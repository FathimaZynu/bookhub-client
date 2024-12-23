import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { Fetchdata } from '../../axios/Fetchdata'

function Login() {
    
    let [user,setUser] = useState({
        email : '',
        password : ''
    })
    
    function getValue(e){
       setUser({
        ...user,
        [e.target.name] : e.target.value
       })
    }

    let navigate = useNavigate()

  function handleSubmit(){
    Fetchdata.post('/login',user).then((res)=>{
          console.log(res);
          localStorage.setItem('token',res.data.token)
          navigate('/home')
    }).catch((err)=>{
        console.log(err);
        
    })
  }

  return (
    <div className='login-container'>
        <form action="" className='login-form'>
        <h2 className='login-heading'>Login</h2>
            <div className='form-field'>
            <label htmlFor="">Email :</label>
            <input type="text" className='form-input' placeholder='Enter your email' name='email' onChange={getValue}/>
            </div>
            <div className='form-field'>
            <label htmlFor="">Password :</label>
            <input type="password" className='form-input' placeholder='Enter your password' name='password' onChange={getValue}/>
            </div>
            <button type='button' className='login-btn' onClick={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login