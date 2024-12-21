import axios from 'axios'
import React, { useState } from 'react'
import './AddBook.css'
import { Fetchdata } from '../../axios/Fetchdata'


function AddBook() {

    let [form,setForm]=useState({
        title:"",
        author:"",
        description:""
    })

    let [image,setImage] = useState()

    function getImage(e){
        setImage(e.target.files[0])
    }
    function getData(event){
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    function addBook(event){
        if(!form.title || !form.author || !form.description){
            return(
                "All fiels are required"
            );
        }
        event.preventDefault()
        const formData = new FormData();
        formData.append('image',image)
        formData.append('title',form.title)
        formData.append('author',form.author)
        formData.append('description',form.description)
        Fetchdata.post('/books/',formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }).then((res)=>{
           console.log(res);
           
        }).catch((err)=>{
           console.log(err);
           
        }
    )
    }
  return (
   <div className='form-container'>
     <div className='add-book'>
        <h2>Add New Book</h2>
        <form action="">
            <input type="text" name='title' placeholder='Title' onChange={getData}/>
            <input type="text" name='author' placeholder='Author' onChange={getData}/>
            <input type="text" name='description' placeholder='Description' onChange={getData}/>
            <input type="file" onChange={getImage} />

            <button onClick={addBook}>ADD</button>
        </form>
        
    </div>
   </div>
  )
}

export default AddBook