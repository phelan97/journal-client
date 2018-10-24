
import React from 'react';
import {Link} from 'react-router-dom';

export default function AddEntryOptionBar(props) {
  return (
    <div className="options-add-entry">
      <button>
        <Link to="/journal">Back</Link>
      </button>
      <button onClick={props.onDelete}>Delete</button>
      <button onClick={props.onSave}>Save</button>
    </div>
  );
}