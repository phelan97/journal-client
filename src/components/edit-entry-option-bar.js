
import React from 'react';
import {Link} from 'react-router-dom';

export default function AddEntryOptionBar(props) {
  // TODO: prompt about not saving
  return (
    <div className="options-edit-entry">
      <button>
        <Link to="/journal">Back</Link>
      </button>
      <button onClick={props.onDelete}>Delete</button>
      <button onClick={props.onSave}>Save</button>
    </div>
  );
}