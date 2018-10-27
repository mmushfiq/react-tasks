import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './reducers/combine-reducers';

const store = createStore(combineReducers,
    compose(applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
