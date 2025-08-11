import React, { useState } from 'react';
import { Github, ExternalLink, Star, Code, Smartphone, Globe, Database } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: '智能校园管理系统',
      description: '基于React和Node.js开发的校园信息管理平台，包含学生管理、课程安排、成绩查询等功能',
      image: '/placeholder.svg?height=200&width=300',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/wenjianit/campus-system',
      demo: 'https://campus.wenjianit.com',
      stars: 45
    }
  ];

  const categories = [
    { id: 'all', name: '全部项目', icon: Code },
    { id: 'web', name: 'Web开发', icon: Globe },
    { id: 'mobile', name: '移动应用', icon: Smartphone },
    { id: 'data', name: '数据分析', icon: Database },
    { id: 'ai', name: '人工智能', icon: Star },
    { id: 'blockchain', name: '区块链', icon: Code }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      {/* Projects Hero */}
      <section className="projects-hero">
        <div className="container">
          <h1 className="page-title">项目展示</h1>
          <p className="page-subtitle">
            展示稳健IT社成员的优秀作品和技术实践成果
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  className={`filter-tab ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  <IconComponent className="filter-icon" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <Github className="link-icon" />
                      </a>
                      <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="link-icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-stars">
                      <Star className="star-icon" />
                      <span>{project.stars}</span>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title">技术栈</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>前端技术</h3>
              <div className="tech-tags">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Angular</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>后端技术</h3>
              <div className="tech-tags">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Java</span>
                <span className="tech-tag">Go</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">Django</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>数据库</h3>
              <div className="tech-tags">
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">Supabase</span>
              </div>
            </div>
            <div className="tech-category">
              <h3>移动开发</h3>
              <div className="tech-tags">
                <span className="tech-tag">Flutter</span>
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Swift</span>
                <span className="tech-tag">Kotlin</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;