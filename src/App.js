import React from 'react';
import AllRoute from './Route/route';
import AsideBar from './component/AsideBar';
import Header from './component/Header';

function App(props) {
  return (
    <div className="App">
      <Header/>
      <div className="main-container">
          <div className="col-md-2 asidebar">
            <AsideBar />
          </div>
          <div className="col-md-10 component">
            <AllRoute/>
          </div>
      </div>
    </div>
  );
}

export default App;
