//3rd party dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //component from react-redux library
import { createStore } from 'redux'; //function from redux library

//my own written code
//grouping is preference-based, i like the separation
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
