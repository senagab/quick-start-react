import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('')

    useEffect(() => {
        console.log('O componente iniciou');

        return () => {
            console.log('O componente finalizou');
        }
    }, [])

    useEffect(() => {
        console.log('O estado mudou');
    }, [nome])

    useEffect(() => {
        console.log('materia A mudou para: ' + materiaA)
    }, [materiaA, materiaB, materiaC])

    const renderizaResultado = () => {
        const soma = parseInt(materiaA) + parseInt(materiaB) + parseInt(materiaC);
        const media = soma/3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    const alteraNome = (evento) => {

        // setNome(evento.target.value)

        setNome(estadoAnterior => {

            return evento.target.value
        })
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(target.value)} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(evento.target.value)} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(evento.target.value)} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;