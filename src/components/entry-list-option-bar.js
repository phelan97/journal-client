
import React from 'react';
import {Link} from 'react-router-dom';

export default function EntryListOptionBar() {
  return (
    <div>
      {/* FIXME: DOES NOT SAVE THE STATE OF THE ENTRY OR WARN THE USER BEFORE GOING BACK */}
      {/* TODO: I'm also not sure what this does to browser history */}
      <button>
        <Link to="/home">Back</Link>
      </button>
      <button>Delete entry</button>
      <button>Save</button>
      {/* FIXME: The user needs to be able to go back easily. I'd like to prompt them, seeing if they want to save.
      But functionality still needs to exist, so maybe I can put that into a menu. I'm still not sure how the
      layout will work here. Mobile needs a new screen, but desktop users might have a better experience without
      the redirect. But yeah I'm not sure about where I should put these three buttons */}
    </div>
  )
}