import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import './css/styles.css'
import Logo from './Logo';
import Main from './main';
import reportWebVitals from './reportWebVitals';


let pageStatus = [{showPage:'menu'}];

const reducer = (state=pageStatus, setPageStatus) => {
  if(setPageStatus.type==='search'){

    let copy = [...state];
    copy[0].showPage = 'search';
    return copy

  }else if(setPageStatus.type==='menu'){
    let copy = [...state];
    copy[0].showPage = 'menu';
    return copy
  }else if(setPageStatus.type==='user'){
    let copy = [...state];
    copy[0].showPage = 'user';
    return copy
  }else{
    return state
  }
}

let store = createStore(reducer);


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
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
