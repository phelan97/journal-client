
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import LandingPage from './views/landing-page';
import Header from './header';
import EntryListPane from './views/entry-list-pane';
import EntryAddPane from './views/entry-add-pane';
import EntryEditPane from './views/entry-edit-pane';
import PageNotFound from './page-not-found.js'
import RegisterForm from './register-form';
import LoginForm from './login-form';

export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Header />
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route exact path="/home" component={LandingPage} />
              <Route exact path="/login" component={LoginForm} />
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
