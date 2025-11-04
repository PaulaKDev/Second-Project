import './App.css'
import ComponenteA from './components/ComponenteA'
import ComponenteB from './components/ComponenteB'
import { useState } from 'react'

function App() {
  const miEmoji = "✈️"
  const miBoton = "Buscar Destino"

  const [mensaje, setMensaje] = useState("Viajes Aventura")

  const handleClick = () => setMensaje("Listo para viajar!")

  return (
    <>
      <div className='box'>
        <ComponenteA emoji={miEmoji} titulo={mensaje} />
        <ComponenteB textoBtn={miBoton} onClick={handleClick} />
      </div>
    </>
  )
}

export default App