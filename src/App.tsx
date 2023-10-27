import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello, CI/CD - v2</h1>
        <div>
        {count}
        </div>
        <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    </>
  )
}

export default App
