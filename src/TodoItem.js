import React from 'react';

function TodoItem({ todo, toggleComplete }) {
  return (
    <li style={{ marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        style={{ marginRight: '10px' }}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </li>
  );
}

export default TodoItem;
