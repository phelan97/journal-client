
import React from 'react';
import {connect} from 'react-redux'
import requiresLogin from '../requires-login';
import FilterControls from '../filter-controls';
import PageControls from '../page-controls';
import EntryList from '../entry-list';
import EntryOptionBar from '../entry-option-bar';

class EntryListPane extends React.Component {
  state = {
    searchTerm: "",
    // TODO: try to move this into the page component
    resultsPerPage: 2,
    itemStartIndex: 0
  }

  // TODO: card dimensions aren't uniform so search/navigation looks weird
  handleSearchUpdate = (searchText) => {
    this.setState({searchTerm: searchText, currentPage: 0});
  }

  handlePageChange = (pageNum) => {
    console.log(pageNum);
    this.setState({itemStartIndex: pageNum*this.state.resultsPerPage})
  }

  // TODO: show incomplete entries if data is saved in localStorage
  // TODO: localStorage should be cleared when an entry is posted or updated
  render() {
    const filteredItems = this.props.entries
      .filter(entry => entry.content.includes(this.state.searchTerm));

    const itemStartIndex = this.state.itemStartIndex;
    const resultsPerPage = this.state.resultsPerPage;
    const pageView = filteredItems.splice(itemStartIndex, resultsPerPage);

    return (
      <main>
        <div className="entry-list-container">
          <FilterControls onSearchUpdate={this.handleSearchUpdate}/>
          <EntryList filteredItems={pageView}/>
          <EntryOptionBar  />
          <PageControls onPageEvent={this.handlePageChange} maxPages={Math.floor(this.props.entries.length/this.state.resultsPerPage)} />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  entries: state.data.entries
});
export default requiresLogin()(connect(mapStateToProps)(EntryListPane));