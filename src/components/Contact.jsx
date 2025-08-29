// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section style={styles.section}>
      {/* Hero Banner */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Contact Bulinga TSS</h1>
        <p style={styles.heroSubtitle}>We're here to help you start your journey with us.</p>
      </div>

      <div style={styles.container}>
        {/* === Contact Info Cards === */}
        <div style={styles.infoGrid}>
          {/* Card 1: Address */}
          <div style={styles.infoCard}>
            <h3 style={styles.cardTitle}>📍 Location</h3>
            <p>
              <strong>Bulinga Technical Secondary School</strong><br />
              Mushishiro Sector, Muhanga District<br />
              Southern Province, Rwanda
            </p>
          </div>

          {/* Card 2: Contact */}
          <div style={styles.infoCard}>
            <h3 style={styles.cardTitle}>📞 Contact Info</h3>
            <p><strong>Phone:</strong> +250 785 112 734</p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/0788878692" target="_blank" style={styles.link}>+250 788 878 692</a></p>
            <p><strong>Email:</strong> <a href="bulingtvtschool@gmail.com" style={styles.link}>bulingtvtschool@gmail.com</a></p>
            <p><strong>Admissions:</strong> <a href="mailto:admissions@bulingatss.rw" style={styles.link}>admissions@bulingatss.rw</a></p>
          </div>

          {/* Card 3: Office Hours */}
          <div style={styles.infoCard}>
            <h3 style={styles.cardTitle}>🕘 Office Hours</h3>
            <p><strong>Monday – Friday:</strong> 8:00 AM – 4:00 PM</p>
            <p><strong>Saturday:</strong> 9:00 AM – 12:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
          </div>
        </div>

        {/* === Google Map === */}
        <div style={styles.mapSection}>
          <h2 style={styles.sectionTitle}>Find Us on Map</h2>
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

        {/* === Contact Form === */}
        <div style={styles.formSection}>
          <h2 style={styles.sectionTitle}>Send Us a Message</h2>
          <p style={styles.formSubtitle}>
            Have questions about enrollment, programs, or visits? Fill out the form below.
          </p>

          {submitted ? (
            <div style={styles.successMessage}>
              ✅ Thank you! Your message has been sent. We'll reply within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message (e.g., inquiry about programs, admission, visit)"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={styles.textarea}
                />
              </div>

              <button type="submit" className="btn" style={styles.submitButton}>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* === Social Media & CTA === */}
        <div style={styles.footerSection}>
          <p style={styles.footerText}>
            <strong>Follow Us:</strong>
          </p>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialLink}>📘 Facebook</a>
            <a href="#" style={styles.socialLink}>📷 Instagram</a>
            <a href="#" style={styles.socialLink}>📱 WhatsApp</a>
          </div>
          <p style={{ ...styles.footerText, marginTop: '1rem' }}>
            We welcome prospective students, parents, and partners to connect with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// === STYLES ===
const styles = {
  section: {
    width: '100%',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f4f6f9',
    color: '#333'
  },

  // Hero
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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

  // Map
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
  mapContainer: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)'
  },

  // Form
  formSection: {
    marginBottom: '4rem',
    textAlign: 'center'
  },
  formSubtitle: {
    fontSize: '1.1rem',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto 2rem'
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto'
  },
  inputGroup: {
    marginBottom: '1.2rem'
  },
  input: {
    width: '100%',
    padding: '14px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
    boxSizing: 'border-box'
  },
  textarea: {
    width: '100%',
    padding: '14px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
    minHeight: '120px',
    resize: 'vertical',
    boxSizing: 'border-box'
  },
  submitButton: {
    padding: '14px 30px',
    fontSize: '1.1rem',
    fontWeight: '500',
    marginTop: '1rem'
  },

  // Success Message
  successMessage: {
    padding: '1.5rem',
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
    borderRadius: '8px',
    fontSize: '1.1rem',
    textAlign: 'center',
    marginBottom: '2rem'
  },

  // Footer / Social
  footerSection: {
    textAlign: 'center',
    marginTop: '3rem',
    paddingTop: '2rem',
    borderTop: '1px solid #ddd'
  },
  footerText: {
    color: '#555',
    margin: '0.5rem 0'
  },
  socialLinks: {
    marginTop: '1rem'
  },
  socialLink: {
    color: '#0056b3',
    margin: '0 1rem',
    textDecoration: 'none',
    fontWeight: '500'
  },
  link: {
    color: '#0056b3',
    textDecoration: 'none'
  }
};