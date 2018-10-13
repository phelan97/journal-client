
import React from 'react';

export default function EntryList() {
  // FIXME:
  const dummyData = ['a', 'b', 'c'];
  // TODO missing keys
  const entries = dummyData.map(element => <li><div>element</div></li>);
  return (
    <React.Fragment>
      <h2>Entry list</h2>
      <ul>
        {entries}
      </ul>
    </React.Fragment>
  );
}