import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import All from "./pages/All";
import Footer from "./componets/Footer";
import Details from "./pages/Details";
import Categories from "./pages/Categories";
import SearchPage from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/all" element={<All />} />

          <Route path="/details/:id" element={<Details />} />

          <Route path="/categories/:id" element={<Categories />} />

          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </>
      <Footer />
    </BrowserRouter>
  );
}
