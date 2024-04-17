import React, { useState } from 'react';

function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
      <input
        className="bar-style"
        type="text"
        placeholder="Add new todos"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button className='btn-style' type="submit" style={{ padding: '5px 10px' }}>Add</button>
    </form>
  );
}

export default AddTodo;
