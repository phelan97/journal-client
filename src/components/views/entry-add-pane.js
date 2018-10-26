
import React from 'react';
import {addEntry} from '../../actions/user-data';
import requiresLogin from '../requires-login';
import EntryOptionBar from '../entry-option-bar';
import store from '../../store';
import './entry-add-pane.css';
// import {reduxForm} from 'redux-form'

class EntryAddPane extends React.Component {

  state = {
    content: '',
    placeholders: [
      "How's today going?",
      "Write something about your day!",
      "What are you thinking about right now?",
      "How are you feeling today?",
      "Any news?"
    ],
    placeholderIndex: 0
  };

  componentDidMount() {
    const content = localStorage.getItem('content');
    if(content) {
      this.setState({content});
    } else {
      const placeholderIndex = Math.floor(Math.random() * this.state.placeholders.length);
      this.setState({placeholderIndex})
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
        <div className="add-entry-container">
          <textarea onChange={e => this.handleOnChange(e)} value={this.state.content} rows={30} placeholder={this.state.placeholders[this.state.placeholderIndex]}></textarea>
          <EntryOptionBar onSave={() => this.handleSave()} onDelete={() => this.handleDelete()}/>
        </div>
      </main>
    );
  }
}

export default requiresLogin()(EntryAddPane);