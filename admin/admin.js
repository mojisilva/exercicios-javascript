const usuarios = new Map()
    
usuarios.set('Luis', 'Admin')
usuarios.set('João', 'Zelador')
usuarios.set('Eliene', "TI")
usuarios.set('Carla','Admin')
usuarios.set('Fernanda', 'Admin')        
        
function getAdmin(usuarios) {
    let u = []
    for([key, value] of usuarios){
        if( value === 'Admin'){
            u.push(key)
        }
    }
    return u;
}
console.log(getAdmin(usuarios))