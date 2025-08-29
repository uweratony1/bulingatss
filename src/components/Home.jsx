// src/components/Home.jsx
import React, { useState, useEffect } from 'react';

const Home = () => {
  // ✅ Ensure filenames have NO spaces: tony1.jpg, not "tony 1.jpg"
  const backgrounds = [
    '/assets/images/tony3.jpg',
    '/assets/images/tony1.jpg',
    '/assets/images/tony4.jpg'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  // Preload images
  useEffect(() => {
    backgrounds.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => console.log('✅ Loaded:', src);
      img.onerror = () => setImageErrors(prev => ({ ...prev, [idx]: true }));
    });
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div style={styles.container}>
      {/* === 1. Hero Section === */}
      <section style={styles.hero}>
        {backgrounds.map((img, idx) => (
          <div
            key={idx}
            style={{
              ...styles.slide,
              backgroundImage: imageErrors[idx]
                ? 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://via.placeholder.com/1920x1080/000/fff?text=Image+Not+Found)'
                : `url("${img}")`
            }}
          />
        ))}
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to Bulinga TSS</h1>
          <p style={styles.heroText}>
            Excellence in Technical Education in Muhanga, Southern Province, Rwanda
          </p>
          <div style={styles.heroButtons}>
            <button className="btn" style={styles.primaryButton}>
              Enroll Now
            </button>
            <button
              style={styles.secondaryButton}
              onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* === 2. Why Choose Us === */}
      <section style={styles.section} id="programs">
        <h2 style={styles.sectionTitle}>Why Choose Bulinga TSS?</h2>
        <div style={styles.grid}>
          {[
            { icon: "🛠️", title: "Hands-On Learning", desc: "We emphasize practical training in real labs with modern tools." },
            { icon: "🎓", title: "Certified Instructors", desc: "Our teachers are experienced professionals with industry expertise." },
            { icon: "💼", title: "Career Support", desc: "We help graduates find jobs and internships with partner companies." },
            { icon: "🏫", title: "Modern Campus", desc: "Spacious classrooms, computer labs, and safe learning environment." }
          ].map((item, idx) => (
            <div key={idx} style={styles.card}>
              <span style={styles.icon}>{item.icon}</span>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === 3. Programs Offered === */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Academic Programs</h2>
        <div style={styles.grid}>
          {[
            "Network & Internet Technology",
            "Software Development",
            "Computer System Architecture",
            "Accounting"
          ].map((program, idx) => (
            <div key={idx} style={styles.programCard}>
              <h3 style={styles.programTitle}>{program}</h3>
              <p style={styles.programDesc}>
                {program === "Network & Internet Technology" && "Learn to build, manage, and secure computer networks."}
                {program === "Software Development" && "Master web, mobile, and desktop application development."}
                {program === "Computer System Architecture" && "Study hardware, operating systems, and system design."}
                {program === "Accounting" && "Gain skills in financial management and digital accounting tools."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* === 4. Achievements === */}
      <section style={styles.statsSection}>
        <div style={styles.statsGrid}>
          {[
            { number: "850+", label: "Students Trained" },
            { number: "92%", label: "Graduation Rate" },
            { number: "12+", label: "Years of Excellence" },
            { number: "15+", label: "Corporate Partners" }
          ].map((stat, idx) => (
            <div key={idx} style={styles.statCard}>
              <span style={styles.statNumber}>{stat.number}</span>
              <p style={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === 5. News & Events === */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Latest News & Events</h2>
        <div style={styles.grid}>
          {[
            {
              title: "New Computer Lab Opens",
              date: "May 10, 2025",
              desc: "We launched a new 50-seat computer lab funded by the Ministry of Education."
            },
            {
              title: "Career Fair 2025",
              date: "April 25, 2025",
              desc: "Local companies visited to recruit final-year students for internships."
            },
            {
              title: "STEM Workshop for Girls",
              date: "March 8, 2025",
              desc: "Celebrating International Women's Day with a tech workshop for young women."
            }
          ].map((news, idx) => (
            <div key={idx} style={styles.newsCard}>
              <span style={styles.newsDate}>{news.date}</span>
              <h3 style={styles.newsTitle}>{news.title}</h3>
              <p style={styles.newsDesc}>{news.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === 6. Testimonials === */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What Our Students Say</h2>
        <div style={styles.grid}>
          {[
            {
              name: "Jean P.",
              program: "Software Development",
              quote: "I built my first app in just 3 months. Now I work at a tech startup in Kigali."
            },
            {
              name: "Aline M.",
              program: "Accounting",
              quote: "The teachers are patient and supportive. I passed my national exams with distinction."
            },
            {
              name: "Thomas K.",
              program: "Network Technology",
              quote: "The labs are amazing. I got certified in CCNA and now manage a school network."
            }
          ].map((testimonial, idx) => (
            <div key={idx} style={styles.testimonialCard}>
              <p style={styles.testimonialQuote}>"{testimonial.quote}"</p>
              <div style={styles.testimonialFooter}>
                <strong>{testimonial.name}</strong>
                <span style={styles.testimonialProgram}>{testimonial.program}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === 7. Final CTA === */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Start Your Journey?</h2>
          <p style={styles.ctaText}>
            Join hundreds of students who have transformed their futures at Bulinga TSS.
          </p>
          <button className="btn" style={styles.ctaButton}>
            Apply Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

// === STYLES ===
const styles = {
  container: {
    width: '100%',
    overflowX: 'hidden',
    fontFamily: "'Segoe UI', sans-serif",
    boxSizing: 'border-box'
  },

  // Hero
  hero: {
    position: 'relative',
    width: '100%',
    height: '90vh',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    overflow: 'hidden'
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#000',
    transition: 'opacity 1.2s ease-in-out',
    zIndex: -1
  },
  heroContent: {
    zIndex: 1,
    maxWidth: '90vw',
    padding: '0 1rem',
    textAlign: 'center'
  },
  heroTitle: {
    fontSize: 'clamp(1.5rem, 8vw, 3rem)',
    marginBottom: '0.8rem',
    textShadow: '0 2px 10px rgba(0,0,0,0.8)',
    fontWeight: 'bold'
  },
  heroText: {
    fontSize: 'clamp(1rem, 4vw, 1.3rem)',
    marginBottom: '1.5rem',
    maxWidth: '600px',
    margin: '0 auto',
    textShadow: '0 1px 5px rgba(0,0,0,0.7)'
  },
  heroButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center'
  },
  primaryButton: {
    padding: '14px 32px',
    fontSize: '1.1rem',
    background: '#1E90FF',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '200px'
  },
  secondaryButton: {
    padding: '12px 30px',
    fontSize: '1.1rem',
    background: 'transparent',
    color: '#1E90FF',
    border: '2px solid #1E90FF',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    width: '100%',
    maxWidth: '200px'
  },

  // General Section
  section: {
    padding: '3rem 1rem',
    backgroundColor: 'white'
  },
  sectionTitle: {
    fontSize: 'clamp(1.5rem, 6vw, 2.4rem)',
    color: '#000',
    marginBottom: '1.8rem',
    textAlign: 'center'
  },

  // Universal Grid (used for all sections)
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr', // Default: 1 column
    gap: '1.5rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },

  // Responsive Grid for larger screens
  '@media (min-width: 768px)': {
    grid: {
      ...styles.grid,
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  },
  '@media (min-width: 1024px)': {
    grid: {
      ...styles.grid,
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
    }
  },

  // Card Styles
  card: {
    padding: '1.6rem',
    borderRadius: '12px',
    backgroundColor: '#f8f9ff',
    border: '1px solid #e0f0ff',
    boxShadow: '0 4px 10px rgba(30, 144, 255, 0.08)',
    textAlign: 'center',
    wordBreak: 'break-word', // Breaks long words
    overflowWrap: 'break-word' // Ensures wrapping
  },
  icon: {
    fontSize: '2.3rem',
    marginBottom: '0.6rem',
    display: 'block'
  },
  cardTitle: {
    fontSize: '1.3rem',
    color: '#000',
    marginBottom: '0.6rem'
  },
  cardDesc: {
    color: '#444',
    lineHeight: '1.6',
    fontSize: '0.95rem'
  },

  // Program Card
  programCard: {
    ...styles.card,
    backgroundColor: '#f8f9ff'
  },
  programTitle: {
    ...styles.cardTitle,
    fontSize: '1.3rem'
  },
  programDesc: {
    ...styles.cardDesc,
    fontSize: '0.95rem'
  },

  // Stats Section
  statsSection: {
    padding: '3.5rem 1rem',
    backgroundColor: '#1E90FF',
    color: 'white',
    textAlign: 'center'
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.2rem',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  '@media (min-width: 768px)': {
    statsGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  },
  '@media (min-width: 1024px)': {
    statsGrid: {
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  },
  statCard: {
    padding: '1.4rem'
  },
  statNumber: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    color: 'white'
  },
  statLabel: {
    color: 'rgba(255,255,255,0.95)',
    marginTop: '0.4rem',
    fontWeight: '500',
    fontSize: '0.9rem'
  },

  // News & Testimonial Cards
  newsCard: {
    ...styles.card,
    backgroundColor: '#f0f8ff',
    border: '1px solid #cce5ff'
  },
  newsDate: {
    fontSize: '0.9rem',
    color: '#1E90FF',
    fontWeight: '500',
    marginBottom: '0.5rem',
    display: 'block'
  },
  newsTitle: {
    fontSize: '1.3rem',
    color: '#000',
    marginBottom: '0.6rem'
  },
  newsDesc: {
    color: '#444',
    lineHeight: '1.6',
    fontSize: '0.95rem'
  },

  testimonialCard: {
    ...styles.card,
    backgroundColor: 'white',
    fontStyle: 'italic',
    border: '1px solid #cce5ff'
  },
  testimonialQuote: {
    color: '#333',
    lineHeight: '1.7',
    marginBottom: '1rem',
    fontSize: '0.95rem'
  },
  testimonialFooter: {
    textAlign: 'right'
  },
  testimonialProgram: {
    display: 'block',
    color: '#1E90FF',
    fontSize: '0.9rem',
    fontWeight: '500'
  },

  // CTA
  ctaSection: {
    padding: '4rem 1rem',
    backgroundColor: '#f8f9ff',
    textAlign: 'center'
  },
  ctaContent: {
    maxWidth: '650px',
    margin: '0 auto'
  },
  ctaTitle: {
    fontSize: 'clamp(1.6rem, 6vw, 2.2rem)',
    color: '#000',
    marginBottom: '1rem'
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '1.5rem',
    lineHeight: '1.6'
  },
  ctaButton: {
    padding: '14px 36px',
    fontSize: '1.15rem',
    background: '#1E90FF',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};
