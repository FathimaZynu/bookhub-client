import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Booklist/Booklist'
import AddBook from './components/AddBook/AddBook'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Update from './components/Update/Update'
import View from './components/View/View'
import Navbar from './components/Navbar/Navbar'
import Booklist from './components/Booklist/Booklist'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/book-list' element={<Booklist/>}/>
        <Route path='/addbook' element={<AddBook/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App