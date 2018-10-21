
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
    console.log('data from filteredItems:', this.props.filteredItems);
    
    const entriesToRender = this.props.filteredItems.map(element => {
      const dateStr = new Date(element.date).toLocaleDateString();
        return (
          <li key={element.id}>
            <Entry dateStr={dateStr} content={element.content} id={element.id} />
          </li>
        );
    });

    console.log('data from entriesToRender:', entriesToRender);

    return (
      <React.Fragment>
        <ul>
          {entriesToRender}
        </ul>
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