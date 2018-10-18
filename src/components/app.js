
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter} from 'react-router-dom';
import Header from './header';
import EntryListPane from './views/entry-list-pane';
import EntryAddPane from './views/entry-add-pane';
import Login from './login';
import PageNotFound from './page-not-found.js'

export default class App extends React.Component {

  componentDidMount() {
    console.log(this.props.data);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Switch>
            {/* <Route exact path="/:entryId" component={ } /> */}
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={LandingPage} />
            <Route exact path="/journal" component={EntryListPane} />
            <Route exact path="/add-entry" component={EntryAddPane} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}


export default withRouter(connect(stateToProps)(App))
