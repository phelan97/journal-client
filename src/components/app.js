
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Header from './header';
import EntryListPane from './views/entry-list-pane';
import EntryAddPane from './views/entry-add-pane';

export default class App extends React.Component {

  // TODO: root should redirect to a login screen, which then redirects to /home on auth (once auth is added)

  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            {/* <Route exact path="/:entryId" component={ } /> */}
            {/* TODO: are multiple redirects ok to put here? does switch break on a redirect? */}
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={EntryListPane} />
            <Route exact path="/add-entry" component={EntryAddPane} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}