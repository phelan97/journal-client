
import React from 'react';
import './filter-controls.css';

export default function FilterControls() {
  return (
    <form>
      <input class="search-field" type="text" />
      <select name="month">
        <option value="january">January</option>
      </select>
      <select name="day">
        <option value="1">1st</option>
      </select>
      <select name="year">
        <option value="2018">2018</option>
      </select>
    </form>
  );
}
