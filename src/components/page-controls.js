
import React from 'react';
import './page-controls.css';

export default function PageControls(props) {
  return (
    <div className="page-controls">
      <button onClick={props.onBackClick}>Prev</button>
      <button onClick={props.onNextClick}>Next</button>
    </div>
  );
}