import React, { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import TeamCard from './TeamCard';

interface TeamMember {
  id: number;
  name: string;
  image: string;
  description: string;
}

const LandingPage: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      console.log('Fetching team data from Supabase...');
      console.log('Supabase URL:', process.env.REACT_APP_SUPABASE_URL);
      
      let { data: team, error } = await supabase
        .from('team')
        .select('id, name, image, description')
        .order('id');

      if (error) {
        console.error('Error fetching team data:', error);
        console.error('Error details:', error.message);
      } else {
        console.log('Team data loaded:', team);
        setTeam(team || []);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="landing-page">
      <h1>Welcome to Stable IT Club</h1>
      <div className="team-cards">
        {team.length === 0 ? (
          <div className="no-data">
            <p>暂无团队成员信息</p>
            <p>请检查数据库连接或添加团队成员数据</p>
          </div>
        ) : (
          team.map((member) => (
            <TeamCard
              key={member.id}
              image={member.image}
              name={member.name}
              description={member.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LandingPage;