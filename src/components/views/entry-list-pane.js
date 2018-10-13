
import React from 'react';
import FilterControls from '../filter-controls';
import EntryList from '../entry-list';
import EntryOptionBar from '../entry-option-bar';

export default function EntryListPane() {
  return (
    <main>
      <FilterControls />
      <EntryList />
      <EntryOptionBar />
    </main>
  )
}