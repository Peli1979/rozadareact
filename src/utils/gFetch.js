// simulación -> mock

// fetch -> promise
let obj = [
    {id: '1', name: 'PRODUCTO 1', categoria: 'padel',stock: '100',price: '1500',  foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/069/005/products/paleta-padel-royal-madrid-11-2fc8f534bfbf9dc4e315816062178202-1024-1024.jpg'},
    {id: '2', name: 'PRODUCTO 2', categoria: 'padel',stock: '100',price: '1500',  foto:'https://www.hectortenis.com/wp-content/uploads/2021/04/diseno-sin-titulo1181-8dfef7870527fa919516097738068285-1024-1024.png'},
    {id: '3', name: 'PRODUCTO 3', categoria: 'padel',stock: '100',price: '1500',  foto:'https://sportotalar.vtexassets.com/arquivos/ids/305868-800-auto?v=637727683642230000&width=800&height=auto&aspect=true'},
    {id: '4', name: 'PRODUCTO 4', categoria: 'tenis',stock: '100',price: '1500',  foto:'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/256/819/products/raqueta-sx-300-ls-g3-utrvfv043-71-c4ff5a31e62119c33416015728354478-640-0.jpg'},
    {id: '5', name: 'PRODUCTO 5', categoria: 'tenis',stock: '100',price: '1500',  foto:'https://sportingio.vtexassets.com/arquivos/ids/486274/WR055010U3-000-1.jpg?v=1754227612'},
    {id: '6', name: 'PRODUCTO 6', categoria: 'padel',stock: '100',price: '1500',  foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/069/005/products/paleta-padel-royal-madrid-11-2fc8f534bfbf9dc4e315816062178202-1024-1024.jpg'},
    {id: '7', name: 'PRODUCTO 7', categoria: 'padel',stock: '100',price: '1500',  foto:'https://www.hectortenis.com/wp-content/uploads/2021/04/diseno-sin-titulo1181-8dfef7870527fa919516097738068285-1024-1024.png'},
    {id: '8', name: 'PRODUCTO 8', categoria: 'padel',stock: '100',price: '1500',  foto:'https://sportotalar.vtexassets.com/arquivos/ids/305868-800-auto?v=637727683642230000&width=800&height=auto&aspect=true'},
    {id: '9', name: 'PRODUCTO 9', categoria: 'tenis',stock: '100',price: '1500',  foto:'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/256/819/products/raqueta-sx-300-ls-g3-utrvfv043-71-c4ff5a31e62119c33416015728354478-640-0.jpg'},
    {id: '10', name: 'PRODUCTO 10', categoria: 'tenis',stock: '100',price: '1500',foto:'https://sportingio.vtexassets.com/arquivos/ids/486274/WR055010U3-000-1.jpg?v=1754227612'}
]

export const gFetch = (id) => {
    // comporobaciones
    return new Promise( ( resuelto, rechazada ) => {
        // ACCIONES
        setTimeout(()=>{
            resuelto(obj)
        }, 2000)
        // rechazada('promesa rechazada')
    })
    // .catch()
}

    
