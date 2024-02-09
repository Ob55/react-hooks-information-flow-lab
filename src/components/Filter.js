import React from 'react';

function Filter({ category, onCategoryChange }) {
  function handleChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <div>
      <label htmlFor="category">Filter by category:</label>
      <select id="category" value={category} onChange={handleChange}>
        <option value="all">All</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
        <option value="dairy">Dairy</option>
      </select>
    </div>
  );
}

export default Filter;
