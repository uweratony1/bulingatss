// src/components/Footer.jsx
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* === Top Section: Quick Links & Info === */}
        <div style={styles.topSection}>
          {/* Column 1: About */}
          <div style={styles.column}>
            <h3 style={styles.heading}>Bulinga TSS</h3>
            <p style={styles.text}>
              Excellence in Technical Education in Muhanga, Southern Province, Rwanda.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div style={styles.column}>
            <h3 style={styles.heading}>Quick Links</h3>
            <ul style={styles.list}>
              <li><a href="#home" style={styles.link}>Home</a></li>
              <li><a href="#about" style={styles.link}>About Us</a></li>
              <li><a href="#trades" style={styles.link}>Trades</a></li>
              <li><a href="#contact" style={styles.link}>Contact</a></li>
              <li><a href="#location" style={styles.link}>Location</a></li>
              <li><a href="#photos" style={styles.link}>Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div style={styles.column}>
            <h3 style={styles.heading}>Contact Us</h3>
            <p style={styles.text}>
              <strong>📍</strong> Mushishiro Sector, Muhanga District<br />
              <strong>📞</strong> <a href="tel:+250788123456" style={styles.link}>+250 788 123 456</a><br />
              <strong>✉️</strong> <a href="mailto:info@bulingatss.rw" style={styles.link}>info@bulingatss.rw</a>
            </p>
          </div>

          {/* Column 4: Newsletter */}
          <div style={styles.column}>
            <h3 style={styles.heading}>Stay Updated</h3>
            <p style={styles.text}>Get school news and event alerts.</p>
            {subscribed ? (
              <p style={{ ...styles.text, color: '#1E90FF', fontWeight: '500' }}>
                ✅ Subscribed!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} style={styles.form}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.input}
                />
                <button type="submit" style={styles.button}>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* === Bottom Section: Social & Copyright === */}
        <div style={styles.bottomSection}>
          <div style={styles.social}>
            <a href="#" style={styles.socialLink}>📘 Facebook</a>
            <a href="#" style={styles.socialLink}>📷 Instagram</a>
            <a href="#" style={styles.socialLink}>📱 WhatsApp</a>
            <a href="#" style={styles.socialLink}>🐦 X (Twitter)</a>
          </div>

          <div style={styles.copyright}>
            <p style={styles.text}>
              &copy; {new Date().getFullYear()} <strong>Bulinga Technical Secondary School</strong>.<br />
              Empowering Futures Through Technical Education.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// === STYLES ===
const styles = {
  footer: {
    background: '#000',
    color: 'white',
    padding: '3rem 0 1.5rem',
    borderTop: '4px solid #1E90FF' // Sky blue accent
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1.5rem'
  },
  topSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2.5rem'
  },
  column: {
    textAlign: 'left'
  },
  heading: {
    fontSize: '1.3rem',
    color: '#1E90FF',
    marginBottom: '1rem',
    fontWeight: '600'
  },
  text: {
    color: '#ccc',
    lineHeight: '1.7',
    fontSize: '0.95rem'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  link: {
    color: '#1E90FF',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '0.5rem'
  },
  input: {
    padding: '8px 12px',
    border: '1px solid #444',
    borderRadius: '4px',
    fontSize: '0.95rem',
    backgroundColor: '#111',
    color: 'white'
  },
  button: {
    padding: '8px',
    backgroundColor: '#1E90FF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '500',
    fontSize: '0.95rem',
    transition: 'background 0.3s ease'
  },
  bottomSection: {
    borderTop: '1px solid #333',
    paddingTop: '1.5rem',
    textAlign: 'center',
    marginTop: '2rem'
  },
  social: {
    marginBottom: '1rem'
  },
  socialLink: {
    color: '#1E90FF',
    margin: '0 0.8rem',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease'
  },
  copyright: {
    fontSize: '0.9rem',
    color: '#aaa'
  }
};