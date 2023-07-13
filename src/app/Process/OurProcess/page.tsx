'use client';

import v from '../../../styles/howWeWork.module.css';
import s from '../../../styles/ourProcess.module.css';
import Head from 'next/head';

export default function ourProcess() {
  return (
    <>
      <Head>
        <title>Our Process</title>
      </Head>
      <div className={v.heading}>Our Process</div>
      <div id={s.container}>
        <article data-aos='zoom-in' className={s.block}>
          <div className={s.blockHead}>FULLY DEVOTED TO THE PROJECT</div>
          <div className={s.blockDescr}>
            The secret to success is the balance between enjoying what you do
            and taking the responsibility to do it in the most adept way. Even
            though we already have people on 24/7 support, our developers often
            respond to business emails after working hours, to make sure your
            software platform is as good as it can possibly be. They do this out
            of choice, and we couldn’t be prouder of their drive and dedication
            to customer service and professional self-improvement.
          </div>
        </article>
        <article data-aos='zoom-in' className={`${s.block} ${s.specialBlock}`}>
          <div className={s.blockHead}>AGILE SOFTWARE DEVELOPMENT</div>
          <div className={s.blockDescr}>
            All of our teams follow Scrum methodology, which has proven to give
            great results and helps to keep all project stakeholders in sync..
            It helps us all be flexible for your requirements and have the
            software delivered in iterative steps. No matter if you are in
            Europe or America, everyone can take part in the daily standup or
            have a closer look in the Jira backlog.
          </div>
        </article>
        <article data-aos='zoom-in' className={s.block}>
          <div className={s.blockHead}>ALL THE TEAM IS ALIGNED</div>
          <div className={s.blockDescr}>
            We start our week with a regular breakfast at the office before
            working hours. During this time we discuss the new challenges that
            we are excited to face during the new week and get our software
            development team aligned. We believe that company culture and
            communication are essential in meeting every requirement of our
            clients. That is why we organize internal company events on which
            different teams present their experience and share ideas with others
            on how to improve their current project. We share, we give, we
            achieve – together.
          </div>
        </article>
        <article data-aos='zoom-in' className={`${s.block} ${s.specialBlock}`}>
          <div className={s.blockHead}>TEAMWORK</div>
          <div className={s.blockDescr}>
            Having regular knowledge sharing sessions, code reviews and daily
            standups means all the team members are well aligned and no one
            needs to reinvent the wheel when it comes to implementing a similar
            feature to already existing ones. You can count on shared knowledge
            and expertise from the rest of our teams working on other projects.
          </div>
        </article>
        <article data-aos='zoom-in' className={s.block}>
          <div className={s.blockHead}>REGULAR CALLS AND MEETINGS</div>
          <div className={s.blockDescr}>
            One of our top priorities is quick reaction time and accessibility.
            We really want to be your extended team, so apart from the regular
            daily/weekly meetings, you can be sure that each of our team members
            is one phone call, skype call or email away.
          </div>
        </article>
        <article data-aos='zoom-in' className={`${s.block} ${s.specialBlock}`}>
          <div className={s.blockHead}>STABLE DEMO ENVIRONMENT</div>
          <div className={s.blockDescr}>
            Many projects depend on the buy-in of all the stakeholders which is
            why we create demos to show progress and successfully implemented
            features, using real or test data. A stable test is an essential
            part of the process before going forward into production.
          </div>
        </article>
        <article data-aos='zoom-in' className={s.block}>
          <div className={s.blockHead}>QA AND TESTING</div>
          <div className={s.blockDescr}>
            Testing and validation is also crucial. For us, having a dedicated
            tester is a must, who will create test scenarios, catch regressions
            and produce automated integration, as well as unit and UI tests.
          </div>
        </article>
        <article data-aos='zoom-in' className={`${s.block} ${s.specialBlock}`}>
          <div className={s.blockHead}>CODE IS ALWAYS ACCESSIBLE – GIT/SVN</div>
          <div className={s.blockDescr}>
            When outsourcing a software project, by default both the delivered
            code and intellectual property are private property of the client.
            As such, we keep them accessible but secured in Git, SVN or
            Bitbucket.
          </div>
        </article>
        <article data-aos='zoom-in' className={s.block}>
          <div className={s.blockHead}>
            CONTINUOUS INTEGRATION, AUTOMATED DEPLOYMENT AND PROVISIONING
          </div>
          <div className={s.blockDescr}>
            Testing and validation process is always part of the development.
            For us it is a must to have a dedicated tester, creating test
            scenarios, catching regressions and producing automated integration,
            unit and UI tests.
          </div>
        </article>
        <article data-aos='zoom-in' className={`${s.block} ${s.specialBlock}`}>
          <div className={s.blockHead}>TEAM MOTIVATION</div>
          <div className={s.blockDescr}>
            At the end of the day we believe that motivation is the road to
            success. Through many team-building activities and events after
            working hours, we keep our team positive and ready for new
            accomplishments. Our people genuinely love what they do, and by
            maintaining that passion through our company culture, we can all
            achieve great things.
          </div>
        </article>
      </div>
    </>
  );
}
