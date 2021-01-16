import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Friends from './components/Friends';
import Login from './components/Login';
import { PrivateRoute } from './components/PrivateRoute'
import Nav from './components/Nav';
import AddFriend from './components/AddFriend';

function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <PrivateRoute exact path='/friends'>
          <Friends />
        </PrivateRoute>
        <PrivateRoute path='/add-a-friend'>
          <AddFriend />
        </PrivateRoute>
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>

    </div>
  );
}

export default App;
