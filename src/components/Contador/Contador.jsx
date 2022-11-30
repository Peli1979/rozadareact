import {  useState } from 'react'

import './Contador.css'


const Contador = ({initial=1, stock=100, onAdd}) => {
    const [valor, setValor] = useState(initial)
   

   
   

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
      
  }

  return (
    <div>
        
        <button onClick={restar} >-</button>
        {valor}
        <button onClick={sumar} >+</button>
        <br></br>
        {
                
                <button className='btn btn-outline-primary' onClick={agregarCantidad} >Agregar al carrito</button>
                    
        }

        
    </div>
  )
}

export default Contador




 


