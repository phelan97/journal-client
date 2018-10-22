
import React from 'react';

export default function PageControls(props) {
  return (
    <div>
      <button onClick={props.onBackClick}>Prev</button>
      <button onClick={props.onNextClick}>Next</button>
    </div>
  );
}