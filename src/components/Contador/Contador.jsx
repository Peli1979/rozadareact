import {  useState } from 'react'
import './Contador.css'

const Contador = () => {
    const [valor, setValor] = useState(0)
    

    const sumar = () =>{
        setValor(valor+1)
    }
    
    const restar= () =>{
        setValor(valor-1)
    }
  return (
    <div>
        
        <button onClick={sumar} >+</button>
        {valor}
        <button onClick={restar} >-</button>
        <br></br>
        <button className='btn' >Agregar al Carrito</button>
    </div>
  )
}

export default Contador




 


