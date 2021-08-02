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


let StoreState = [{showPage:'menu',doSlide:0,endSlide:0}];

const reducer = (state=StoreState, setStoreState) => {
  if(setStoreState.type==='search'){
    let copy = [...state];
    copy[0].showPage = 'search';
    return copy
  }else if(setStoreState.type==='menu'){
    let copy = [...state];
    copy[0].showPage = 'menu';
    return copy
  }else if(setStoreState.type==='user'){
    let copy = [...state];
    copy[0].showPage = 'user';
    return copy
  }else if(setStoreState.type==='startX'){
    let copy = [...state];
    copy[0].doSlide = setStoreState.XValue;
    return copy
  }else if(setStoreState.type==='endX'){
    let copy = [...state];
    copy[0].endSlide = setStoreState.XValue;
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
