import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Fetchdata } from '../../axios/Fetchdata'
import './View.css'
import noImage from '../../assets/images/noImage.jpg'

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
    <div className='view-container'>
        <div className='book-details'>
        <img src={book.imageUrl ? book.imageUrl : noImage} height={'200px'} alt="" />
        <h2>{book.title}</h2>
        <p className='author'>Author : {book.author}</p>
        <p className='description'>Description : {book.description}</p>
        </div>
       
    </div>
  )
}

export default View