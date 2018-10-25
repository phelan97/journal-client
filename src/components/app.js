
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import LandingPage from './landing-page';
import Header from './header';
import EntryListPane from './views/entry-list-pane';
import EntryAddPane from './views/entry-add-pane';
import EntryEditPane from './views/entry-edit-pane';
import PageNotFound from './page-not-found.js'
import RegisterForm from './register-form';

export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Header />
            <Switch>
              <Redirect exact from="/" to="/login" />
              <Route exact path="/login" component={LandingPage} />
              <Route exact path="/register" component={RegisterForm} />
              <Route exact path="/journal" component={EntryListPane} />
              <Route exact path="/add-entry" component={EntryAddPane} />
              <Route exact path="/edit-entry" component={EntryEditPane} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}
