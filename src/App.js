import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SomeFood from './components/SomeFood';
import MainVisual from './components/MainVisual';
import NewsEvent from './components/NewsEvent';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

/* css */
import './styles/reset/reset.css';
import './styles/global.css';

function App() {
  return (
<BrowserRouter>
      <Header />
<main>
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/product/:id" element={<DetailPage />} />
  </Routes>
</main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
