import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Header from './componets/header';

import Home from './pages/Home';
import Todos from './pages/Todos';
import Footer from './componets/footer';
import Details from './pages/Details';


export default function App() {
  return (
    <BrowserRouter>

      <Header />

      <>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/TodosOsAnimes' element={<Todos />} />

          <Route path='/Details/:id' element={<Details/>}/>


        </Routes>

      </>

      <Footer />

    </BrowserRouter>
  );
}
