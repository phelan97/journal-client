
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import requiresLogin from '../requires-login';
import EditEntryOptionBar from '../edit-entry-option-bar';
import {deleteEntry, updateEntry} from '../../actions/user-data';
import './entry-edit-pane.css';

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
    this.props.dispatch(updateEntry(this.props.editId, this.state.content));
    this.props.history.push('/journal');
  }

  handleDelete = () => {
    // TODO: confirm delete with the user
    this.props.dispatch(deleteEntry(this.props.editId))
    this.props.history.push('/journal');
  }

  render() {
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
        <div className="edit-entry-container">
          <textarea onChange={e => this.handleOnChange(e)} value={this.state.content} rows={40}></textarea>
          <EditEntryOptionBar onSave={() => this.handleSave()} onDelete={() => this.handleDelete()}/>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  editId: state.data.editId,
  entry: state.data.entries.find(entry => entry.id === state.data.editId)
});
export default requiresLogin()(connect(mapStateToProps)(EntryEditPane));