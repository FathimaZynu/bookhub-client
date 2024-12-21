import React, { useState } from 'react'
import axios from 'axios'
import './Signup.css'
import { Fetchdata } from '../../axios/Fetchdata'

function Form() {

    let [form,setForm] = useState({
        username: '',
        email: '',
        password: '',
        mobile: ''
    })

    function getData(event){
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    function addUser(event){
        if(!form.username || !form.email || !form.password || !form.mobile){
            return(
                "All fiels are required"
            );
        }
        event.preventDefault()
        Fetchdata.post('/',form).then((res)=>{
           console.log(res);
           
        }).catch((err)=>{
           console.log(err);
           
        }
    )
    }

  return (
    <div className='form-container'>
            <form className='form' onSubmit={addUser}>
            <h2>Sign Up</h2>
                <div className='form-inputs'>
                    <label>Username:</label>
                    <input type="text" name="username" value={form.username} required placeholder='Enter your username'  onChange={getData} />
                </div>
                <div className='form-inputs'> 
                    <label>Email:</label>
                    <input type="email" name="email" value={form.email} required placeholder='Enter your email' onChange={getData}
                    />
                </div>
                <div className='form-inputs'>
                    <label>Password:</label>
                    <input type="password" name="password" required placeholder='Enter your password' value={form.password} onChange={getData} />
                </div>
                <div className='form-inputs'>
                    <label>Mobile:</label>
                    <input type="text" name="mobile" required placeholder='Enter your mobile number' value={form.mobile} onChange={getData} />
                </div>
                <button type="submit" className='submit-btn'>Sign Up</button>
            </form>
    </div>
  )
}

export default Form 