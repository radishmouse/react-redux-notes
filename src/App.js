import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store from './store';
import { Provider } from 'react-redux';

import NotesComponent from './NotesContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NotesComponent title="important stuff" />
        </div>
      </Provider>
    );
  }
}

export default App;
