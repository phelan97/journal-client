
import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addEntry} from '../actions/user-data';

class AddEntryOptionBar extends React.Component {
  render() {
    // if(this.state.toJournal) {

    // }
    const newEntry = {content: 'hardcoded entry'};
    return (
      <div>
        {/* FIXME: doesn't save user state when the back button is clicked */}
        <button>
          <Link to="/journal">Back</Link>
        </button>
        <button onClick={() => {
          this.props.dispatch(addEntry(newEntry));
          this.props.history.push('/journal');
        }}>Save</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  //content:
  dispatch: state.dispatch

});
export default withRouter(connect(mapStateToProps)(AddEntryOptionBar));
