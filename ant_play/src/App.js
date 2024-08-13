import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './views/login/Login';
// import Register from './views/register/Register';
import Container from './container/Container';
// import './App.css';

@inject("stores")
class App extends Component {
  @observer
  render() {
    let { network} = this.props.stores;
    let isLoggedIn = network.isLoggedIn();

    return (
      <HashRouter>
        <div>
          <Route path="*" render={() => (
            isLoggedIn ? (
              <Container />
            ) : (
                <Switch>
                  <Route path="/register" component={Login} />
                  <Route component={Login} />
                </Switch>
              )
          )} />
        </div>
      </HashRouter>
    )
  }
}

export default App;
