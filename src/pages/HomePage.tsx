import React from 'react';
import { ArrowRight, Code, Users, Zap, Trophy } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              稳健IT社
              <span className="hero-subtitle">Wenjian IT</span>
            </h1>
            <p className="hero-description">
              专注于技术创新与实践的学生社团，致力于培养优秀的IT人才，
              推动技术发展，创造数字化未来。
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                加入我们 <ArrowRight className="btn-icon" />
              </button>
              <button className="btn-secondary">
                了解更多
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="tech-grid">
              <div className="tech-item">
                <Code className="tech-icon" />
                <span>前端开发</span>
              </div>
              <div className="tech-item">
                <Users className="tech-icon" />
                <span>团队协作</span>
              </div>
              <div className="tech-item">
                <Zap className="tech-icon" />
                <span>技术创新</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="features-section">
        <div className="container">
          <h2 className="section-title">核心服务</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Code />
              </div>
              <h3>技术培训</h3>
              <p>提供前端、后端、移动开发等全栈技术培训，助力成员技能提升</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h3>项目实战</h3>
              <p>组织真实项目开发，让成员在实践中积累经验，提升实战能力</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Trophy />
              </div>
              <h3>竞赛指导</h3>
              <p>参与各类编程竞赛和技术比赛，为成员提供专业指导和支持</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">活跃成员</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">完成项目</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">获奖项目</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3年</div>
              <div className="stat-label">发展历程</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Latest Updates */}
      <section className="updates-section">
        <div className="container">
          <h2 className="section-title">最新动态</h2>
          <div className="updates-grid">
            <div className="update-card">
              <div className="update-date">2024.01</div>
              <h3>秋季招新开始</h3>
              <p>稳健IT社2025年春季招新正式启动，欢迎对技术充满热情的同学加入我们</p>
              <div className="update-tags">
                <span className="tag">招新</span>
                <span className="tag">2025</span>
              </div>
            </div>
            {/* <div className="update-card">
              <div className="update-date">2023.12</div>
              <h3>年度项目展示</h3>
              <p>社团成员完成多个优秀项目，涵盖Web开发、移动应用、AI应用等领域</p>
              <div className="update-tags">
                <span className="tag">项目</span>
                <span className="tag">展示</span>
              </div>
            </div>
            <div className="update-card">
              <div className="update-date">2023.11</div>
              <h3>技术分享会</h3>
              <p>举办前端技术分享会，邀请行业专家分享最新技术趋势和实践经验</p>
              <div className="update-tags">
                <span className="tag">分享会</span>
                <span className="tag">前端</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;