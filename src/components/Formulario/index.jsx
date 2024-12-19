import { useState } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            console.log(estadoAnterior); // printa primeiro

            return evento.target.value; // renderiza valor depois
        });
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        console.log(soma)
        console.log(media)

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado!</p>
            )
        } else {
            return (
                <p>Olá {nome}, você foi reprovado.</p>
            )
        }
    }

    return (
        <form action="">
            {/* a barra ao fim da tag input
            dá a entender que não havera conteudo de texto após input */}
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))}/> 
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/> 
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;