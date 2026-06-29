import React, { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  return (
    <div className="container">
      <h1>Text Mirror Utility</h1>
      <div className="card">
        <input 
          type="text" 
          placeholder="Type something here..." 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <p className="mirror-text">
          <strong>Typed text:</strong> {text || '(Start typing to mirror...)'}
        </p>
      </div>
    </div>
  )
}

export default App
