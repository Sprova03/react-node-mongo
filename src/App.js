import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/component/Navigation/MainNavigation';
import User from './user/pages/User';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path={'/'} exact>
            <User />
          </Route>
          <Route path={'/places/new'} exact>
            <NewPlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
