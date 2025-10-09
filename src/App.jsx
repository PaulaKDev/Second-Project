
import './App.css'
import ComponenteA from './components/ComponenteA'
import ComponenteB from './components/ComponenteB'

function App() {

  const miEmoji = "✈️"
  const miBoton= "Buscar Destino"

  return (
    <>
      <ComponenteA 
      
      emoji ={miEmoji}
      titulo="Viajes Aventura"/>

      <ComponenteB 
      textoBtn={miBoton}/>
    </>
  )
}

export default App
