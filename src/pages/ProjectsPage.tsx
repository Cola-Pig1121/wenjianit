import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { Github, ExternalLink, Code, Smartphone, Globe, Database } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  github: string;
  demo: string;
}

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      let { data: works, error } = await supabase
        .from('works')
        .select('id, title, description, image, category, github, demo')
        .order('id');

      if (error) {
        console.error('Error fetching projects data:', error);
        setProjects([
          {
            id: 1,
            title: '智能校园管理系统',
            description: '基于React和Node.js开发的校园信息管理平台，包含学生管理、课程安排、成绩查询等功能',
            image: '/placeholder.svg?height=200&width=300',
            category: 'web',
            github: 'https://github.com/wenjianit/campus-system',
            demo: 'https://campus.wenjianit.com'
          }
        ]);
      } else {
        if (works && works.length > 0) {
          setProjects(works);
        } else {
          // 如果数据库为空，也使用模拟数据
          setProjects([
            {
              id: 1,
              title: '智能校园管理系统',
              description: '基于React和Node.js开发的校园信息管理平台，包含学生管理、课程安排、成绩查询等功能',
              image: '/placeholder.svg?height=200&width=300',
              category: 'web',
              github: 'https://github.com/wenjianit/campus-system',
              demo: 'https://campus.wenjianit.com'
            },
            {
              id: 2,
              title: '移动学习助手',
              description: 'Flutter开发的跨平台学习应用，支持在线课程、笔记管理、学习进度跟踪等功能',
              image: '/placeholder.svg?height=200&width=300',
              category: 'mobile',
              github: 'https://github.com/wenjianit/learning-app',
              demo: 'https://play.google.com/store/apps/learning-helper'
            },
            {
              id: 3,
              title: '数据可视化平台',
              description: '基于D3.js和Python的数据分析可视化平台，支持多种图表类型和实时数据展示',
              image: '/placeholder.svg?height=200&width=300',
              category: 'data',
              github: 'https://github.com/wenjianit/data-viz',
              demo: 'https://dataviz.wenjianit.com'
            },
            {
              id: 4,
              title: '在线代码编辑器',
              description: 'Web端代码编辑器，支持多种编程语言语法高亮、代码补全和在线运行功能',
              image: '/placeholder.svg?height=200&width=300',
              category: 'web',
              github: 'https://github.com/wenjianit/code-editor',
              demo: 'https://editor.wenjianit.com'
            },
            {
              id: 5,
              title: 'AI聊天机器人',
              description: '基于自然语言处理的智能聊天机器人，支持多轮对话和知识问答',
              image: '/placeholder.svg?height=200&width=300',
              category: 'ai',
              github: 'https://github.com/wenjianit/ai-chatbot',
              demo: 'https://chat.wenjianit.com'
            },
            {
              id: 6,
              title: '区块链投票系统',
              description: '基于以太坊的去中心化投票系统，确保投票过程的透明性和不可篡改性',
              image: '/placeholder.svg?height=200&width=300',
              category: 'blockchain',
              github: 'https://github.com/wenjianit/blockchain-voting',
              demo: 'https://vote.wenjianit.com'
            }
          ]);
        }
      }
    };

    fetchProjects();
  }, []);

  const categories = [
    { id: 'all', name: '全部项目', icon: Code },
    { id: 'web', name: 'Web开发', icon: Globe },
    { id: 'mobile', name: '移动应用', icon: Smartphone },
    { id: 'data', name: '数据分析', icon: Database },
    { id: 'ai', name: '人工智能', icon: Code },
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
                  </div>
                  <p className="project-description">{project.description}</p>
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