import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Grow Digitec Pvt Ltd",
      role: "Software & Automation Developer",
      period: "2026 - Present",
      description: [
        "Developed AI automation systems and intelligent voice agents to streamline business operations, customer interactions, lead qualification, and appointment scheduling using Twilio, VAPI, OpenAI, Make.com, n8n, and GoHighLevel.",
        "Built scalable full stack web applications and business systems using Laravel, React.js, Node.js, PHP, and MySQL, including backend APIs, frontend interfaces, CRM integrations, database solutions, and workflow automation through APIs and webhooks."
      ]
    },
    {
      company: "Imara Software Solutions (Pvt) Ltd",
      role: "Automation Developer",
      period: "2025 - 2026",
      description: [
        "Contributed to the development of AI automation workflows, CRM integrations, and API-based business solutions using modern automation tools and third-party service integrations to improve operational efficiency and streamline business processes.",
        "Assisted in backend development, database design, and scalable web application development for business management systems."
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Work Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item animate-on-scroll delay-${(index + 1) * 100}`}>
              <div className="glass-card" style={{ marginLeft: '1rem' }}>
                <span className="timeline-date">{exp.period}</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {exp.role}
                </h3>
                <h4 style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                  {exp.company}
                </h4>
                
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      <span style={{ color: 'var(--accent-color)', marginTop: '0.3rem' }}>▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
