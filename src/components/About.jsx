import React from 'react';
import { BookOpen, GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title animate-on-scroll">About Me</h2>

        <div className="grid-2" style={{ gap: '4rem' }}>
          <div className="animate-on-scroll delay-100">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Background</h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              I am a passionate Software Developer and AI Automation Developer with extensive experience in building scalable web applications and intelligent systems. My expertise lies in bridging the gap between traditional software development and modern AI capabilities.
            </p>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              I specialize in developing POS systems, eCommerce integrations, HR management platforms, and cloud-based accounting software. Furthermore, I design automation workflows and AI voice agents for streamlined business operations.
            </p>

            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Contact Information</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                  <Phone size={18} className="text-gradient" /> +94761719132
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                  <Mail size={18} className="text-gradient" /> [caderammar2006@gmail.com]
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={18} className="text-gradient" /> 152, Pallivasalturai, Kalpitiya, Puttalam
                </li>
              </ul>
            </div>
          </div>

          <div className="animate-on-scroll delay-200">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>Education</h3>

            <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.8rem', borderRadius: '1rem' }}>
                  <GraduationCap size={24} color="var(--accent-color)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Bachelor of Information Technology (BIT)</h4>
                  <p style={{ color: 'var(--accent-color)', fontWeight: 500, marginBottom: '0.5rem' }}>University of Colombo</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Currently Reading</p>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.8rem', borderRadius: '1rem' }}>
                  <BookOpen size={24} color="var(--accent-color)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Diploma in Full Stack Development</h4>
                  <p style={{ color: 'var(--accent-color)', fontWeight: 500, marginBottom: '0.5rem' }}>IMTS - Puttalam</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
