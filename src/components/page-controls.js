
import React from 'react';

export default class PageControls extends React.Component {

  state = {
    currentPage: 0
  }

  handleBack = () => {
    let newPageIndex = this.state.currentPage - 1;
    if(newPageIndex < 0) {
      newPageIndex = 0;
    }
    this.setState({currentPage: newPageIndex});
    this.props.onPageEvent(newPageIndex);
  }
  
  handleNext = () => {
    let newPageIndex = this.state.currentPage + 1;
    if(newPageIndex > this.props.maxPages) {
      newPageIndex = this.props.maxPages;
    }
    this.setState({currentPage: newPageIndex});
    this.props.onPageEvent(newPageIndex);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBack}>Prev</button>
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}