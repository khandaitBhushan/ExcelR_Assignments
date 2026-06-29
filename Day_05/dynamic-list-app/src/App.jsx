import React, { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState(['Buy groceries', 'Walk the dog', 'Read a book'])
  const [inputValue, setInputValue] = useState('')

  const handleAddItem = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') return
    setItems([...items, inputValue.trim()])
    setInputValue('')
  }

  const handleDeleteItem = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete))
  }

  return (
    <div className="container">
      <h1>Dynamic List</h1>
      <div className="card">
        <form onSubmit={handleAddItem} className="input-group">
          <input 
            type="text" 
            placeholder="Add a new item..." 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <button type="submit">Add</button>
        </form>
        
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="item-row">
              <span>{item}</span>
              <button 
                onClick={() => handleDeleteItem(index)} 
                className="delete-btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        {items.length === 0 && <p className="empty-message">No items in the list!</p>}
      </div>
    </div>
  )
}

export default App
