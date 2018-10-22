
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import LandingPage from './landing-page';
import Header from './header';
import EntryListPane from './views/entry-list-pane';
import EntryAddPane from './views/entry-add-pane';
import EntryEditPane from './views/entry-edit-pane';
import PageNotFound from './page-not-found.js'
import RegisterForm from './register-form';

export default class App extends React.Component {

  componentDidMount() {
    console.log(this.props.data);
  }

  // TODO: login should redirect to the main page if the user is already logged in
  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            {/* <Route exact path="/:entryId" component={ } /> */}
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={LandingPage} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/journal" component={EntryListPane} />
            <Route exact path="/add-entry" component={EntryAddPane} />
            <Route exact path="/edit-entry" component={EntryEditPane} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
