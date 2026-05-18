import React from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }} className="animate-on-scroll">
          <div className="badge" style={{ marginBottom: '1.5rem' }}>
            Available for New Opportunities
          </div>
          <h1 className="title">
            Hi, I'm <span className="text-gradient">Cader Ammar</span>
          </h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            Software & AI Automation Developer
          </h2>
          <p className="subtitle" style={{ marginBottom: '2.5rem' }}>
            I build scalable web applications, intelligent automation systems, and AI voice agents that streamline business operations and enhance customer interactions.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="mailto:caderammar2006@gmail.com" className="btn btn-outline">
              Contact Me <Mail size={18} />
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>Connect with me:</span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.linkedin.com/in/cader-ammar-39a090357/" target="_blank" rel="noreferrer" className="social-icon">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:caderammar2006@gmail.com" className="social-icon">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
