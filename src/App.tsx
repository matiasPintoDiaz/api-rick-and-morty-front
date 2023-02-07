import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [character, setCharacter] = useState()

  return (
    <div className="App">
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <h1>Rick & Morty</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          Previous Character
        </button>
        <p className='character'>Personaje número: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Next Character
        </button>
      </div>
    </div>
  )
}

export default App
