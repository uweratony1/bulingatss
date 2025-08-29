// src/components/Photos.jsx
import React, { useState } from 'react';

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // List of image filenames in /public/assets/images/
  const images = [
    'tony 1.jpg',
    'tony3.jpg',
    'tony4.jpg',
    'tony 1.jpg',
    'tony3.jpg',
    'tony4.jpg',
    'coding.jpg',
    'workshop.jpg'
  ];

  const baseUrl = '/assets/images'; // Served from public/

  const handleImageClick = (img) => {
    setSelectedImage(`${baseUrl}/${img}`);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section style={styles.section}>
      {/* Hero Banner */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Student Gallery</h1>
        <p style={styles.heroSubtitle}>Moments of learning, growth, and achievement at Bulinga TSS</p>
      </div>

      {/* Photo Grid */}
      <div style={styles.container}>
        <div style={styles.grid}>
          {images.map((img, idx) => {
            const imgUrl = `${baseUrl}/${img}`;
            return (
              <div key={idx} style={styles.photoCard}>
                <img
                  src={imgUrl}
                  alt={`Student photo ${idx + 1}`}
                  style={styles.photoImg}
                  onClick={() => handleImageClick(img)}
                  loading="lazy"
                />
                <div style={styles.overlay}>
                  <button
                    style={styles.downloadBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      const a = document.createElement('a');
                      a.href = imgUrl;
                      a.download = img;
                      a.click();
                    }}
                  >
                    ⬇️ Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div style={styles.modal} onClick={closeModal}>
          <span style={styles.closeBtn} onClick={closeModal}>
            &times;
          </span>
          <img
            src={selectedImage}
            alt="Enlarged view"
            style={styles.modalImage}
            onClick={(e) => e.stopPropagation()}
          />
          <div style={styles.modalActions}>
            <a
              href={selectedImage}
              download
              style={styles.modalDownloadBtn}
            >
              ⬇️ Download Full Image
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photos;

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

  // Photo Grid
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
    marginBottom: '4rem'
  },

  photoCard: {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    cursor: 'zoom-in',
    transition: 'transform 0.3s ease'
  },

  photoImg: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    display: 'block'
  },

  // Hover Overlay with Download Button
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },

  photoCardHover: {
    transform: 'scale(1.03)'
  },

  downloadBtn: {
    padding: '10px 20px',
    background: '#1E90FF',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'background 0.3s ease'
  },

  // Modal (Lightbox)
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1001,
    padding: '2rem'
  },

  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '30px',
    color: 'white',
    fontSize: '3rem',
    cursor: 'pointer',
    background: 'none',
    border: 'none'
  },

  modalImage: {
    maxWidth: '90vw',
    maxHeight: '80vh',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
  },

  modalActions: {
    marginTop: '1rem',
    textAlign: 'center'
  },

  modalDownloadBtn: {
    padding: '12px 24px',
    background: '#1E90FF',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1.1rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  }
};

// Add hover effect using JS (simulate :hover)
for (const el of document.querySelectorAll('[style*="photoCard"]')) {
  el.onmouseenter = (e) => {
    const img = e.currentTarget.querySelector('img');
    const overlay = e.currentTarget.querySelector('[style*="overlay"]');
    if (img) img.style.transform = 'scale(1.05)';
    if (overlay) overlay.style.opacity = 1;
  };
  el.onmouseleave = (e) => {
    const img = e.currentTarget.querySelector('img');
    const overlay = e.currentTarget.querySelector('[style*="overlay"]');
    if (img) img.style.transform = 'scale(1)';
    if (overlay) overlay.style.opacity = 0;
  };
}