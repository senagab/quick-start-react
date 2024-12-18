function App() {
  const nome = "Gabriel"

  function retornaNome() {
    return nome
  }

  const pessoa = {
    nome: "Maria"
  }

  let estaDeDia = true;

  return(
    <>
      <h1>Olá, {pessoa.nome}</h1>
      <h2>Subtitulo</h2>
      {estaDeDia ? 'Bom dia' : 'Boa noite'}
    </>
  )

}

export default App
