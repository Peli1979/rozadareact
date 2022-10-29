import CartWidget from "./CartWidget"

const NavBar = () => {

    //variable de estado
    return (
        <div className='container'>
        <CartWidget/>
        <header>
        <nav className="barra-navegacion">
    
        <label for="check-menu" className="boton-menu"><i className='bx bx-menu'></i></label>
        <ul className="lista-menu" >
            <li className="item-menu" ><a clasName="link-menu" href="#">Home</a></li>
            <li className="item-menu" ><a clasName="link-menu" href="#">SobreNosotros</a></li>
            <li className="item-menu" ><a clasName="link-menu" href="#">Paletas de Padel</a></li>
            <li className="item-menu" ><a clasName="link-menu" href="#">Raquetas</a></li>
            <li className="item-menu" ><a clasName="link-menu" href="#">Accesorios Deportivos</a></li>
        </ul>
        </nav>
        </header>
        
        </div>
        
    )
}

export default NavBar