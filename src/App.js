import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import SideList from './components/SideList/SideList';
import React from 'react';

function App() {
  return (
    <div>
      <BrowserRouter>
        <React.StrictMode>
          <Header/>
          <SideList/>
        </React.StrictMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
