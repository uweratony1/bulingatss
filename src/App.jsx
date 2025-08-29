// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Trades from './components/Trades';
import Contact from './components/Contact';
import Location from './components/Location';
import Photos from './components/Photos'; // ✅ Import Photos
import './css/styles.css';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'about': return <About />;
      case 'trades': return <Trades />;
      case 'contact': return <Contact />;
      case 'location': return <Location />;
      case 'photos': return <Photos />; // ✅ Add this
      default: return <Home />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main style={{ flex: 1 }}>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;