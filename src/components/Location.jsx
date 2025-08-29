// src/components/Location.jsx
import React from 'react';

const Location = () => {
  return (
    <section style={styles.section}>
      {/* === Hero Banner === */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Find Us at Bulinga TSS</h1>
        <p style={styles.heroSubtitle}>
          Visit our campus in Mushishiro Sector, Muhanga District, Southern Province
        </p>
      </div>

      <div style={styles.container}>
        {/* === Location Info === */}
        <div style={styles.infoGrid}>
          {/* Address */}
          <div style={styles.infoCard}>
            <h3 style={styles.cardTitle}>📍 Our Address</h3>
            <p style={styles.cardText}>
              <strong>Bulinga Technical Secondary School</strong><br />
              Mushishiro Sector<br />
              Muhanga District<br />
              Southern Province, Rwanda
            </p>
          </div>

          {/* Visiting Hours */}
          <div style={styles.infoCard}>
            <h3 style={styles.cardTitle}>🕒 Visiting Hours</h3>
            <p style={styles.cardText}>
              <strong>Monday – Friday:</strong> 8:00 AM – 4:00 PM<br />
              <strong>Saturday:</strong> 9:00 AM – 12:00 PM<br />
              <strong>Sunday:</strong> Closed
            </p>
          </div>

          {/* Parking */}
          <div style={styles.infoCard}>
            <h3 style={styles.cardTitle}>🚗 Parking</h3>
            <p style={styles.cardText}>
              Free parking available for students, parents, and visitors.<br />
              Designated spots near the main entrance.
            </p>
          </div>
        </div>

        {/* === Google Map === */}
        <div style={styles.mapSection}>
          <h2 style={styles.sectionTitle}>Campus Map</h2>
          <p style={styles.mapText}>
            Use the map below to find our campus. We're located near the Mushishiro Health Center.
          </p>

          <div style={styles.mapContainer}>
            <iframe
              title="Bulinga TSS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.586938633569!2d29.73589767480265!3d-2.396855098218526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d9d0b84c8a8b4f%3A0x5a7d8c5b6b7c8d8e!2sBulinga%20Technical%20Secondary%20School!5e0!3m2!1sen!2srw!4v1730000000000!5m2!1sen!2srw"
              width="100%"
              height="450"
              style={{
                border: 0,
                borderRadius: '12px',
                boxShadow: '0 6px 15px rgba(0,0,0,0.1)'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* === Directions === */}
        <div style={styles.directionsSection}>
          <h2 style={styles.sectionTitle}>How to Reach Us</h2>
          <div style={styles.directionsGrid}>
            <div style={styles.directionCard}>
              <h3 style={styles.directionTitle}>🚌 By Public Transport</h3>
              <p style={styles.directionText}>
                Take a bus to <strong>Muhanga Town</strong>, then a local motorcycle taxi (moto) to Mushishiro Sector. Tell the driver "Bulinga TSS".
              </p>
            </div>

            <div style={styles.directionCard}>
              <h3 style={styles.directionTitle}>🚗 By Car</h3>
              <p style={styles.directionText}>
                From Kigali: Take the H1 road toward Nyanza. Exit at Muhanga and follow signs to Mushishiro. School is on the left after the health center.
              </p>
            </div>
          </div>
        </div>

        {/* === Call to Action === */}
        <div style={styles.ctaSection}>
          <h3 style={styles.ctaTitle}>Plan Your Visit</h3>
          <p style={styles.ctaText}>
            Interested in touring our campus or meeting with admissions?
          </p>
          <button
            className="btn"
            style={styles.ctaButton}
            onClick={() => alert("Thank you! We'll contact you soon.")}
          >
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Location;

// === STYLES ===
const styles = {
  section: {
    width: '100%',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f4f6f9',
    color: '#333',
    overflowX: 'hidden'
  },

  // Hero Banner
  hero: {
    background: '#000',
    color: 'white',
    textAlign: 'center',
    padding: '4rem 2rem',
    marginBottom: '3rem'
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 8vw, 3rem)',
    margin: '0 0 0.5rem 0',
    fontWeight: 'bold'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    opacity: 0.9
  },

  container: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px'
  },

  // Info Grid
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem'
  },
  infoCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    lineHeight: '2',
    textAlign: 'center'
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#000',
    marginBottom: '1rem'
  },
  cardText: {
    color: '#555',
    lineHeight: '1.7'
  },

  // Map Section
  mapSection: {
    marginBottom: '4rem',
    textAlign: 'center'
  },
  sectionTitle: {
    fontSize: 'clamp(1.8rem, 6vw, 2.5rem)',
    color: '#000',
    textAlign: 'center',
    marginBottom: '1.5rem'
  },
  mapText: {
    fontSize: '1.1rem',
    color: '#555',
    maxWidth: '800px',
    margin: '0 auto 2rem'
  },
  mapContainer: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)'
  },

  // Directions
  directionsSection: {
    marginBottom: '4rem'
  },
  directionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  },
  directionCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    border: '1px solid #eee'
  },
  directionTitle: {
    fontSize: '1.4rem',
    color: '#000',
    marginBottom: '0.8rem'
  },
  directionText: {
    color: '#555',
    lineHeight: '1.7'
  },

  // CTA
  ctaSection: {
    textAlign: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#f8f9ff',
    borderRadius: '12px',
    marginBottom: '3rem'
  },
  ctaTitle: {
    fontSize: '1.8rem',
    color: '#000',
    marginBottom: '0.8rem'
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '1.5rem'
  },
  ctaButton: {
    padding: '14px 32px',
    fontSize: '1.1rem',
    background: '#1E90FF',  // Sky Blue
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    cursor: 'pointer'
  }
};