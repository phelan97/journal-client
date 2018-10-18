
import React from 'react';
import {deleteEntry} from '../actions/user-data';
import store from '../store';

export default function Entry(props) {
    return (
      <div className="entry-card" onClick={e => {
        store.dispatch(deleteEntry(props.id))
      }}>
        <span className="entry-date">{props.dateStr}</span>
        <span className="entry-preview">{props.content}</span>
      </div>
    );
}