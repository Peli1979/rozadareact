import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  
  return (
      <div className='container'>
          <ItemListContainer titulo="Full Padel Shop" subtitulo="Bienvenido a Full Padel" />
          <NavBar/>
          

      </div>
  )
}
export default App