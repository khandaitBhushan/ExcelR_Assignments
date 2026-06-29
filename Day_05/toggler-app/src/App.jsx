import React, { useState } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="container">
      <h1>Visibility Toggler</h1>
      <div className="card">
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? 'Hide Message' : 'Show Message'}
        </button>
        {isVisible && (
          <p className="toggle-text">Hello! This is a simple message toggled by state.</p>
        )}
      </div>
    </div>
  )
}

export default App
