import React from 'react';

function FilterButtons({ setFilter }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <button onClick={() => setFilter('all')} style={{ marginRight: '5px' }}>All</button>
      <button onClick={() => setFilter('active')} style={{ marginRight: '5px' }}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
}

export default FilterButtons;
