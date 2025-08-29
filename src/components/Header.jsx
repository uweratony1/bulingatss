// src/components/Header.jsx
import React from 'react';
import Navbar from './Navbar';

const Header = ({ activePage, setActivePage }) => {
  return (
    <header style={{
      background: '#000',  // Black background
      color: 'white',
      padding: '1rem 0'
    }}>
      <div style={{
        width: '90%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{
          fontSize: '1.8rem',
          fontWeight: 'bold'
        }}>
          TechSkills Academy
        </div>
        <Navbar activePage={activePage} setActivePage={setActivePage} />
      </div>
    </header>
  );
};

export default Header;