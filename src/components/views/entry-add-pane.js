
import React from 'react';
import EntryListOptionBar from '../entry-list-option-bar';
import './entry-add-pane.css';

export default function EntryListPane() {
  return (
    <main>
      {/* FIXME: configure */}
      <textarea></textarea>
      <EntryListOptionBar />
    </main>
  )
}

// import {reduxForm} from 'redux-form';
// export default reduxForm({
//   form: 'login'
// })(EntryListPane);
