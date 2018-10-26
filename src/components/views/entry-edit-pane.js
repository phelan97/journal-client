
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import requiresLogin from '../requires-login';
import EntryOptionBar from '../entry-option-bar';
import {deleteEntry, updateEntry} from '../../actions/user-data';
import './entry-edit-pane.css';

// TODO: breaks on refresh. Use localStorage or redirect
class EntryEditPane extends React.Component {

  state = {
    content: ''
  };

  componentDidMount() {
    // redirect back to journal if an entry isn't set (protects reload)
    if(!this.props.entry || !this.props.editId) {
      this.props.history.push('/journal');
    }

    // load entry data
    const entryData = this.props.entry.content;
    this.setState({content: entryData});
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
    return (
      <main>
        <div className="edit-entry-container">
          <textarea onChange={e => this.handleOnChange(e)} value={this.state.content} rows={30}></textarea>
          <EntryOptionBar onSave={() => this.handleSave()} onDelete={() => this.handleDelete()}/>
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