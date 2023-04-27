
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import bars from './img/bars.png'


import Header from './componets/header';

import Home from './pages/Home';
import Todos from './pages/Todos';
import Footer from './componets/footer';
import Details from './pages/Details';
import Categories from './pages/Categories';
import SearchPage from './pages/Busca';
import Sidebar from './componets/sidebar';


export default function App() {
  return (
    <BrowserRouter>


      <></>
      <Sidebar/>
      <>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/todososanimes' element={<Todos />} />

          <Route path='/details/:id' element={<Details/>}/>

          <Route path='/categories/:id' element={<Categories/>}/>

          <Route path='/paginadebusca' element={<SearchPage/>}/>


        </Routes>

      </>

      <Footer />

    </BrowserRouter>
  );
}
