
import React from 'react';
import { fetchProtectedData, setSearchFilter } from '../actions/user-data';
import './filter-controls.css';
import store from '../store';

export default class FilterControls extends React.Component {

  render() {
    return (
      <form>
        <legend>Search</legend>
        <input id="search-field" type="text" onChange={e => this.props.onSearchUpdate(e.target.value)}/>
        {/* <select name="month">
          <option value="january">January</option>
        </select>
        <select name="day">
          <option value="1">1st</option>
        </select>
        <select name="year">
          <option value="2018">2018</option>
        </select> */}
      </form>
    );
  }
}
