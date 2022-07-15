import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DetailMovie from '../pages/DetailMovie'
import MyFavorite from '../pages/MyFavorite'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/detail/:movie_id" element={<DetailMovie/>}/>
        <Route path="/favorites" element={<MyFavorite/>}/>
        <Route path="*" element={<div className='error'><h1>404 Error, Page Not Found</h1></div>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}
