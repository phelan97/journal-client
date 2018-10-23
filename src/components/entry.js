
import React from 'react';
import {Link} from 'react-router-dom';
import EntryEditPane from './views/entry-edit-pane';
import {deleteEntry, setEditing} from '../actions/user-data';
import store from '../store';
import './entry.css';

export default class Entry extends React.Component {
  handleMouseOver(event) {

  }

  render() {
    return (
      <div className="entry-card"
        onMouseOver={e => e.preventDefault()}
      >
        <span className="entry-date">{this.props.dateStr}</span>
        <span className="entry-preview">{this.props.content}</span>
        <button onClick={() => store.dispatch(setEditing(this.props.id))}>
          <Link to="/edit-entry">Edit</Link>
        </button>
        <button onClick={e => store.dispatch(deleteEntry(this.props.id))}>Delete</button>
      </div>
    );
  }
}