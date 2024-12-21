import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Fetchdata } from '../../axios/Fetchdata'

function View() {

    let {id} = useParams()

    let [book,setBook] = useState('')
     
    let navigate = useNavigate()

    useEffect(()=>{
        Fetchdata.get(`/books?id=${id}`).then((res)=>{
            console.log(res.data);
            setBook(res.data.data)
        }).catch((err)=>{
            console.log(err);
            
        })
    },[])


  return (
    <div>
        <h2>{book.title}</h2>
        <p>Author : {book.author}</p>
        <p>Description : {book.description}</p>
    </div>
  )
}

export default View