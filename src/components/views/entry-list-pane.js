
import React from 'react';
import requiresLogin from '../requires-login';
import FilterControls from '../filter-controls';
import EntryList from '../entry-list';
import EntryOptionBar from '../entry-option-bar';

function EntryListPane() {
  return (
    <main>
      <FilterControls />
      <EntryList />
      <EntryOptionBar />
    </main>
  )
}

export default requiresLogin()(EntryListPane);