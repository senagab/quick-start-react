import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";

function App() {

  let estaDeDia = true;

  return(
    <>
      <Perfil nome="megazord" endereco="https://github.com/senagab.png"/>
      <Formulario />
    </>
  )

}

export default App
