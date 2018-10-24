
import React from 'react';
import './filter-controls.css';

export default class FilterControls extends React.Component {

  render() {
    return (
      <form>
        <legend>Search</legend>
        <input id="search-field" type="text" onChange={e => this.props.onSearchUpdate(e.target.value)}/>
      </form>
    );
  }
}
