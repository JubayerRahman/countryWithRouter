import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Countries from './Component/Coutries/Countries';
import Error from './Component/Error';
import Home from './Component/Home/Home';
import SingleCountry from './Component/SingleCountry/SingleCountry';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='countries' element={<Countries/>}/>
          <Route path='/singlecounry/:id' element={<SingleCountry/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
