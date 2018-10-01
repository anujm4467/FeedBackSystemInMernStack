import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux' ;
import reducer from './reducers';

const store = createStore(()=>reducer, {}, applyMiddleware());

ReactDOM.render(<Provider store={store}><App /></Provider> , document.querySelector('#root'));
