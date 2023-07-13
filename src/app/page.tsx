'use client';

import Head from 'next/head';
import Link from 'next/link';
import s from '../styles/home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aaditya Enterprise</title>
        <meta name='description' content='Aaditya Enterprise' />
      </Head>
      <main>
        <div className={s.container}>
          <div className={s.firstSection}>
            <div className={s.leftMain} data-aos='fade-right'>
              <h3 className={s.subHeading}>EMPOWER YOUR BUSINESS WITH</h3>
              <h1 className={s.heading}>End-to-End Solutions</h1>
              <div className={s.checked}>
                <ul>
                  <li>
                    <img src='checked-50.png' alt='checked' />
                    <Link href='/Services/3PLWarehouseManagementServices'>
                      3PL Warehouse Management
                    </Link>
                  </li>
                  <li>
                    <img src='checked-50.png' alt='checked' />
                    <Link href='/Services/LastMileDeliveryServices'>
                      Last Mile Delivery Solutions
                    </Link>
                  </li>
                  <li>
                    <img src='checked-50.png' alt='checked' />
                    <Link href='/Services/DocumentManagementServices'>
                      Documents Management
                    </Link>
                  </li>
                  <li>
                    <img src='checked-50.png' alt='checked' />
                    <Link href='/Services/DigitalMarkettingServicess'>
                      Digital Marketing Services
                    </Link>
                  </li>
                  <li>
                    <img src='checked-50.png' alt='checked' />
                    <Link href='/Services/HR&PayrollServices'>
                      HRMS & Payroll Management
                    </Link>
                  </li>
                  <li>
                    <img src='checked-50.png' alt='checked' />
                    <Link href='/Services/ContactCentre'>
                      Contact Centre Solutions
                    </Link>
                  </li>
                  <li>
                    <img src='checked-50.png' alt='checked' />
                    <Link href='/Services/DocumentsDigitization'>
                      Documents Digitalisation
                    </Link>
                  </li>
                  <li>
                    <img src='checked-50.png' alt='checked' />
                    <Link href='/Services/FieldVerificationservice'>
                      Address Verification Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={s.getInTouch}>
                <Link href='/ContactUs'>Get In Touch</Link>
                <img src='icons8-arrow-50.png' alt='open' />
              </div>
            </div>
            <div className={s.rightMain} data-aos='fade-left'>
              <img className={s.bulbImage} src='bulb-image.jpg' alt='image' />
            </div>
          </div>
          <div className={s.secondSection}>
            <article className={s.homeArticle} data-aos='fade-up'>
              <img src='home-article.jpg' alt='photo' />
              <Link href='/Services/3PLWarehouseManagementServices'>
                <h2 className={s.articleHeading}>3PL Warehouse Management</h2>
              </Link>
              <span className={s.articleDescription}>
                We provide E-commerce focused warehouse services that improve
                many aspects of your inventory management include inventory
                visibility and accuracy.
              </span>
              <div className={s.readMore}>
                <Link href='/Services/3PLWarehouseManagementServices'>
                  Read More
                </Link>
                {/* <img src='icons8-arrow-50.png' alt='open' /> */}
              </div>
            </article>
            <article className={s.homeArticle} data-aos='fade-up'>
              <img src='home-article.jpg' alt='photo' />
              <Link href='/Services/LastMileDeliveryServices'>
                <h2 className={s.articleHeading}>
                  Last Mile Delivery Solutions
                </h2>
              </Link>
              <span className={s.articleDescription}>
                We provide end to end delivery solutions that increase the reach
                of your business through our network system. Our experts use the
                efficient routes and technology available.
              </span>
              <div className={s.readMore}>
                <Link href='/Services/LastMileDeliveryServices'>Read More</Link>
                {/* <img src='icons8-arrow-50.png' alt='open' /> */}
              </div>
            </article>
            <article className={s.homeArticle} data-aos='fade-up'>
              <img src='home-article.jpg' alt='photo' />
              <Link href='/Services/ContactCentre'>
                <h2 className={s.articleHeading}>Contact Centre Solutions</h2>
              </Link>
              <span className={s.articleDescription}>
                Our company provides inclusive Contact Centre Solutions to help
                businesses effectively manage customer interactions and improve
                customer satisfaction.
              </span>
              <div className={s.readMore}>
                <Link href='/Services/ContactCentre'>Read More</Link>
                {/* <img src='icons8-arrow-50.png' alt='open' /> */}
              </div>
            </article>
            <article className={s.homeArticle} data-aos='fade-up'>
              <img src='home-article.jpg' alt='photo' />
              <Link href='/Services/BackOfficeOutshoringServices'>
                <h2 className={s.articleHeading}>Back Office Services</h2>
              </Link>
              <span className={s.articleDescription}>
                Forget all the papers and documentation jobs, focus on your
                strengths and rest is on us. We provide third party solutions to
                keep you on edge of your core activities.
              </span>
              <div className={s.readMore}>
                <Link href='/Services/BackOfficeOutshoringServices'>
                  Read More
                </Link>
                {/* <img src='icons8-arrow-50.png' alt='open' /> */}
              </div>
            </article>
          </div>
          <div className={s.thirdSection}>
            <h3 className={s.thirdSubHeading} data-aos='fade-up-right'>
              Why Choose Us?
            </h3>
            <h1 className={s.thirdHeading} data-aos='fade-up-right'>
              OUR BUSINESS PLAN - EXCELLING IN YOUR NON CORE PROCESSES
            </h1>
            <section className={s.whyChoseUs}>
              <div data-aos='flip-right'>
                <img src='stopwatch.png' alt='photo' />
                <h4 className={s.whyUsHeading}>
                  Skilled & Friendly <br /> Staff
                </h4>
                <p className={s.whyUsDescription}>
                  Get enthusiastic, friendly and dedicated staff for your
                  projects
                </p>
              </div>
              <div data-aos='flip-right'>
                <img src='stopwatch.png' alt='photo' />
                <h4 className={s.whyUsHeading}>
                  Consistent <br />
                  Results
                </h4>
                <p className={s.whyUsDescription}>
                  Receive consistent and improved results every passing day
                </p>
              </div>
              <div data-aos='flip-right'>
                <img src='stopwatch.png' alt='photo' />
                <h4 className={s.whyUsHeading}>
                  Fast Turnaround <br />
                  Time
                </h4>
                <p className={s.whyUsDescription}>
                  We respect deadlines that are the biggest strength to thrive
                </p>
              </div>
              <div data-aos='flip-right'>
                <img src='stopwatch.png' alt='photo' />
                <h4 className={s.whyUsHeading}>
                  Highest Customer <br />
                  Satisfaction
                </h4>
                <p className={s.whyUsDescription}>
                  Almost all our projects have achieved 99% customer
                  satisfaction
                </p>
              </div>
            </section>
          </div>
          <div className={s.fourthSection}>
            <div className={s.firthFloat} data-aos='zoom-in'>
              <div className={s.floatingtext}>
                <h1 className={s.heading}>
                  Drive More Customers through Digital
                </h1>
                <p className={s.floatingDescription}>
                  A business process outsourcing company that streamlines all
                  your business needs.
                </p>
                <Link href='/Services'>
                  <div className={s.readMore}>Read More</div>
                </Link>
              </div>
              <div
                className={s.floatingImage}
                data-aos='fade-left'
                data-aos-easing='linear'
                data-aos-duration='1500'
              >
                {/* <img
                  className={s.highZIndex}
                  src='home-article.jpg'
                  alt='photo'
                /> */}
                <img src='home-article.jpg' alt='photo' />
              </div>
            </div>
            <div className={s.firthFloat} data-aos='zoom-in'>
              <div
                className={s.floatingImage}
                data-aos='fade-right'
                data-aos-easing='linear'
                data-aos-duration='1500'
              >
                {/* <img
                  className={s.highZIndex}
                  src='home-article.jpg'
                  alt='photo'
                /> */}
                <img src='home-article.jpg' alt='photo' />
              </div>
              <div className={s.floatingtext}>
                <h1 className={s.heading}>
                  We understand quality can never be compromised
                </h1>
                <p className={s.floatingDescription}>
                  A complete range of services for all types of businesses with
                  assured quality of service.
                </p>
                <Link href='/Process/OurProcess'>
                  <div className={s.readMore}>Our Process</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
