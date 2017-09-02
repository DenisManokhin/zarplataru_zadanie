// Base import
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers/App'
// Actions import
import { getVacTable, getWordsTable } from './actions'
// Styles import
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

const store = createStore( reducer, composeWithDevTools( applyMiddleware( thunk ) ) );

store.dispatch( getVacTable() );
store.dispatch( getWordsTable() );

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById( 'root' )
);