// src/components/Home.jsx
import React, { useState, useEffect } from 'react';

const Home = () => {
  // ✅ Corrected image paths (NO spaces in filenames)
  const backgrounds = [
    '/assets/images/tony3.jpg',
    '/assets/images/tony1.jpg',  // Rename from "tony 1.jpg" → "tony1.jpg"
    '/assets/images/tony4.jpg'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  // Preload and check images
  useEffect(() => {
    backgrounds.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => console.log(`✅ Loaded: ${src}`);
      img.onerror = () => {
        console.error(`❌ Failed to load: ${src}`);
        setImageErrors(prev => ({ ...prev, [idx]: true }));
      };
    });
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div style={styles.container}>
      {/* === 1. Hero Section with Sliding Background === */}
      <section style={styles.hero}>
        {backgrounds.map((img, idx) => (
          <div
            key={idx}
            style={{
              ...styles.slide,
              backgroundImage: imageErrors[idx]
                ? 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://via.placeholder.com/1920x1080/000/fff?text=Image+Not+Found)'
                : `url("${img}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: idx === currentSlide ? 1 : 0
            }}
          />
        ))}

        {/* Hero Content */}
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
        <div style={styles.featuresGrid}>
          {[
            {
              icon: "🛠️",
              title: "Hands-On Learning",
              desc: "We emphasize practical training in real labs with modern tools."
            },
            {
              icon: "🎓",
              title: "Certified Instructors",
              desc: "Our teachers are experienced professionals with industry expertise."
            },
            {
              icon: "💼",
              title: "Career Support",
              desc: "We help graduates find jobs and internships with partner companies."
            },
            {
              icon: "🏫",
              title: "Modern Campus",
              desc: "Spacious classrooms, computer labs, and safe learning environment."
            }
          ].map((feature, idx) => (
            <div key={idx} style={styles.featureCard}>
              <span style={styles.featureIcon}>{feature.icon}</span>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* === 3. Programs Offered === */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Academic Programs</h2>
        <div style={styles.programsGrid}>
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
        <div style={styles.statsContainer}>
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
        <div style={styles.newsGrid}>
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
        <div style={styles.testimonialsGrid}>
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
    overflowX: 'hidden'
  },

  // Hero Section
  hero: {
    position: 'relative',
    width: '100%',
    height: '90vh',
    minHeight: '400px',
    maxHeight: '900px',
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
    backgroundColor: '#000',
    transition: 'opacity 1.2s ease-in-out',
    zIndex: -1
  },
  heroContent: {
    zIndex: 1,
    maxWidth: '90vw',
    padding: '0 20px',
    textAlign: 'center'
  },
  heroTitle: {
    fontSize: 'clamp(1.8rem, 8vw, 3.5rem)',
    marginBottom: '1rem',
    textShadow: '0 2px 10px rgba(0,0,0,0.8)',
    fontWeight: 'bold'
  },
  heroText: {
    fontSize: 'clamp(1rem, 4vw, 1.4rem)',
    marginBottom: '1.5rem',
    maxWidth: '600px',
    margin: '0 auto 1.5rem',
    textShadow: '0 1px 5px rgba(0,0,0,0.7)'
  },
  heroButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
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
    padding: '4rem 2rem',
    backgroundColor: 'white'
  },
  sectionTitle: {
    fontSize: 'clamp(1.6rem, 6vw, 2.4rem)',
    color: '#000',
    marginBottom: '2rem',
    textAlign: 'center'
  },

  // Features Grid
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  featureCard: {
    padding: '1.8rem',
    borderRadius: '12px',
    backgroundColor: '#f8f9ff',
    textAlign: 'center',
    border: '1px solid #e0f0ff',
    boxShadow: '0 4px 10px rgba(30, 144, 255, 0.08)',
    transition: 'transform 0.3s ease'
  },
  featureIcon: {
    fontSize: '2.3rem',
    marginBottom: '0.6rem',
    display: 'block'
  },
  featureTitle: {
    fontSize: '1.4rem',
    color: '#000',
    marginBottom: '0.6rem'
  },
  featureDesc: {
    color: '#444',
    lineHeight: '1.6'
  },

  // Programs Section
  programsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.8rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  programCard: {
    padding: '1.8rem',
    borderRadius: '10px',
    backgroundColor: '#f8f9ff',
    border: '1px solid #cce5ff',
    transition: 'all 0.3s ease'
  },
  programTitle: {
    fontSize: '1.3rem',
    color: '#000',
    marginBottom: '0.6rem'
  },
  programDesc: {
    color: '#444',
    lineHeight: '1.6'
  },

  // Stats Section (Sky Blue)
  statsSection: {
    padding: '4rem 2rem',
    backgroundColor: '#1E90FF',
    color: 'white',
    textAlign: 'center'
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  statCard: {
    padding: '1.5rem'
  },
  statNumber: {
    fontSize: '2.4rem',
    fontWeight: 'bold',
    color: 'white'
  },
  statLabel: {
    color: 'rgba(255,255,255,0.95)',
    marginTop: '0.4rem',
    fontWeight: '500'
  },

  // News & Events
  newsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.8rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  newsCard: {
    padding: '1.6rem',
    borderRadius: '10px',
    border: '1px solid #cce5ff',
    backgroundColor: '#f0f8ff',
    transition: 'all 0.3s ease'
  },
  newsDate: {
    display: 'block',
    fontSize: '0.9rem',
    color: '#1E90FF',
    fontWeight: '500',
    marginBottom: '0.5rem'
  },
  newsTitle: {
    fontSize: '1.3rem',
    color: '#000',
    marginBottom: '0.6rem'
  },
  newsDesc: {
    color: '#444',
    lineHeight: '1.6'
  },

  // Testimonials
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.8rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  testimonialCard: {
    padding: '1.6rem',
    borderRadius: '10px',
    backgroundColor: 'white',
    border: '1px solid #cce5ff',
    fontStyle: 'italic',
    boxShadow: '0 4px 8px rgba(30, 144, 255, 0.08)'
  },
  testimonialQuote: {
    color: '#333',
    lineHeight: '1.7',
    marginBottom: '1rem'
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

  // Final CTA
  ctaSection: {
    padding: '5rem 2rem',
    backgroundColor: '#f8f9ff',
    textAlign: 'center'
  },
  ctaContent: {
    maxWidth: '700px',
    margin: '0 auto'
  },
  ctaTitle: {
    fontSize: 'clamp(1.8rem, 6vw, 2.4rem)',
    color: '#000',
    marginBottom: '1rem'
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '1.8rem'
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