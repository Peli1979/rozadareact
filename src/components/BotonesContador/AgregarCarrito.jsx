import { Link } from "react-router-dom"


export const InputCount= ()=> {

    return (
        <>
            <Link to='/cart' >
                <button 
                    className="btn btn-outline-dark" 
                    onClick={()=>console.log('ir a cart') } 
                >Ir al Cart o Terminar compra</button>
            </Link>
            <Link to='/' >
                <button 
                    className="btn btn-outline-dark" 
                    onClick={()=>console.log('ir al home') } 
                >Seguir comprando</button>
            </Link>
        </>
    )
}



export const ButtonCount= ({handleInter})=> {
    return <button 
                className="btn btn-outline-dark" 
                onClick={handleInter}
                
            >Agregar Al carrito</button>

}