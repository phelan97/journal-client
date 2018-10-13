
import React from 'react';
import {Link} from 'react-router-dom';

export default function EntryListOptionBar() {
  return (
    <div>
      <button>
        <Link to="add-entry">Add entry</Link>
      </button>
    </div>
  )
}