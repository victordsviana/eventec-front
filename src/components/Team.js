import React from 'react';
import MemberCard from './MemberCard';

const Team = () => {
  const teamMembers = [
    {
      name: 'Guilherme Henrique',
      role: 'Documentação',
      imageUrl: 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png',
    },
    {
      name: 'Níkolas Costa',
      role: 'Front-End',
      imageUrl: 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png',
    },
    {
      name: 'Victor Viana',
      role: 'Back-End',
      imageUrl: 'https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png',
    },
  ];

  return (
    <div className='TeamContainer'>
      <div>
        <h1 id='teamId'>Nossa Equipe</h1>
      </div>
        <div className='membersCard'>
          {teamMembers.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
    </div>
  );
};

export default Team;
