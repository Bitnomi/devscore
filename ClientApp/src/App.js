import React, { Component } from 'react';
import { Route } from 'react-router';
import { MyComp } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <MyComp>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
      </MyComp>
    );
  }
}
