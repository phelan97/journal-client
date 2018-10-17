
import React from 'react';
import './entry-list.css';

export default function EntryList() {
  // FIXME:
  const dummyData = [
    {preview: 'Lorem ipsum dolor sit amet', date:'10/12/2018', id:1},
    {preview: 'second post', date:'10/13/2018', id:2},
    {preview: 'third post', date:'10/14/2018', id:3}
  ];
  
  const entries = dummyData.map(element => {
    return (
      <li key={element.id}>
        <div className="entry-card">
          <span className="entry-date">{element.date}</span>
          <span className="entry-preview">{element.preview}</span>
        </div>
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
}
