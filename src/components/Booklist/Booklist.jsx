import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Booklist.css'
import { useNavigate } from 'react-router-dom';
import { Fetchdata } from '../../axios/Fetchdata';
import noImage from '../../assets/images/noImage.jpg'


function Home() {

  let [books, setBooks] = useState([])
  useEffect(() => {
    Fetchdata.get("/books/all").then((result) => {
      console.log(result);
      setBooks(result.data.data)

    }).catch((error) => {
      console.log(error);

    })
  }, [])

  function deleteBook(id) {

    if (confirm('Are you sure?')) {

      Fetchdata.delete(`/books/delete/${id}`).then((res) => {
        console.log(res.data);
        alert('Data deleted successfully')
        setBooks(books.filter((obj) => obj._id !== id))
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  let navigate = useNavigate()
  return (
    
    <div className="book-list">
      <h1>Books</h1>
      <div className='book-container'>
        {books.map((book) => (
          <div key={book._id} className='book-card'>
            <img src={book.imageUrl ? book.imageUrl : noImage} height={'200px'} alt="" />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            
            

            <div className='book-actions'>
              <button onClick={() => { navigate(`/view/${book._id}`) }}>VIEW</button>
              <button className='update' onClick={() => { navigate(`/update/${book._id}`) }}>UPDATE</button>
              <button className='delete' onClick={() => { deleteBook(book._id) }}>DELETE</button>
            </div>

          </div>

        ))}

      </div>
    </div>
  );
}



export default Home