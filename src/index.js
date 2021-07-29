import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import './css/styles.css'
import Logo from './Logo';
import Main from './main';
import User from './user';
import Search from './search';
import reportWebVitals from './reportWebVitals';


let store = createStore(()=>{
  return [{
    id : '9111562',
    name : '박정욱',
    auth : 'SA',
    nowPage:0
  }]
})


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Route exact path="/">
          <Logo/>  
        </Route>
        <Route path="/main">
          <Main/>
        </Route>
        <Route path="/user">
          <User/>
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
