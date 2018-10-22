
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
    resultsPerPage: 1,
    currentPage: 0,
  }

  // TODO: card dimensions aren't uniform so search looks weird
  handleSearchUpdate = (searchText) => {
    this.setState({searchTerm: searchText, currentPage: 0});
  }

  prevPageHandler = () => {
    console.log('prev clicked');
    let newPageIndex = this.state.currentPage - 1;
    if(newPageIndex < 0) {
      newPageIndex = 0;
    }
    this.setState({currentPage: newPageIndex});
  }

  nextPageHandler = () => {
    console.log('next clicked');
    // TODO: don't allow the current page to go past what's actually possible to display.
    // the last page is likely to be a partial page so that will also need to be handled
    this.setState({currentPage: this.state.currentPage + 1});
  }

  // TODO: show incomplete entries if data is saved in localStorage
  // TODO: localStorage should be cleared when an entry is posted or updated
  render() {
    const filteredItems = this.props.entries
      .filter(entry => entry.content.includes(this.state.searchTerm));

    const resultsPerPage = this.state.resultsPerPage;
    const itemStartIndex = this.state.currentPage * resultsPerPage;// calculate this
    const pageView = filteredItems.splice(itemStartIndex, resultsPerPage);

    return (
      <main>
        <div className="entry-list-container">
          <FilterControls onSearchUpdate={this.handleSearchUpdate}/>
          <EntryList filteredItems={pageView}/>
          <EntryOptionBar  />
          <PageControls onBackClick={() => this.prevPageHandler()} onNextClick={() => this.nextPageHandler()} />
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  entries: state.data.entries
});
export default requiresLogin()(connect(mapStateToProps)(EntryListPane));