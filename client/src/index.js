import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux' ;
import reducer from './reducers';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import reduxThunk from 'redux-thunk';


const store = createStore(()=>reducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider> , document.querySelector('#root'));
