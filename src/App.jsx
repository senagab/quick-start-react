import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";

function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)

  return(
    <>
      <Perfil nome="megazord" endereco="https://github.com/senagab.png"/>

      {formularioEstaVisivel && (
        <Formulario />
      )}
      
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">togle form</button>
    </>
  )

}

export default App
