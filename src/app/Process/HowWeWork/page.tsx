'use client';

import { useState } from 'react';
import Head from 'next/head';
import s from '../../../styles/howWeWork.module.css';

export default function HowWeWork() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const handleQuestionClick = (questionIndex: number) => {
    setActiveQuestion((prevQuestion) =>
      prevQuestion === questionIndex ? null : questionIndex
    );
  };

  return (
    <>
      <Head>
        <title>How We Work</title>
      </Head>
      <div className={s.heading}>How We Work</div>
      <div id={s.container}>
        <div className={s.plainText}>
          Every potential client comes to us with an idea or their problems in
          mind. But in order to be efficient in making that idea into reality or
          providing innovative solutions to the client, we’re constantly
          refining our processes. We think it’s important for us to be clear
          with you about how we work, so we are all on the same page, working
          together productively.
        </div>
        <div className={s.plainText}>
          We deliver business and technology transformation from start to
          finish, leveraging various methodologies, industry best practices,
          proven customer collaboration frameworks, engineering excellence tools
          and hybrid teams. We work on a wide variety of projects; we know each
          project will be different so we approach each project with an open
          mind. Here is how we work with you to get your project from stage A to
          stage B:
        </div>
        <div className={s.dropdown}>
          <ul>
            <li
              className={`${s.eachQuestion} ${
                activeQuestion === 1 ? s.activeQuestion : ''
              }`}
              onClick={() => handleQuestionClick(1)}
            >
              <div className={s.dropHeading}>
                <p>1. ESTABLISH CONTACT</p>
                <img src='/icon-arrow-down.svg' alt='arrow-down' />
              </div>
              <div className={s.dropHidden}>
                • You fill the inquire form <br />• The sales team calls or
                emails you
              </div>
            </li>
            <li
              className={`${s.eachQuestion} ${
                activeQuestion === 2 ? s.activeQuestion : ''
              }`}
              onClick={() => handleQuestionClick(2)}
            >
              <div className={s.dropHeading}>
                <p>2. REQUIREMENT ANALYSIS</p>
                <img src='/icon-arrow-down.svg' alt='arrow-down' />
              </div>
              <div className={s.dropHidden}>
                • High level understanding of requirements <br /> • Ballpark
                estimate (where possible) <br /> • Approval to go ahead <br /> •
                Detailed understanding of your requirements <br /> • Execute a
                pilot project (if required)
              </div>
            </li>
            <li
              className={`${s.eachQuestion} ${
                activeQuestion === 3 ? s.activeQuestion : ''
              }`}
              onClick={() => handleQuestionClick(3)}
            >
              <div className={s.dropHeading}>
                <p>3. PRICING & CONTRACTING</p>
                <img src='/icon-arrow-down.svg' alt='arrow-down' />
              </div>
              <div className={s.dropHidden}>
                • Confirm pricing <br /> • Proposal where required <br /> •
                Contracting & SLA sign-off
              </div>
            </li>
            <li
              className={`${s.eachQuestion} ${
                activeQuestion === 4 ? s.activeQuestion : ''
              }`}
              onClick={() => handleQuestionClick(4)}
            >
              <div className={s.dropHeading}>
                <p>4. PROJECT INITIATION</p>
                <img src='/icon-arrow-down.svg' alt='arrow-down' />
              </div>
              <div className={s.dropHidden}>
                • Resource deployment & Training <br /> • Project kick-off
                meeting
              </div>
            </li>
            <li
              className={`${s.eachQuestion} ${
                activeQuestion === 5 ? s.activeQuestion : ''
              }`}
              onClick={() => handleQuestionClick(5)}
            >
              <div className={s.dropHeading}>
                <p>5. PROJECT STEADY STATE</p>
                <img src='/icon-arrow-down.svg' alt='arrow-down' />
              </div>
              <div className={s.dropHidden}>
                • Project execution & management <br /> • On-going reporting &
                feedback
              </div>
            </li>
          </ul>
        </div>
        <div className={s.plainText}>
          Let’s talk. To get your project underway, simply contact us and an
          expert will get in touch with you as soon as possible.
        </div>
      </div>
    </>
  );
}
