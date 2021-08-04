import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import './css/styles.css'
import Logo from './Logo';
import Main from './main';
import ContentsVoc from './Contents/voc';
import ContentsContact from './Contents/contact';
import ContentsFavorite from './Contents/favorite';
import ContentsInnerShuttle from './Contents/innerShuttle';
import ContentsNearStop from './Contents/nearStop';
import ContentsNewRoute from './Contents/newRoute';
import ContentsNotice from './Contents/notice';
import ContentsSatisfy from './Contents/satisfy';
import ContentsSue from './Contents/sue';
import ContentsTimeTable from './Contents/timeTable';
import reportWebVitals from './reportWebVitals';

let StoreState = [
  {
    showPage:'menu'
    ,doSlide:0
    ,endSlide:0
  }
];

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
        <Route path="/contact">
          <ContentsContact/>
        </Route>
        <Route path="/favorite">
          <ContentsFavorite/>
        </Route>
        <Route path="/innerShuttle">
          <ContentsInnerShuttle/>
        </Route>
        <Route path="/nearStop">
          <ContentsNearStop/>
        </Route>
        <Route path="/newRoute">
          <ContentsNewRoute/>
        </Route>
        <Route path="/notice">
          <ContentsNotice/>
        </Route>
        <Route path="/satisfy">
          <ContentsSatisfy/>
        </Route>
        <Route path="/sue">
          <ContentsSue/>
        </Route>
        <Route path="/timeTable">
          <ContentsTimeTable/>
        </Route>
        <Route path="/voc">
          <ContentsVoc/>
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
