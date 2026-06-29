import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputText.trim(),
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-container">
      <header className="todo-header">
        <h1>Task Master</h1>
        <p className="subtitle">Manage your daily tasks easily</p>
      </header>

      <form onSubmit={handleAddTodo} className="todo-input-form">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
          id="todo-input-field"
        />
        <button type="submit" className="add-btn">Add</button>
      </form>

      <div className="filter-bar">
        <div className="filter-buttons">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
        <span className="items-left">{activeCount} items left</span>
      </div>

      <ul className="todo-list">
        {filteredTodos.length === 0 ? (
          <li className="no-todos">No tasks to display</li>
        ) : (
          filteredTodos.map((todo) => (
            <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
              <div className="todo-item-left">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span className="todo-text">{todo.text}</span>
              </div>
              <button
                type="button"
                onClick={() => handleDeleteTodo(todo.id)}
                className="delete-btn"
                aria-label={`Delete task ${todo.text}`}
              >
                ✕
              </button>
            </li>
          ))
        )}
      </ul>

      {todos.some((todo) => todo.completed) && (
        <div className="todo-footer">
          <button onClick={handleClearCompleted} className="clear-btn">
            Clear Completed
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
