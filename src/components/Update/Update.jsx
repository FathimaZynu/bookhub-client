import React, { useEffect, useState } from 'react'
import './Update.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Fetchdata } from '../../axios/Fetchdata'

function Update() {

    let {id} = useParams()

    let [form, setForm] = useState({
        title: '',
        author: '',
        description: ''
    })

    useEffect(()=>{
        Fetchdata.get(`/book?id=${id}`).then((res)=>{
               console.log(res.data);
               setForm({...res.data})
        }).catch((err)=>{
               console.log(err);
               
        })
    },[])

    function getValue(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    let navigate = useNavigate()
 
    function handleSubmit(event) {
        event.preventDefault();
        Fetchdata.put(`/books/update/${id}`, form).then((res) => {
            console.log(res.data);
            alert(res.data)
            navigate('/')
        }).catch((err) => {
            console.log(err);

        })
    }


    return (
        <div className='update-container'>
            <h2>Update Book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={form.title} name='title' placeholder='Title' onChange={getValue} />
                <input type="text" value={form.author} name='author' placeholder='Author' onChange={getValue} />
                <input type="text" value={form.description} name='description' placeholder='Description' onChange={getValue} />

                <h1>Title: {form.title}</h1>
                <h1>Author: {form.author}</h1>
                <h1>Decription: {form.description}</h1>
                <button type='submit'>UPDATE</button>
            </form>
        </div>
    )
}

export default Update