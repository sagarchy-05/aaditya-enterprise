'use client';

import React from 'react';
import s from '../../../styles/OurTeam.module.css';

const employees = [
  {
    name: 'Sourav Shaw',
    position: 'Co-Founder',
    img: '/home-article.jpg',
    id: 1,
  },

  {
    name: 'Sourav Shaw',
    position: 'Co-Founder',
    img: '/home-article.jpg',
    id: 2,
  },

  {
    name: 'Sourav Shaw',
    position: 'Co-Founder',
    img: '/home-article.jpg',
    id: 3,
  },

  {
    name: 'Sourav Shaw',
    position: 'Co-Founder',
    img: '/home-article.jpg',
    id: 4,
  },

  {
    name: 'Sourav Shaw',
    position: 'Co-Founder',
    img: '/home-article.jpg',
    id: 5,
  },

  {
    name: 'Sourav Shaw',
    position: 'Co-Founder',
    img: '/home-article.jpg',
    id: 6,
  },
];

interface EmployeeProps {
  img: string;
  position: string;
  name: string;
  number: number;
}

const Employee: React.FC<EmployeeProps> = ({ img, position, name, number }) => {
  return (
    <article className={s.book} data-aos='flip-right'>
      <span className={s.number}>{`# ${number + 1}`}</span>
      <img src={img} alt={position} />
      <h2>{name}</h2>
      <h4>{position}</h4>
    </article>
  );
};

const OurTeam: React.FC = () => {
  return (
    <>
      <div className={s.container}>
        <h1 className={s.heading}>Our Team</h1>
        <section className={s.booklist}>
          {employees.map((employee, index) => {
            return <Employee {...employee} key={employee.id} number={index} />;
          })}
        </section>
      </div>
    </>
  );
};

export default OurTeam;
