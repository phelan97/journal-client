
import React from 'react';
import { fetchProtectedData, setSearchFilter } from '../actions/user-data';
import './filter-controls.css';
import store from '../store';

export default class FilterControls extends React.Component {
  handleFilter(event) {
    console.log('input changed');
    // FIXME: change to setLocalFilter? everything should already be loaded
    store.dispatch(setSearchFilter(event.target.value))
  }

  // TODO: use redux form or is it overkill?
  render() {
    return (
      <form>
        <legend>Search</legend>
        <input id="search-field" type="text" onChange={e => this.handleFilter(e)}/>
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
