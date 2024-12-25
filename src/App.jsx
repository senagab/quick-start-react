import { useState } from "react";

import Perfil from "./components/Perfil";
// import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList/ReposListIndex";

function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)

  return(
    <>
      <Perfil nomeUsuario="senagab"/>
      <ReposList />
      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">togle form</button> */}
    </>
  )

}

export default App
