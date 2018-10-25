
import React from 'react';
import {Link} from 'react-router-dom';

export default function EntryOptionBar(props) {
  return (
    <div className="entry-option-bar">
      <button name="button-back">
        <Link to="/journal">Back</Link>
      </button>
      <button className="button-delete" onClick={props.onDelete}>Delete</button>
      <button className="button-save" onClick={props.onSave}>Save</button>
    </div>
  );
}