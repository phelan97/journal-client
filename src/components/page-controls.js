
import React from 'react';

export default function PageControls() {
  return (
    <div>
      <button onClick={this.props.onBackClick}>Prev</button>
      <button onClick={this.props.onNextClick}>Next</button>
    </div>
  );
}