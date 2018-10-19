
import React from 'react';
import {reduxForm} from 'redux-form';
import requiresLogin from '../requires-login';
import AddEntryOptionBar from '../add-entry-option-bar';
import './entry-add-pane.css';
// import {reduxForm} from 'redux-form'

class EntryAddPane extends React.Component {
  render() {
    return (
      <main>
        {/* FIXME: configure */}
        <textarea></textarea>
        <AddEntryOptionBar />
      </main>
    );
  }
}

const options = {
  form: 'post-entry'
};
export default requiresLogin()(reduxForm(options)(EntryAddPane));