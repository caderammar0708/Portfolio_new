import React from 'react';
import { ExternalLink, Monitor, Server, Smartphone } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: "Online Accounting Software",
      description: "Co-developed a cloud-based accounting platform similar to QuickBooks with features such as invoicing, expense tracking, financial reporting, transaction management, and user-based access control.",
      tags: ["Cloud", "SaaS", "Financial App", "React", "Node.js"],
      icon: <Monitor size={24} />
    },
    {
      title: "Business Management Systems (POS, eCommerce & HR)",
      description: "Designed and developed business management systems including a POS system with eCommerce integration and an HR management platform. Features included inventory management, sales tracking, order management, customer management, payment handling, employee management, attendance tracking, payroll processing, leave management, and staff performance monitoring.",
      tags: ["POS", "eCommerce", "HR", "Laravel", "MySQL"],
      icon: <Server size={24} />
    },
    {
      title: "AI Voice Automation & Lead Management System",
      description: "Built and developed an AI-powered voice assistant capable of handling inbound business calls, automatically qualifying leads, and managing appointment scheduling and booking workflows through conversational AI.",
      tags: ["AI Voice", "Twilio", "VAPI", "OpenAI", "Automation"],
      icon: <Smartphone size={24} />
    },
    {
      title: "Business Automation Workflow Platform",
      description: "Developed automation systems that connect CRMs, APIs, and third-party services to streamline business operations.",
      tags: ["Make.com", "n8n", "GoHighLevel", "API Integrations"],
      icon: <Monitor size={24} />
    }
  ];

  return (
    <section id="projects" style={{ background: 'rgba(25, 25, 35, 0.3)' }}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Featured Projects</h2>
        
        <div className="grid-2">
          {projects.map((project, index) => (
            <div key={index} className={`glass-card animate-on-scroll delay-${(index % 2 + 1) * 100}`} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ 
                  background: 'rgba(99, 102, 241, 0.1)', 
                  padding: '1rem', 
                  borderRadius: '1rem',
                  color: 'var(--accent-color)'
                }}>
                  {project.icon}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a href="#" className="social-icon" style={{ width: '36px', height: '36px' }}>
                    <GithubIcon size={16} />
                  </a>
                  <a href="#" className="social-icon" style={{ width: '36px', height: '36px' }}>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7, flexGrow: 1 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 500 }}>
                    {tag}{tagIndex < project.tags.length - 1 ? ' • ' : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
