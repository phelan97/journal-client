
import React from 'react';
import {reduxForm} from 'redux-form';
import {addEntry} from '../../actions/user-data';
import requiresLogin from '../requires-login';
import AddEntryOptionBar from '../add-entry-option-bar';
import store from '../../store';
import './entry-add-pane.css';
// import {reduxForm} from 'redux-form'

export default class EntryAddPane extends React.Component {

  state = {content: ''};

  componentDidMount() {
    const content = localStorage.getItem('content');
    if(content) {
      this.setState({content});
    }
  }

  handleOnChange(event) {
    const content = event.target.value;
    localStorage.setItem('content', content);
    this.setState({content});
  }

  
  handleSave = () => {
    const newEntry = {content: this.state.content};
    store.dispatch(addEntry(newEntry));
    localStorage.removeItem('content');
    this.props.history.push('/journal');
  }

  handleDelete = () => {
    localStorage.removeItem('content');
    this.setState({content: ''});
  }

  render() {
    return (
      <main>
        {/* FIXME: configure */}
        <textarea onChange={e => this.handleOnChange(e)} value={this.state.content}></textarea>
        <AddEntryOptionBar onSave={() => this.handleSave()} onDelete={() => this.handleDelete()}/>
      </main>
    );
  }
}

// const options = {
//   form: 'post-entry'
// };
// export default requiresLogin()(reduxForm(options)(EntryAddPane));