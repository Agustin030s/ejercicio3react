import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo';

function App() {
  const [frase, setFrase] = useState('');

  return (
    <>
        <Titulo frase={frase}></Titulo>
        <button onClick={() => setFrase('(from changed State)')}>
          Clickeame
        </button>
    </>
  )
}

export default App;
