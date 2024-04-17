import React, { useState, useMemo } from 'react';
import './styles/App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FilterButtons from './FilterButtons';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
      if (filter === 'active') return !todo.completed && matchSearch;
      if (filter === 'completed') return todo.completed && matchSearch;
      return matchSearch;
    });
  }, [todos, filter, searchTerm]);

  return (
    <div className='container'>
      {/* <div className="App"> */}
      <h1>Todo App</h1>
      <AddTodo onAdd={addTodo} />
      <input
      className='bar-style'
        type="text"
        placeholder="Search todos"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <FilterButtons setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleComplete={toggleComplete} />
    </div>
    // </div>
  );
}

export default App;
