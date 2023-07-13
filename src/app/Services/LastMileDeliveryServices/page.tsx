'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import s from '../../../styles/services.module.css';

export default function LastMile() {
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
        <div className={s.qnaHead}>
          THE MAJOR CHALLENGES OF LAST MILE DELIVERY SERVICES:
        </div>
        <div className={s.plaintext}>
          The progression of the product delivery from warehouse to customer’s
          doorstep with speed and efficiency is one of the main problems with
          Last Mile Solution Providers. And this process completely depends on
          numerous factors including the following:
        </div>
        <div className={s.qnaMain}>
          <ul>
            <li
              className={activeItem === 0 ? s.activeItem : ''}
              onClick={() => handleItemClick(0)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>Strength of the third-party logistics provider business</p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section></section>
                </div>
              </div>
            </li>
            <li
              className={activeItem === 1 ? s.activeItem : ''}
              onClick={() => handleItemClick(1)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>The number of orders picked and packed each day</p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section></section>
                </div>
              </div>
            </li>
            <li
              className={activeItem === 2 ? s.activeItem : ''}
              onClick={() => handleItemClick(2)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>The amount of the transporter picks up orders</p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section></section>
                </div>
              </div>
            </li>
            <li
              className={activeItem === 3 ? s.activeItem : ''}
              onClick={() => handleItemClick(3)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>
                    Delivery end distance from the warehouse and distribution
                    center
                  </p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section></section>
                </div>
              </div>
            </li>
            <li
              className={activeItem === 4 ? s.activeItem : ''}
              onClick={() => handleItemClick(4)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>The location of the warehouse</p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section></section>
                </div>
              </div>
            </li>
            <li
              className={activeItem === 5 ? s.activeItem : ''}
              onClick={() => handleItemClick(5)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>
                    The number of deliveries next to the route and number of
                    routes
                  </p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section></section>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={s.qnaHead}>
          ADVANTAGES OF USING RCSL’S LAST MILE DELIVERY SERVICES:
        </div>
        <div className={s.qnaMain}>
          <ul>
            <li
              className={activeItem === 6 ? s.activeItem : ''}
              onClick={() => handleItemClick(6)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>Real-Time Tracking System:</p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section>
                    Retain customer confidence is the first priority of this
                    Service at RCSL. For that reason, a real time tracking
                    system can guarantee that, because, the customer will know
                    the delivery details of the ordered product.
                  </section>
                </div>
              </div>
            </li>
            <li
              className={activeItem === 7 ? s.activeItem : ''}
              onClick={() => handleItemClick(7)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>Faster Delivery from our employees:</p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section>
                    Speed of the Delivery Service of goods is important.
                    Especially the faster delivery of the products to the
                    customers, the more satisfied the client will.
                  </section>
                </div>
              </div>
            </li>
            <li
              className={activeItem === 8 ? s.activeItem : ''}
              onClick={() => handleItemClick(8)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>Efficient Problem Handling:</p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section>
                    At RCSL’s Last Mile delivery network, the sudden spike in
                    orders and delivery will be easy to handle as it can be
                    well-organized and approachable to customer orders.
                  </section>
                </div>
              </div>
            </li>
            <li
              className={activeItem === 9 ? s.activeItem : ''}
              onClick={() => handleItemClick(9)}
            >
              <div className={s.qnaFull}>
                <div className={s.question}>
                  <p>No Failed Deliveries:</p>
                  <img src='/icon-arrow-down.svg' alt='down-arrow' />
                </div>
                <div className={s.answer}>
                  <section>
                    When you are hand over the products to execution centers or
                    supply chain providers, you don’t have to worry about failed
                    deliveries. They are liable for these deliverables on time.
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
