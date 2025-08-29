// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = ({ activePage, setActivePage }) => {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close mobile menu on large screens
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation items (including Photos)
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'trades', label: 'Trades' },
    { key: 'contact', label: 'Contact' },
    { key: 'location', label: 'Location' },
    { key: 'photos', label: 'Photos' } // ✅ Photos added
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        {/* Logo */}
        <div style={styles.logo}>Bulinga TSS</div>

        {/* Hamburger Menu Button (Mobile Only) */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={styles.hamburger}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        )}

        {/* Navigation Links */}
        {!isMobile ? (
          // Desktop: Always visible
          <ul style={styles.navList}>
            {navItems.map(({ key, label }) => (
              <NavItem
                key={key}
                item={{ key, label }}
                isActive={activePage === key}
                isHovered={hovered === key && activePage !== key}
                onMouseEnter={() => setHovered(key)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActivePage(key)} // ✅ Correctly updates activePage
              />
            ))}
          </ul>
        ) : isMenuOpen ? (
          // Mobile: Show only when menu is open
          <ul style={styles.mobileMenu}>
            {navItems.map(({ key, label }) => (
              <NavItem
                key={key}
                item={{ key, label }}
                isActive={activePage === key}
                isHovered={false}
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                onClick={() => {
                  setActivePage(key); // ✅ Sets page to 'photos'
                  setIsMenuOpen(false); // Close menu after click
                }}
              />
            ))}
          </ul>
        ) : null}
      </div>
    </nav>
  );
};

// Reusable Nav Item Component
const NavItem = ({ item, isActive, isHovered, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <li style={styles.navItem}>
      <button
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          ...styles.navLink,
          color: isActive ? 'white' : isHovered ? '#1E90FF' : 'white',
          fontWeight: isActive ? 'bold' : 'normal',
          background: isActive ? '#000' : 'none',
          textShadow: isHovered ? '0 0 8px rgba(30, 144, 255, 0.6)' : 'none'
        }}
      >
        {item.label}
        {/* Underline Animation */}
        <span
          style={{
            ...styles.underline,
            width: isActive || isHovered ? '100%' : '0%',
            backgroundColor: '#1E90FF',
            boxShadow: isHovered ? '0 1px 6px rgba(30, 144, 255, 0.5)' : 'none'
          }}
        />
      </button>
    </li>
  );
};

export default Navbar;

// === STYLES ===
const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#000',
    zIndex: 1000,
    padding: '1rem 0',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    position: 'relative'
  },
  logo: {
    color: 'white',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    letterSpacing: '0.8px'
  },
  hamburger: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer'
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    gap: '3rem',
    margin: 0,
    padding: 0
  },
  mobileMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 6px 12px rgba(0,0,0,0.3)'
  },
  navItem: {
    position: 'relative'
  },
  navLink: {
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: '500',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.8rem 1rem',
    position: 'relative',
    transition: 'color 0.3s ease, textShadow 0.3s ease'
  },
  underline: {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '0%',
    height: '2px',
    backgroundColor: '#1E90FF',
    transition: 'width 0.4s ease, box-shadow 0.3s ease',
    borderRadius: '1px'
  }
};