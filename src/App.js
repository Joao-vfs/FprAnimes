
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import bars from './img/bars.png'


import Header from './componets/Header';

import Home from './pages/Home';
import Todos from './pages/Todos';
import Footer from './componets/Footer';
import Details from './pages/Details';
import Categories from './pages/Categories';
import SearchPage from './pages/Search';
import Sidebar from './componets/SideBar';


export default function App() {
  return (
    <BrowserRouter>


      <></>
      
      <>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/all' element={<Todos />} />

          <Route path='/details/:id' element={<Details/>}/>

          <Route path='/categories/:id' element={<Categories/>}/>

          <Route path='/search' element={<SearchPage/>}/>


        </Routes>

      </>

      <Footer />

    </BrowserRouter>
  );
}
