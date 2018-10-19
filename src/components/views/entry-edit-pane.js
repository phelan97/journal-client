
import React from 'react';
import {reduxForm} from 'redux-form';
import requiresLogin from '../requires-login';
import AddEntryOptionBar from '../add-entry-option-bar';
import './entry-add-pane.css';
import store from '../../store';

// import {reduxForm} from 'redux-form'

export default class EntryAddPane extends React.Component {

  state = {content: ''};
  
  handleOnChange(event) {
    const content = event.target.value;
    this.setState({content});
  }

  handleSave = () => {
    console.log('save clicked');

  }

  handleDelete = () => {
    console.log('delete clicked');

  }

  render() {
    return (
      <main>
        <textarea onChange={e => this.handleOnChange(e)} value={this.state.content}></textarea>
        <AddEntryOptionBar onSave={() => this.handleSave()} onDelete={() => this.handleDelete()}/>
      </main>
    );
  }
}