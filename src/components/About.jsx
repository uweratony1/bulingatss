// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section style={styles.section}>
      {/* Hero Banner */}
      <div style={styles.heroBanner}>
        <h1 style={styles.heroTitle}>About Bulinga TSS</h1>
        <p style={styles.heroSubtitle}>
          Excellence in Technical and Vocational Education
        </p>
      </div>

      <div style={styles.container}>
        {/* === Introduction === */}
        <div style={styles.intro}>
          <h2 style={styles.sectionTitle}>Our School</h2>
          <p>
            <strong>Bulinga Technical Secondary School (Bulinga TSS)</strong> is a premier technical institution located in 
            <strong> Mushishiro Sector, Muhanga District, Southern Province, Rwanda</strong>. 
            We are dedicated to shaping the next generation of skilled professionals through practical, modern, and industry-aligned education.
          </p>
          <p>
            Since our founding, we’ve focused on innovation, discipline, and excellence, preparing students for successful careers in technology, business, and beyond.
          </p>
        </div>

        {/* === Vision & Mission === */}
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Our Vision</h3>
            <p style={styles.cardText}>
              To become a leading center of excellence in technical education in East Africa, producing innovative and job-ready graduates.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>Our Mission</h3>
            <p style={styles.cardText}>
              To provide quality technical and vocational training that empowers students with practical skills, ethical values, and entrepreneurial mindset for sustainable development.
            </p>
          </div>
        </div>

        {/* === Programs Offered === */}
        <div style={styles.programs}>
          <h2 style={styles.sectionTitle}>Programs We Offer</h2>
          <div style={styles.programsGrid}>
            {[
              {
                icon: "🌐",
                title: "Network & Internet Technology",
                desc: "Learn routing, switching, cybersecurity, and network management."
              },
              {
                icon: "💻",
                title: "Software Development",
                desc: "Master web, mobile, and desktop app development using modern tools."
              },
              {
                icon: "🖥️",
                title: "Computer System Architecture",
                desc: "Study hardware, operating systems, and system design principles."
              },
              {
                icon: "📊",
                title: "Accounting",
                desc: "Gain expertise in financial reporting, taxation, and digital accounting software."
              }
            ].map((prog, idx) => (
              <div key={idx} style={styles.programCard}>
                <span style={styles.programIcon}>{prog.icon}</span>
                <h3 style={styles.programTitle}>{prog.title}</h3>
                <p style={styles.programDesc}>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === Location & Map === */}
        <div style={styles.location}>
          <h2 style={styles.sectionTitle}>Find Us</h2>
          <p style={styles.locationText}>
            Bulinga Technical Secondary School is located in <strong>Mushishiro Sector, Muhanga District, Southern Province, Rwanda</strong>.
          </p>

          {/* Google Map */}
          <div style={styles.mapContainer}>
            <iframe
              title="Bulinga TSS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.586938633569!2d29.73589767480265!3d-2.396855098218526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d9d0b84c8a8b4f%3A0x5a7d8c5b6b7c8d8e!2sBulinga%20Technical%20Secondary%20School!5e0!3m2!1sen!2srw!4v1730000000000!5m2!1sen!2srw"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* === Contact Info === */}
        <div style={styles.contact}>
          <h3 style={styles.subTitle}>Contact Us</h3>
          <div style={styles.contactInfo}>
            <p><strong>📞 Phone:</strong> +250 788 000 000</p>
            <p><strong>✉️ Email:</strong> info@bulingatss.rw</p>
            <p><strong>🏫 Address:</strong> Mushishiro Sector, Muhanga District, Southern Province</p>
            <p><strong>🕘 Hours:</strong> Mon - Fri: 8:00 AM – 4:00 PM</p>
          </div>

          {/* Call to Action */}
          <div style={styles.cta}>
            <button
              className="btn"
              style={styles.ctaButton}
              onClick={() => alert("Redirecting to contact form...")}
            >
              Visit Contact Page
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
  heroBanner: {
    background: '#000',
    color: 'white',
    textAlign: 'center',
    padding: '4rem 2rem',
    marginBottom: '3rem'
  },
  heroTitle: {
    fontSize: 'clamp(2rem, 8vw, 3rem)',
    margin: '0',
    fontWeight: 'bold'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    marginTop: '0.5rem'
  },

  container: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px'
  },

  intro: {
    lineHeight: '1.8',
    fontSize: '1.1rem',
    marginBottom: '3rem',
    color: '#444',
    textAlign: 'center'
  },

  sectionTitle: {
    fontSize: 'clamp(1.8rem, 6vw, 2.5rem)',
    color: '#000',
    textAlign: 'center',
    marginBottom: '1.5rem'
  },

  // Vision & Mission Grid
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem'
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    textAlign: 'center'
  },
  cardTitle: {
    fontSize: '1.5rem',
    color: '#000',
    marginBottom: '1rem'
  },
  cardText: {
    lineHeight: '1.7',
    color: '#555'
  },

  // Programs Section
  programs: {
    marginBottom: '4rem'
  },
  programsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.8rem',
    marginTop: '2rem'
  },
  programCard: {
    backgroundColor: 'white',
    padding: '1.8rem',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease'
  },
  programCardHover: {
    transform: 'translateY(-6px)'
  },
  programIcon: {
    fontSize: '2.5rem',
    marginBottom: '0.8rem',
    display: 'block'
  },
  programTitle: {
    fontSize: '1.4rem',
    color: '#000',
    marginBottom: '0.6rem'
  },
  programDesc: {
    color: '#555',
    lineHeight: '1.6'
  },

  // Location & Map
  location: {
    marginBottom: '4rem',
    textAlign: 'center'
  },
  locationText: {
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

  // Contact Info
  contact: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  subTitle: {
    fontSize: '1.8rem',
    color: '#000',
    marginBottom: '1.2rem'
  },
  contactInfo: {
    lineHeight: '2',
    color: '#444',
    fontSize: '1.1rem',
    marginBottom: '2rem'
  },
  cta: {
    marginTop: '1.5rem'
  },
  ctaButton: {
    padding: '14px 30px',
    fontSize: '1.1rem',
    fontWeight: '500'
  }
};