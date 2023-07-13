'use client';

import s from '../../styles/stylesHome.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <div id={s.serviceMain}>
        <div className={s.serviceLeft}>
          <h1 className={s.heading}>Our Services</h1>
          <p className={s.serviceDescri}>
            We are dedicated to offering our clients with the most efficient
            logistic solutions pan India that helps them save cost and improve
            staff morale through outsourcing. Our wide distribution network and
            logistics department help us in providing services that make our
            partners grow their technology and business.
          </p>
          <div>
            <ul>
              <li>
                <Link href='/Services/3PLWarehousingManagementServices'>
                  1. Warehouse Mangament
                </Link>
              </li>
              <li>
                <Link href='/Services/ContactCentre'>2. Contact Centre</Link>
              </li>
              <li>
                <Link href='/Services/DocumentsDigitization'>
                  3. Documents Digitalisation
                </Link>
              </li>
              <li>
                <Link href='/Services/DataEntry'>4. Data Entry</Link>
              </li>
              <li>
                <Link href='/Services/WebDataEnabled'>
                  5. Web / Data Enabled
                </Link>
              </li>
              <li>
                <Link href='/Services/FieldVerificationservice'>
                  6. Field Services
                </Link>
              </li>
              <li>
                <Link href='/Services/SoftwareDevelopmentService'>
                  7. Software Development
                </Link>
              </li>
              <li>
                <Link href='/Services/HR&PayrollServices'>
                  8. HR & Payroll Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={s.serviceRight}
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='2000'
        >
          <img src='/home-article.jpg' alt='photo' />
        </div>
      </div>
      <div id={s.container}>
        <div className={s.eachService}>
          <div
            className={s.eachServicePhoto}
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration='2000'
          >
            <img src='/home-article.jpg' alt='photo' />
          </div>
          <div
            className={s.eachServiceDetail}
            data-aos='fade-left'
            data-aos-easing='linear'
            data-aos-duration='1000'
          >
            <h3 className={s.eachServiceHead}>Warehousing Management</h3>
            <p className={s.eachServiceDescri}>
              The first rule of management is delegation. Let us handle your
              inventory and cut down the operational costs while you save time
              for the core business.
            </p>
            <div className={s.eachServiceButton}>
              <Link href='/Services/3PLWarehousingManagementServices'>
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className={`${s.eachService} ${s.specialService}`}>
          <div
            className={s.eachServicePhoto}
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration='2000'
          >
            <img src='/home-article.jpg' alt='photo' />
          </div>
          <div
            className={s.eachServiceDetail}
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration='1000'
          >
            <h3 className={s.eachServiceHead}>Contact Centre</h3>
            <p className={s.eachServiceDescri}>
              Have a greater competitive advantage by subcontracting the
              customer support function to us as we specialize in all customer
              service problems.
            </p>
            <div className={s.eachServiceButton}>
              <Link href='/Services/ContactCentre'>Read More</Link>
            </div>
          </div>
        </div>
        <div className={s.eachService}>
          <div
            className={s.eachServicePhoto}
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration='2000'
          >
            <img src='/home-article.jpg' alt='photo' />
          </div>
          <div
            className={s.eachServiceDetail}
            data-aos='fade-left'
            data-aos-easing='linear'
            data-aos-duration='1000'
          >
            <h3 className={s.eachServiceHead}>Documents Digitization</h3>
            <p className={s.eachServiceDescri}>
              Increase your reach and allow us to handle all your documents
              digitisation needs. Transforming the data into a structured format
              and creating a digital form of it is what we do the best.
            </p>
            <div className={s.eachServiceButton}>
              <Link href='/Services/DocumentsDigitization'>Read More</Link>
            </div>
          </div>
        </div>
        <div className={`${s.eachService} ${s.specialService}`}>
          <div
            className={s.eachServicePhoto}
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration='2000'
          >
            <img src='/home-article.jpg' alt='photo' />
          </div>
          <div
            className={s.eachServiceDetail}
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration='1000'
          >
            <h3 className={s.eachServiceHead}>Data Entry</h3>
            <p className={s.eachServiceDescri}>
              Any kind of Data Entry Services
            </p>
            <div className={s.eachServiceButton}>
              <Link href='/Services/DataEntry'>Read More</Link>
            </div>
          </div>
        </div>
        <div className={s.eachService}>
          <div
            className={s.eachServicePhoto}
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration='2000'
          >
            <img src='/home-article.jpg' alt='photo' />
          </div>
          <div
            className={s.eachServiceDetail}
            data-aos='fade-left'
            data-aos-easing='linear'
            data-aos-duration='1000'
          >
            <h3 className={s.eachServiceHead}>Web / Data Enabled</h3>
            <p className={s.eachServiceDescri}>
              Lack the expertise in the World Wide Web? Don’t worry, we can do
              the job for you. We have the specialized skills of building a
              network and connecting all your software systems for better
              communication.
            </p>
            <div className={s.eachServiceButton}>
              <Link href='/Services/WebDataEnabled'>Read More</Link>
            </div>
          </div>
        </div>
        <div className={`${s.eachService} ${s.specialService}`}>
          <div
            className={s.eachServicePhoto}
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration='2000'
          >
            <img src='/home-article.jpg' alt='photo' />
          </div>
          <div
            className={s.eachServiceDetail}
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration='1000'
          >
            <h3 className={s.eachServiceHead}>Field Services</h3>
            <p className={s.eachServiceDescri}>
              Field Services Do not divert your attention to the tiresome field
              services. Outsource it to us. Sit back and relax because we are on
              the field taking care of your business needs.
            </p>
            <div className={s.eachServiceButton}>
              <Link href='/Services/FieldVerificationservice'>Read More</Link>
            </div>
          </div>
        </div>
        <div className={s.eachService}>
          <div
            className={s.eachServicePhoto}
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration='2000'
          >
            <img src='/home-article.jpg' alt='photo' />
          </div>
          <div
            className={s.eachServiceDetail}
            data-aos='fade-left'
            data-aos-easing='linear'
            data-aos-duration='1000'
          >
            <h3 className={s.eachServiceHead}>Software Development</h3>
            <p className={s.eachServiceDescri}>
              Lack the resources and time? Hand over software development
              processes to us and significantly reduce your development costs in
              the process.
            </p>
            <div className={s.eachServiceButton}>
              <Link href='/Services/SoftwareDevelopmentService'>Read More</Link>
            </div>
          </div>
        </div>
        <div className={`${s.eachService} ${s.specialService}`}>
          <div
            className={s.eachServicePhoto}
            data-aos='zoom-in'
            data-aos-easing='linear'
            data-aos-duration='2000'
          >
            <img src='/home-article.jpg' alt='photo' />
          </div>
          <div
            className={s.eachServiceDetail}
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration='1000'
          >
            <h3 className={s.eachServiceHead}>HR & Payroll Services</h3>
            <p className={s.eachServiceDescri}>
              We offer complete payroll outsourcing services and make an
              impression for corporates by building an immaculate HR services
              platform taking care of end to end payroll processing.
            </p>
            <div className={s.eachServiceButton}>
              <Link href='/Services/HR&PayrollServices'>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
