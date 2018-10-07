// Startup code for client side application.
import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {createStore,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import axios from 'axios';
import {renderRoutes} from 'react-router-config';
import reducers from './reducers';
const axiosInstane = axios.create({
baseURL :'/api'
});
const store = createStore(reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstane)))
ReactDom.hydrate(
    <Provider store={store}>
    <BrowserRouter>
    <div>
           {renderRoutes(Routes)}
           </div>
    </BrowserRouter>
    </Provider>
    ,
document.querySelector("#root"));