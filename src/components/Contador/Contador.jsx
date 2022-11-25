import {  useState } from 'react'
import Intercambiabilidad from '../BotonesContador/Intercambiabilidad'
import './Contador.css'
import { InputCount } from '../BotonesContador/AgregarCarrito'

const Contador = ({initial=1, stock=100, onAdd}) => {
    const [valor, setValor] = useState(initial)
    const [inputType, setInputType ] = useState('button')

   
   

    const sumar = () =>{
      if(valor<stock){

        setValor(valor+1)
      }
    }
    
    const restar= () =>{
      if (valor>1)
       { 
        setValor(valor-1)}
    }
    const agregarCantidad = () =>{
      onAdd(valor)
      setInputType('input')
  }

  return (
    <div>
        
        <button onClick={restar} >-</button>
        {valor}
        <button onClick={sumar} >+</button>
        <br></br>
        {
                inputType === 'button' ? 
                <button className='btn btn-outline-primary' onClick={agregarCantidad} >Agregar al carrito</button>
                    
                : 
                    <InputCount />
            } 

        
    </div>
  )
}

export default Contador




 


