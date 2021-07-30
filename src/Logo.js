import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import bus from './images/busIcon.png';
import logo from './images/HPRD2_Logo_bright.png';
import './Logo.css';


function App() {
  useEffect(()=>{
    document.addEventListener('touchstart', touch_start);
    document.addEventListener('touchend', touch_end);

    return () => {
        document.removeEventListener('touchstart', touch_start);
        document.removeEventListener('touchend', touch_end);
    }
  })

  let   start_x = 0;
  let   end_x = 0;
  let history = useHistory();

  const touch_start = (e) => {
      start_x = e.touches[0].pageX;
  }
  const touch_end = (e) => {
      end_x = e.changedTouches[0].pageX;
      if(start_x-120 > end_x && start_x > end_x){
        history.push('/main');
      }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={bus} className="App-logo-ping-once" alt="bus"/>
        <img src={logo} className="MainLogo opacity-0 absolute" alt="logo"/>
        <span className="road-logo text-9xl -mt-8"><i className="fas fa-road"></i></span>
        <span className="after-logo tracking-wide">HappyRoad</span>
        <span className="ver-logo text-7xl font-bold absolute text-gray-500">Ⅱ</span>
        <div className="mainSearch w-full opacity-0">
          <label htmlFor="mainSearchInput" className="mr-2" ><i className="fas fa-search"></i></label>
          <input className="w-3/5 py-2 px-2 rounded-md border-b-2" type="text" placeholder="노선/정류장 검색" id="mainSearchInput"/>
        </div>
      </header>
    </div>
  );
}

export default App;