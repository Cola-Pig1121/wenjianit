import React from 'react';
import { Target, Heart, Lightbulb, Users, Award, Calendar } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">关于稳健IT社</h1>
          <p className="page-subtitle">
            Wenjian IT - 专注技术创新与人才培养的学生技术社团
          </p>
        </div>
      </section>

      {/* Mission Section */}
      {/* <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>我们的使命</h2>
              <p>
                稳健IT社成立于2021年，致力于为学生提供一个学习、交流和实践技术的平台。
                我们相信技术的力量能够改变世界，通过培养优秀的IT人才，
                推动技术创新，为数字化未来贡献力量。
              </p>
              <p>
                社团秉承"稳健发展，技术创新"的理念，注重理论与实践相结合，
                为成员提供全方位的技术培训和项目实战机会。
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-stats">
                <div className="mission-stat">
                  <Users className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-number">200+</span>
                    <span className="stat-text">活跃成员</span>
                  </div>
                </div>
                <div className="mission-stat">
                  <Award className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-number">15+</span>
                    <span className="stat-text">获奖项目</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">核心价值观</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Target />
              </div>
              <h3>专业专注</h3>
              <p>专注于技术领域的深度学习和实践，追求专业技能的不断提升</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Lightbulb />
              </div>
              <h3>创新思维</h3>
              <p>鼓励创新思维，勇于尝试新技术，推动技术发展和应用创新</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Users />
              </div>
              <h3>团队协作</h3>
              <p>重视团队合作，通过协作学习和项目实践，共同成长进步</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Heart />
              </div>
              <h3>分享精神</h3>
              <p>乐于分享知识和经验，营造开放包容的学习交流氛围</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">发展历程</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">
                <Calendar className="date-icon" />
                <span>2021.09</span>
              </div>
              <div className="timeline-content">
                <h3>社团成立</h3>
                <p>稳健IT社正式成立，首批20名成员加入，开始技术学习和交流活动</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">
                <Calendar className="date-icon" />
                <span>2022.03</span>
              </div>
              <div className="timeline-content">
                <h3>首个项目</h3>
                <p>完成社团首个Web项目开发，获得校内技术竞赛二等奖</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">
                <Calendar className="date-icon" />
                <span>2022.09</span>
              </div>
              <div className="timeline-content">
                <h3>规模扩大</h3>
                <p>社团成员突破100人，成立前端、后端、移动开发三个技术小组</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">
                <Calendar className="date-icon" />
                <span>2023.06</span>
              </div>
              <div className="timeline-content">
                <h3>技术突破</h3>
                <p>多个项目在省级竞赛中获奖，社团技术实力得到广泛认可</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">
                <Calendar className="date-icon" />
                <span>2024.01</span>
              </div>
              <div className="timeline-content">
                <h3>持续发展</h3>
                <p>社团成员达到200+人，建立完善的技术培训和项目实战体系</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Achievements Section */}
      {/* <section className="achievements-section">
        <div className="container">
          <h2 className="section-title">荣誉成就</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <Award className="achievement-icon" />
              <h3>优秀社团奖</h3>
              <p>2023年度校级优秀学生社团</p>
            </div>
            <div className="achievement-card">
              <Award className="achievement-icon" />
              <h3>技术创新奖</h3>
              <p>省级大学生创新创业大赛一等奖</p>
            </div>
            <div className="achievement-card">
              <Award className="achievement-icon" />
              <h3>最佳团队奖</h3>
              <p>全国大学生程序设计竞赛团体奖</p>
            </div>
            <div className="achievement-card">
              <Award className="achievement-icon" />
              <h3>社会贡献奖</h3>
              <p>为多家企业提供技术解决方案</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;