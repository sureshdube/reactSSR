// Startup code for client side application.
import React from 'react';
import ReactDom from 'react-dom';
import Home from './component/Home';
ReactDom.hydrate(<Home/>,document.querySelector("#root"));