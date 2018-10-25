
import React from 'react';
import {Link} from 'react-router-dom';
import "./add-entry-button.css";

export default function AddEntryButton() {
  return (
    <div>
      <Link to="add-entry">
        <button className="button-add-entry">
          Add entry
        </button>
      </Link>
    </div>
  )
}