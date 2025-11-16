import './App.css'
import ComponenteA from './components/ComponenteA'
import ComponenteB from './components/ComponenteB'
import { useState } from 'react'

function App() {
  const miEmoji = "✈️"
  const miBoton = "Buscar Destino"

  const [mensaje, setMensaje] = useState("Viajes Aventura")

  const handleClick = () => setMensaje("¡Listo para viajar!")

  return (
    <main className="app-container" role="main">
      <article className="travel-card">
        <ComponenteA emoji={miEmoji} titulo={mensaje} />
        <ComponenteB textoBtn={miBoton} onClick={handleClick} />
      </article>
    </main>
  )
}

export default App