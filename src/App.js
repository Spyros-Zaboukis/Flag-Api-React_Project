import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import './styles/index.scss'
import Blog from './pages/Blog';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = { <Home/> }/>
        <Route path='/About' element={ <About/>} />
        <Route path='/Blog' element={ <Blog/>} />
        <Route path='*' element = { <Home/> }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;