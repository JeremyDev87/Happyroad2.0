import bus from './images/busIcon.png';
import logo from './images/HPRD2_Logo.png';
import './Logo.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bus} className="App-logo-ping-once" alt="bus"/>
        <img src={logo} className="MainLogo opacity-0 absolute" alt="logo"/>
        <span className="road-logo text-9xl -mt-8"><i className="fas fa-road"></i></span>
        <span className="after-logo tracking-wide">HappyRoad</span>
        <span className="ver-logo text-7xl font-bold absolute text-gray-500">Ⅱ</span>
        <div className="mainSearch w-full opacity-1">
          <label htmlFor="mainSearchInput" className="mr-2" ><i className="fas fa-search"></i></label>
          <input className="w-3/5 py-2 px-2 rounded-md" type="text" placeholder="노선/정류장 검색" id="mainSearchInput"/>
        </div>
      </header>
    </div>
  );
}

export default App;