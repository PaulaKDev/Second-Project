
import './App.css'
import ComponenteA from './components/ComponenteA'
import ComponenteB from './components/ComponenteB'

function App() {

  const miEmoji = "✈️"
  const miBoton= "Buscar Destino"

  const handleClick = () => {
        alert("Buscando Destino... componente padre");
    };

  return (
    <>

  <div className='box'>
      <ComponenteA
        emoji ={miEmoji}
        titulo="Viajes Aventura"
      />

      <ComponenteB
        textoBtn={miBoton}
        onClick={handleClick}
        />
      </div>
    </>
  );
}

export default App
