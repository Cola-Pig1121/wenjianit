import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import TeamCard from '../components/TeamCard';
import { Users, Code } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  image: string;
  description: string;
  displayId?: string;
}

const TeamPage: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      let { data: team, error } = await supabase
        .from('team')
        .select('id, name, image, description')
        .order('id');

      if (error) {
        console.error('Error fetching team data:', error);
        setTeam([
          { id: 1, name: '张三', image: '/placeholder.svg?height=200&width=200', description: '前端开发工程师，专注React开发' },
          { id: 2, name: '李四', image: '/placeholder.svg?height=200&width=200', description: '后端开发工程师，Node.js专家' },
          { id: 3, name: '王五', image: '/placeholder.svg?height=200&width=200', description: 'UI/UX设计师，用户体验专家' },
          { id: 4, name: '赵六', image: '/placeholder.svg?height=200&width=200', description: '移动开发工程师，Flutter开发者' },
          { id: 5, name: '钱七', image: '/placeholder.svg?height=200&width=200', description: '全栈开发工程师，技术架构师' },
          { id: 6, name: '孙八', image: '/placeholder.svg?height=200&width=200', description: '数据分析师，AI算法工程师' }
        ]);
      } else {
        if (team && team.length > 0) {
          setTeam(team);
        } else {
          setTeam([
            { id: 1, name: '张三', image: '/placeholder.svg?height=200&width=200', description: '前端开发工程师，专注React开发' },
            { id: 2, name: '李四', image: '/placeholder.svg?height=200&width=200', description: '后端开发工程师，Node.js专家' },
            { id: 3, name: '王五', image: '/placeholder.svg?height=200&width=200', description: 'UI/UX设计师，用户体验专家' },
            { id: 4, name: '赵六', image: '/placeholder.svg?height=200&width=200', description: '移动开发工程师，Flutter开发者' },
            { id: 5, name: '钱七', image: '/placeholder.svg?height=200&width=200', description: '全栈开发工程师，技术架构师' },
            { id: 6, name: '孙八', image: '/placeholder.svg?height=200&width=200', description: '数据分析师，AI算法工程师' }
          ]);
        }
      }
    };

    fetchTeam();
  }, []);



  return (
    <div className="team-page">
      {/* Team Hero */}
      <section className="team-hero">
        <div className="container">
          <h1 className="page-title">团队介绍</h1>
          <p className="page-subtitle">
            认识稳健IT社的优秀成员和专业团队
          </p>
        </div>
      </section>

      {/* Team Overview */}
      <section className="team-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>团队概览</h2>
              <p>
                稳健IT社拥有一支充满活力和创新精神的团队，成员来自不同专业背景，
                共同致力于技术学习和项目实践。我们按照技术方向划分为多个部门，
                每个部门都有专业的技术指导和完善的培训体系。
              </p>
              <div className="team-stats">
                <div className="stat-item">
                  <Users className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-number">10+</span>
                    <span className="stat-text">总成员数</span>
                  </div>
                </div>
                {/* <div className="stat-item">
                  <Code className="stat-icon" />
                  <div className="stat-info">
                    <span className="stat-number">4</span>
                    <span className="stat-text">技术部门</span>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="overview-visual">
              <div className="team-structure">
                <div className="structure-item">
                  <div className="structure-circle">核心团队</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="core-team-section">
        <div className="container">
          <h2 className="section-title">核心成员</h2>
          {team.length === 0 ? (
            <div className="no-data">
              <p>暂无团队成员信息</p>
              <p>请检查数据库连接或添加团队成员数据</p>
            </div>
          ) : (
            <div className="team-cards-wrapper">
              <div className="team-cards-scroll">
                {team.map((member) => (
                  <div key={member.id} className="team-card-container">
                    <TeamCard
                      image={member.image}
                      name={member.name}
                      description={member.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Join Us */}
      <section className="join-us-section">
        <div className="container">
          <div className="join-us-content">
            <h2>加入我们</h2>
            <p>
              稳健IT社欢迎对技术充满热情的同学加入我们的大家庭。
              无论你是编程新手还是技术大牛，都能在这里找到适合的位置。
            </p>
            <div className="join-requirements">
              <div className="requirement-item">
                <h3>基本要求</h3>
                <ul>
                  <li>对技术有浓厚兴趣</li>
                  <li>具备学习能力和团队合作精神</li>
                  <li>愿意参与社团活动和项目实践</li>
                </ul>
              </div>
              <div className="requirement-item">
                <h3>加分项</h3>
                <ul>
                  <li>有编程基础或相关项目经验</li>
                  <li>熟悉Git版本控制工具</li>
                  <li>有开源项目贡献经验</li>
                </ul>
              </div>
            </div>
            <div className="join-buttons">
              <button className="btn-primary">立即申请</button>
              <button className="btn-secondary">了解更多</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;