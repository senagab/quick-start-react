import './perfil.css'

export default () => { // arrow function anonimo
// export default function() { //function anonimo
    const usuario = {
        nome: 'Gabriel Sena',
        avatar: 'https://github.com/senagab.png'
    }
    
    return (
        <div>
            <img className="perfil-avatar" src={usuario.avatar} alt="" />
            <h3 className="perfil-titulo">{usuario.nome}</h3>
        </div>
    )
}


// export default Perfil;