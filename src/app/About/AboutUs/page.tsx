'use client';

import Head from 'next/head';
import s from '../../../styles/aboutUs.module.css';
import NewCarousel from '@/components/NewCarousel';

export default function test() {
  const carouselImages: string[] = [
    '/home-article.jpg',
    '/home-article.jpg',
    '/home-article.jpg',
    '/home-article.jpg',
    '/home-article.jpg',
    '/home-article.jpg',
  ];
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div id={s.container}>
        <div id={s.firstAbout}>
          <h1 className={s.mainHeading}>About Us</h1>
          <h3 className={s.subHeading}>
            We are the most trusted Business Partner
          </h3>
          <p className={s.aboutDescription}>
            Riddhi Corporate Services Limited (RCSL), a part of Riddhi Group was
            incorporated in 2010 under the Company’s Act 1956. They offer a
            gamut of solutions under Document Management, inbound and outbound
            Contact Centre, Data Entry, Software Development, Verification
            Services and Recruitment Services. Mr. Alpit Gor, Director, Riddhi
            Corporate Services Limited elucidates, “Financial institutions and
            telecom companies spend a huge amount of money on field operations
            for credit score and address verification. The idea of RCSL emerged
            from this analysis and we started our operations to curb unnecessary
            costs and proficiently support business needs of Telecom, Banking,
            NBFC and IT sectors. We have in-house IT development team, who are
            capable to work on various technologies and fulfil the need of our
            customers. Also, our wide distribution network and efficient
            logistics department offers comprehensive global logistics solutions
            for the transit needs of various companies and individuals in a
            prompt manner.” <br /> <br /> RCSL is a venture of renowned experts
            in BFSI sectors who aspires to serve the industry and its customers
            through highly skilled manpower, advanced technology and
            best-in-class infrastructure and unmatched industry experience.
            Company’s first major development happened in 2011, when they got an
            opportunity to cater to leading telecom operator in 3 circles,
            Rajasthan, Madhya Pradesh, Chhattisgarh and Orissa for end-to-end
            CAF management activity (including Warehousing). Cut to 2018, today,
            RCSL has become one of the most admired business partners in areas
            of Digitization, Documentation, Field Verification and Warehousing
            to Telecom, Banking and Financial Sectors across India. <br />
            <br /> Growing up with virtues of superior Customer Service,
            Innovation, Quality and Commitment, RCSL has bagged ISO 9001:2015,
            ISO 27001:2013 & CMMi Level-3 certification and has been
            successfully providing Customer Point Verification, eKYC, Record
            Management & Collection services to various banks and NBFC like Axis
            Bank, Bajaj Finance, Bank of Baroda, HDFC Bank, Hero Fincorp,
            Muthoot Housing Finance, Paytm, Reliance Home Finance, State Bank of
            India and Tata Capital. With a headcount of more than 3500 and a
            strong PAN India presence, Riddhi Corporate Services Limited is
            wishing to continue their operations with same quality and expand
            their business into more areas.
          </p>
        </div>
        <div id={s.secondAbout}>
          <NewCarousel images={carouselImages} />
        </div>
        <div id={s.thirdAbout}>
          <h3 className={s.thirdSubHeading} data-aos='fade-up-right'>
            Why Choose Us?
          </h3>
          <h1 className={s.thirdHeading} data-aos='fade-up-right'>
            Our specialized teams lead the product design and development
            process for high growth companies.
          </h1>
          <section className={s.whyChoseUs}>
            <div data-aos='flip-right'>
              <img src='/stopwatch.png' alt='photo' />
              <h4 className={s.whyUsHeading}>
                Skilled & Friendly <br /> Staff
              </h4>
              <p className={s.whyUsDescription}>
                Get enthusiastic, friendly and dedicated staff for your projects
              </p>
            </div>
            <div data-aos='flip-right'>
              <img src='/stopwatch.png' alt='photo' />
              <h4 className={s.whyUsHeading}>
                Consistent <br />
                Results
              </h4>
              <p className={s.whyUsDescription}>
                Receive consistent and improved results every passing day
              </p>
            </div>
            <div data-aos='flip-right'>
              <img src='/stopwatch.png' alt='photo' />
              <h4 className={s.whyUsHeading}>
                Fast Turnaround <br />
                Time
              </h4>
              <p className={s.whyUsDescription}>
                We respect deadlines that are the biggest strength to thrive
              </p>
            </div>
            <div data-aos='flip-right'>
              <img src='/stopwatch.png' alt='photo' />
              <h4 className={s.whyUsHeading}>
                Highest Customer <br />
                Satisfaction
              </h4>
              <p className={s.whyUsDescription}>
                Almost all our projects have achieved 99% customer satisfaction
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
