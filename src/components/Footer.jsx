import React from 'react';
import { Mail } from 'lucide-react';

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h2 className="text-gradient" style={{ fontFamily: 'Outfit', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>
          Ammar.
        </h2>
        <p style={{ marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
          Building scalable web applications and intelligent automation systems.
        </p>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/cader-ammar-39a090357/" target="_blank" rel="noreferrer" className="social-icon">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:caderammar2006@gmail.com" className="social-icon">
            <Mail size={20} />
          </a>
        </div>
        
        <p style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Ammar Cader. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
