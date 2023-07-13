'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import s from '../../../styles/services.module.css';

export default function DigitalMarketing() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <>
      <Head>
        <title>3PL Warehousing Managemnet Services</title>
      </Head>
      <div id={s.pageTitle}>
        <div className={s.pageHeading}>
          Streamline Last Mile Delivery Services
        </div>
        <div className={s.pageSubHeading}>
          Last Mile Logistics Solutions & Services Provider Company In India
        </div>
        <Link href='/ContactUs'>
          <div className={s.getInTouch}>Get In Touch</div>
        </Link>
      </div>
      <div id={s.serviceDetail}>
        <div className={`${s.detailLeft} ${s.lmsChange1}`}>
          <div className={s.detailHead}>
            Importance of Last Mile Delivery Solutions and Logistics Services in
            India
          </div>
          <div className={s.detailDescri} data-aos='fade-right'>
            Last Mile Delivery Service refers to the final destination of supply
            chain operations with the journey of products from the Warehouse to
            the customer end. This last step of the delivery process is most
            critical to minimizing cost, ensuring transparency, increasing
            efficiency, and improving infrastructure. <br /> <br />
            Last Mile Logistics Solutions be like to the operational
            capabilities including warehouse (physical spaces), logistic,
            delivery squad and workforce for the process of planning and
            executing of Goods and customer requirements. RCSL’s ultimate goal
            for this complex operational setup is to enable businesses to
            provide their customers with the best possible last mile delivery
            experience. <br /> <br />
            The role of Third Party Logistics Services (3PL) in last mile
            delivery management. <br /> <br />
            Third Party logistics Services (3PLs) are now expanding offering
            last mile delivery and competing with shipping carriers. The 3PL
            often stores the products in a warehouse that serves a specific area
            of customers. When orders are placed, the 3PL is liable for final
            transportation and fulfilling last-mile delivery.
          </div>
        </div>
        <div className={`${s.detailRight} ${s.lmsChange2}`} data-aos='zoom-in'>
          <img src='/home-article.jpg' alt='photo' />
        </div>
      </div>
      <div id={s.QNA}>
        <div className={s.qnaHead}>OUTSOURCED DIGITAL MARKETING SERVICES</div>
        <div className={s.plaintext}>
          Today’s digital age has also transformed the traditional marketing and
          advertisement concept. It has evolved like never before. Today most
          people spend most of their time poking around multiple digital
          platforms. This has offered enterprises a wide and easily accessible
          marketplace. <br /> <br /> Businesses have started exploiting the
          popularity and easy accessibility of these platforms to market their
          products and services. This digital age helps businesses to connect
          with their potential customers at the right place and right time.
          Businesses do not have to search for their customers today. They are
          all available online on social media platforms. <br /> <br /> This is
          the power of evolving digitization of enterprise marketing that has
          shrunk to your desktop. But is it easy to turn your online users to
          paying customers? Of course not! It requires a lot of effort, time,
          resources, and most importantly knowledge and experience! This is
          where digital marketing service provider comes into play! Our squad of
          digital marketing professionals is the best bet that can help you move
          closer to your business goal. With a dedicated approach to help
          enterprises to stay competitive in this world of the dynamic business
          world, our digital marketing team can be your distant marketing
          partner. <br /> <br />
          Whether you are looking for content marketing, PPC campaign, SEO
          services, social media mileage, or branding, our marketing team is the
          best solution. Outsource your digital marketing needs to get the most
          suitable and effective digital marketing solutions given your specific
          business requirements.
        </div>
        <div className={s.qnaMain}>
          <ul>
            <li
              className={activeItem === 0 ? s.activeItem : ''}
              onClick={() => handleItemClick(0)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>Flexible Contracts</p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section>
                    You do not have to enter into long-term contracts
                  </section>
                </div>
              </div>
            </li>
            <li
              className={activeItem === 1 ? s.activeItem : ''}
              onClick={() => handleItemClick(1)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>Optimized Marketing Costs</p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section>
                    Optimized campaign helps you get more, spending less
                  </section>
                </div>
              </div>
            </li>
            <li
              className={activeItem === 2 ? s.activeItem : ''}
              onClick={() => handleItemClick(2)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>Dedicated Project Manager</p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section>
                    You get a dedicated marketing team with a project lead
                  </section>
                </div>
              </div>
            </li>
            <li
              className={activeItem === 3 ? s.activeItem : ''}
              onClick={() => handleItemClick(3)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>Comprehensive Monthly Reports</p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section>
                    We deliver your business marketing progress report every
                    month
                  </section>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}
