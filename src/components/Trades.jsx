// src/components/Trades.jsx
import React from 'react';

const Trades = () => {
  // Define trade programs
  const tradesList = [
    {
      name: "Carpentry",
      desc: "Learn framing, roofing, cabinetry, and more."
    },
    {
      name: "Electrical",
      desc: "Master wiring, circuits, and electrical systems."
    },
    {
      name: "Plumbing",
      desc: "Install and repair pipes, fixtures, and water systems."
    },
    {
      name: "Welding",
      desc: "Work with metals using arc, MIG, and TIG techniques."
    },
    {
      name: "HVAC",
      desc: "Heating, Ventilation, and Air Conditioning systems."
    },
    {
      name: "Automotive",
      desc: "Engine repair, diagnostics, and vehicle maintenance."
    }
  ];

  return (
    <section>
      <h2>Our Trades Programs</h2>
      <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem', color: '#555' }}>
        We offer comprehensive training in high-demand skilled trades with hands-on labs and certified instructors.
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        padding: '0 1rem'
      }}>
        {tradesList.map((trade, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '10px',
              width: '280px',
              padding: '1.5rem',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <h3 style={{
              color: '#000',
              marginBottom: '0.8rem',
              fontSize: '1.4rem'
            }}>
              {trade.name}
            </h3>
            <p style={{
              color: '#555',
              lineHeight: '1.6'
            }}>
              {trade.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trades;