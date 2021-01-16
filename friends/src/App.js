import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Friends from './components/Friends';
import Login from './components/Login';
import { PrivateRoute } from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path='/protected'>
          <Friends />
        </PrivateRoute>
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>

    </div>
  );
}

export default App;
