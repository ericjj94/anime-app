import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import App from './App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
