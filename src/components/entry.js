
import React from 'react';
import {Link} from 'react-router-dom';
import {deleteEntry, setEditing} from '../actions/user-data';
import store from '../store';
import './entry.css';

export default class Entry extends React.Component {
  render() {
    return (
      <div className="entry-card"
        onMouseOver={e => e.preventDefault()}
      >
        <span className="entry-date">{this.props.dateStr}</span>
        <span className="entry-preview">{this.props.content}</span>
        <div className="entry-buttons">
          <Link to="/edit-entry">
            <button className="button-edit" onClick={() => store.dispatch(setEditing(this.props.id))}>
              Edit
            </button>
          </Link>
          <button className="button-delete" onClick={e => store.dispatch(deleteEntry(this.props.id))}>Delete</button>
        </div>
      </div>
    );
  }
}