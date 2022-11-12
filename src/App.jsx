import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart/Cart'
//import { CartContext } from './Context/cartContext'

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>

          <Route path='/' element={<ItemListContainer titulo="Full Padel Shop" subtitulo="Bienvenido a Full Padel" />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer titulo="Full Padel Shop" subtitulo="Bienvenido a Full Padel" />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
          
          

      
  )
}
export default App