
import React from 'react';
import {Link} from 'react-router-dom';

export default function AddEntryButton() {
  return (
    <div>
      <Link to="add-entry">
        <button>
          Add entry
        </button>
      </Link>
    </div>
  )
}