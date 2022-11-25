import { useState } from "react";
import { ButtonCount, InputCount } from "./AgregarCarrito";






const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }

    
    
    return (
        <div>
            
            
            {
                inputType === 'button' ? 
                    <ButtonCount  handleInter={handleInter} />
                : 
                    <InputCount />
            }
             {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
        </div>
    )
}

export default Intercambiabilidad