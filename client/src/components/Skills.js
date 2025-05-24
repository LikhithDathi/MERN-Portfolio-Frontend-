import React, { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiCplusplus, SiMysql } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Skills.css';

const skillsData = [
  { name: 'React', icon: <FaReact />, level: 90, color: '#61DBFB' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 85, color: '#68A063' },
  { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#4DB33D' },
  { name: 'Express', icon: <SiExpress />, level: 75, color: '#000000' },
  { name: 'JavaScript', icon: <SiJavascript />, level: 95, color: '#F0DB4F' },
  { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: '#E34C26' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 85, color: '#264de4' },
  { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#F1502F' },
  { name: 'Java', icon: <FaJava />, level: 80, color: '#007396' },
  { name: 'Python', icon: <FaPython />, level: 80, color: '#306998' },
  { name: 'C++', icon: <SiCplusplus />, level: 75, color: '#00599C' },
  { name: 'MySQL', icon: <SiMysql />, level: 85, color: '#4479A1' },
];

const Skills = () => {
  const [expanded, setExpanded] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true
    });
  }, []);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'other', name: 'Other' }
  ];

  const filteredSkills = skillsData.filter(skill => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'frontend') {
      return ['React', 'HTML5', 'CSS3', 'JavaScript'].includes(skill.name);
    }
    if (activeCategory === 'backend') {
      return ['Node.js', 'Express', 'Java', 'Python', 'C++'].includes(skill.name);
    }
    if (activeCategory === 'database') {
      return ['MongoDB', 'MySQL'].includes(skill.name);
    }
    if (activeCategory === 'other') {
      return ['Git'].includes(skill.name);
    }
    return true;
  });

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header" data-aos="fade-up">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-categories" data-aos="fade-up">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="skills-grid" data-aos="fade-up" data-aos-delay="200">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card ${expanded === index ? 'expanded' : ''}`}
              onClick={() => toggleExpand(index)}
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-icon">
                {React.cloneElement(skill.icon, { color: skill.color })}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              
              <div className={`skill-details ${expanded === index ? 'visible' : ''}`}>
                <div className="skill-level">
                  <span className="level-percent">{skill.level}%</span>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
                <div className="skill-description">
                  {getSkillDescription(skill.name)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function for skill descriptions
function getSkillDescription(skillName) {
  const descriptions = {
    'React': 'Building interactive UIs with components and hooks',
    'Node.js': 'Creating scalable server-side applications',
    'MongoDB': 'NoSQL database for modern applications',
    'Express': 'Minimalist web framework for Node.js',
    'JavaScript': 'Versatile language for web development',
    'HTML5': 'Semantic markup for web content',
    'CSS3': 'Styling and animations for beautiful interfaces',
    'Git': 'Version control and collaboration',
    'Java': 'Object-oriented programming language',
    'Python': 'General-purpose programming language',
    'C++': 'High-performance system programming',
    'MySQL': 'Relational database management system'
  };
  return descriptions[skillName] || 'Professional experience with this technology';
}

export default Skills;