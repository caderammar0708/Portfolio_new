import React from 'react';
import { Code2, Bot, Database, Workflow } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      icon: <Code2 size={24} />,
      description: "Node.js/JavaScript, PHP/Laravel, React.js, MySQL database design, and backend API development.",
      tags: ["React.js", "Node.js", "Laravel", "PHP", "MySQL", "APIs"]
    },
    {
      title: "Voice & AI Technologies",
      icon: <Bot size={24} />,
      description: "Twilio Voice API, VAPI AI Voice Platform, OpenAI and real-time voice interaction systems and chatbots.",
      tags: ["OpenAI", "VAPI", "Twilio", "Chatbots", "Voice Agents"]
    },
    {
      title: "CRM & Business Systems",
      icon: <Database size={24} />,
      description: "CRM integration (HubSpot/GHL/Custom), lead capture & qualification, and marketing & sales automation.",
      tags: ["GoHighLevel", "HubSpot", "Lead Qualification", "Sales Automation"]
    },
    {
      title: "Automation Platforms",
      icon: <Workflow size={24} />,
      description: "Developing automated workflows using industry-leading platforms to connect apps and systems.",
      tags: ["Make.com", "n8n", "Zapier", "Webhooks"]
    }
  ];

  return (
    <section id="skills" style={{ background: 'rgba(25, 25, 35, 0.3)' }}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Expertise & Skills</h2>
        
        <div className="grid-2">
          {skillCategories.map((category, index) => (
            <div key={index} className={`glass-card animate-on-scroll delay-${(index + 1) * 100}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ 
                  background: 'var(--accent-gradient)', 
                  padding: '1rem', 
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem' }}>{category.title}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                {category.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {category.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="badge">
                    {tag}
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

export default Skills;
