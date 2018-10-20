
import React from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import requiresLogin from '../requires-login';
import EditEntryOptionBar from '../edit-entry-option-bar';
import {deleteEntry, updateEntry} from '../../actions/user-data';
import './entry-add-pane.css';

// TODO: breaks on refresh. Use localStorage
class EntryEditPane extends React.Component {

  state = {
    content: '',
    noEntryError: false
  };
  
  componentWillMount() {
    if(!this.props.entry || !this.props.editId) {
      this.setState({noEntryError: true});
    }
  }

  componentDidMount() {
    const entryData = this.props.entry.content
    if(entryData) {
      this.setState({content: entryData});
    }
  }

  handleOnChange(event) {
    const content = event.target.value;
    this.setState({content});
  }

  handleSave = () => {
    console.log('save clicked');
    // save state content to server
    this.props.dispatch(updateEntry(this.props.editId, this.state.content))
  }

  handleDelete = () => {
    // TODO: confirm delete with the user
    this.props.dispatch(deleteEntry(this.props.editId))
    this.props.history.push('/journal');
  }

  render() {
    // FIXME: better message
    if(this.state.noEntryError) {
      return (
        <main>
          <div>Could not locate entry</div>
          <Link to="/journal">Back</Link>
        </main>
      );
    }
    return (
      <main>
        <textarea onChange={e => this.handleOnChange(e)} value={this.state.content}></textarea>
        <EditEntryOptionBar onSave={() => this.handleSave()} onDelete={() => this.handleDelete()}/>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  editId: state.data.editId,
  entry: state.data.entries.find(entry => entry.id === state.data.editId)
});
export default connect(mapStateToProps)(EntryEditPane);