import { useState, useEffect } from "react";

const Formulario = (props) => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('o componente iniciou')

        return () => {
            console.log("o componente finalizou")
        }
    }, [props]);

    useEffect(() => {
        console.log('o estado nome mudou')
    }, [nome]);

    useEffect(() => {
        console.log("materia A mudou para " + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        
        setNome(estadoAnterior => {

            return evento.target.value; // renderiza valor depois
        });
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

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