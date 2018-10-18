
import React from 'react';
import {Link} from 'react-router-dom';

export default function EntryListOptionBar() {
  return (
    <div>
      {/* FIXME: DOES NOT SAVE THE STATE OF THE ENTRY OR WARN THE USER BEFORE GOING BACK */}
      <button>
        <Link to="/journal">Back</Link>
      </button>
      <button>Delete entry</button>
      <button>Save</button>
      
    </div>
  )
}
