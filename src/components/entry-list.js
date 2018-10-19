
import React from 'react';
import {connect} from 'react-redux';
import Entry from './entry';
import {fetchProtectedData} from '../actions/user-data';
import './entry-list.css';

class EntryList extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    //const entriesToShow = this.props.data.entries.splice()

    const entries = this.props.data.entries.map(element => {
      const dateStr = new Date(element.date).toLocaleDateString();
      return (
        <li key={element.id}>
          <Entry dateStr={dateStr} content={element.content} id={element.id}/>
        </li>
      );
    });

    return (
      <React.Fragment>
        <ul>
          {entries}
        </ul>
       {/* TODO: move into a generic pagination component? */}
       <div>
         <button>Prev</button>
         <button>Next</button>
       </div>
      </React.Fragment>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
}
export default connect(mapStateToProps)(EntryList);