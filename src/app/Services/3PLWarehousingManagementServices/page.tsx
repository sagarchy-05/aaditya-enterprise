'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import s from '../../../styles/services.module.css';
import Carousel3PL from '@/components/Carousel3PL';

export default function WarehosingManagementService() {
  const carouselImages: string[] = [
    '/home-article.jpg',
    '/home-article.jpg',
    '/home-article.jpg',
    '/home-article.jpg',
    '/home-article.jpg',
    '/home-article.jpg',
  ];

  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <>
      <Head>
        <title>3PL Warehousing Managemnet Services</title>
      </Head>
      <div>
        <div id={s.pageTitle}>
          <div className={s.pageHeading}>3PL Warehouse Management Services</div>
          <div className={s.pageSubHeading}>
            Third Party Logistics Services | Distribution |
            Warehousing-Operation | Space Management
          </div>
          <Link href='/ContactUs'>
            <div className={s.getInTouch}>Get In Touch</div>
          </Link>
        </div>
        <div id={s.serviceDetail}>
          <div className={s.detailLeft}>
            <div className={s.detailHead}>Our 3PL Capabilities</div>
            <div className={s.detailDescri} data-aos='fade-right'>
              <ul>
                <li>
                  <img src='/new-arrow-right.png' alt='point' />
                  <p>Own 65 vehicles of various size— HAZ Complied</p>
                </li>
                <li>
                  <img src='/new-arrow-right.png' alt='point' />
                  <p>
                    JNPT to All India container transportation 20 ft and 40 ft.
                  </p>
                </li>
                <li>
                  <img src='/new-arrow-right.png' alt='point' />
                  <p>
                    Own secondary transportation coverage for 11000 villages
                    with door delivery.
                  </p>
                </li>
                <li>
                  <img src='/new-arrow-right.png' alt='point' />
                  <p>Rail Rack handling for bulk material.</p>
                </li>
                <li>
                  <img src='/new-arrow-right.png' alt='point' />
                  <p>Primary transportation from Factory to all India.</p>
                </li>
                <li>
                  <img src='/new-arrow-right.png' alt='point' />
                  <p>Managing warehouse space around 15,00,000 Sqft.</p>
                </li>
                <li>
                  <img src='/new-arrow-right.png' alt='point' />
                  <p>In house CHA operations at JNPT port.</p>
                </li>
                <li>
                  <img src='/new-arrow-right.png' alt='point' />
                  <p>
                    Repacking and conversion of imported & local products 25 kg
                    and 1 kg pack.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.detailRight} data-aos='fade-left'>
            <img src='/home-article.jpg' alt='photo' />
          </div>
        </div>
        <div id={s.QNA}>
          <div className={s.qnaHead}>3PL WAREHOUSE MANAGEMENT SERVICES</div>
          <div className={s.plaintext}>
            3PL Warehouse Management is an operational strategy for Third Party
            Logistics that refers to the use of outer resources for managing
            logistics, warehousing,{' '}
            <span>
              <Link href='/Services/LastMileDeliveryServices'>
                last mile delivery solutions
              </Link>
            </span>{' '}
            and supply chain operations. 3PL Warehouse Management Services could
            be simple storage of products and companies that can offer logistics
            and inventory management. Picking, packing, shipping, and storage
            are key solutions of a 3PL Warehousing Services from Aaditya
            Enterprise.
          </div>
          <div className={s.qnaMain}>
            <ul>
              <li
                className={activeItem === 0 ? s.activeItem : ''}
                onClick={() => handleItemClick(0)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>MIS intenance & circulation to stakeholder</p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
              <li
                className={activeItem === 1 ? s.activeItem : ''}
                onClick={() => handleItemClick(1)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>Maintain Security of the premises & material</p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
              <li
                className={activeItem === 2 ? s.activeItem : ''}
                onClick={() => handleItemClick(2)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>Material Dispatch</p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
              <li
                className={activeItem === 3 ? s.activeItem : ''}
                onClick={() => handleItemClick(3)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>CN Track & Trace</p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
              <li
                className={activeItem === 4 ? s.activeItem : ''}
                onClick={() => handleItemClick(4)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>Proper Inventory Handling (avoiddamages)</p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
              <li
                className={activeItem === 4 ? s.activeItem : ''}
                onClick={() => handleItemClick(4)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>
                      Service levels to be maintained (like TAT for each
                      activity to be followed strictly )
                    </p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
              <li
                className={activeItem === 5 ? s.activeItem : ''}
                onClick={() => handleItemClick(5)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>Maintain 100% accuracy throughout journey of CN</p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={s.qnaHead}>
            WHAT IS A 3PL AND ITS SERVICES FROM AADITYA ENTERPRISE AND HOW CAN
            IT BENEFIT YOUR BUSINESS?
          </div>
          <div className={s.qnaMain}>
            <ul>
              <li
                className={activeItem === 6 ? s.activeItem : ''}
                onClick={() => handleItemClick(6)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>
                      RCSL, as a 3PL Service provider is included in a company’s
                      warehousing and transportation procedures. As a delegate
                      of a customer’s business, 3PL warehouse, and Third Party
                      Logistics Service Providers, we are also working to
                      accomplish all execution requirements are met, expenses
                      are controlled and execution goes as designed. Working
                      with a Third Party Logistics provider offers many paybacks
                      like,
                    </p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={s.handPointer}>
            <ul>
              <li>
                <img src='/hand-cursor.svg' alt='point' />
                <p>Increase Proficiency and Knowledge</p>
              </li>
              <li>
                <img src='/hand-cursor.svg' alt='point' />
                <p>Less Burden on a Business </p>
              </li>
              <li>
                <img src='/hand-cursor.svg' alt='point' />
                <p>Save Time and Money</p>
              </li>
              <li>
                <img src='/hand-cursor.svg' alt='point' />
                <p>Scale Operations and Be More Flexible</p>
              </li>
              <li>
                <img src='/hand-cursor.svg' alt='point' />
                <p>Focus on Core Competencies Competence</p>
              </li>
            </ul>
          </div>
          <div className={s.qnaHead}>
            AADITYA ENTERPRISE’S THIRD PARTY LOGISTICS SERVICES - THE DIFFERENT
            TYPES OF 3PLS’ AND THE VARIOUS LEVELS OF OUTSOURCING:
          </div>
          <div className={s.handPointer}>
            <p></p>
            <ul>
              <li>
                <img src='/hand-cursor.svg' alt='point' />
                <p>Transportation Based Third Party Logistics Services</p>
              </li>
              <li>
                <img src='/hand-cursor.svg' alt='point' />
                <p>Warehouse Based Third Party Logistics Services </p>
              </li>
              <li>
                <img src='/hand-cursor.svg' alt='point' />
                <p>Distribution Based Third Party Logistics Services</p>
              </li>
              <li>
                <img src='/hand-cursor.svg' alt='point' />
                <p>
                  Carrier/Management Based Third Party Logistics Services ( 3PL
                  )
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.padi12}>
          <div className={s.detailHead}>Our 3PL Capabilities</div>
          <div id={s.functions}>
            <div className={s.diffFunctions}>
              <div className={`${s.functionHead} ${s.textCenter}`}>
                Reliance Grocery (3PL)
              </div>
              <div className={s.qnaMain}>
                <ul>
                  <li
                    className={activeItem === 7 ? s.activeItem : ''}
                    onClick={() => handleItemClick(7)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>Receiving load at our HUB through Vehicle.</p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 8 ? s.activeItem : ''}
                    onClick={() => handleItemClick(8)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>In warding load in TMP (application)</p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 9 ? s.activeItem : ''}
                    onClick={() => handleItemClick(9)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>Assign Trip to vehicle, Pincode, and Route wise.</p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 10 ? s.activeItem : ''}
                    onClick={() => handleItemClick(10)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>
                          Delivery to merchant and collect cash, and update in
                          TMP (Application) alongwith OTP.
                        </p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 11 ? s.activeItem : ''}
                    onClick={() => handleItemClick(11)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>
                          Once trip is completed cash reconciliation is done
                          TMP.
                        </p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.diffFunctions}>
              <div className={`${s.functionHead} ${s.textCenter}`}>
                BigBasket(B2B/B2C)
              </div>
              <div className={s.qnaMain}>
                <ul>
                  <li
                    className={activeItem === 12 ? s.activeItem : ''}
                    onClick={() => handleItemClick(12)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>
                          Receiving Load as per marked line items bucket-wise.
                        </p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 13 ? s.activeItem : ''}
                    onClick={() => handleItemClick(13)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>Loading them as per received data LIFO order.</p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 14 ? s.activeItem : ''}
                    onClick={() => handleItemClick(14)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>
                          Delivering load as per assigned route and time of
                          delivery.
                        </p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 15 ? s.activeItem : ''}
                    onClick={() => handleItemClick(15)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>
                          Reconciliation of items at time of delivery and
                          updating of images in internal system.
                        </p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 16 ? s.activeItem : ''}
                    onClick={() => handleItemClick(16)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>
                          Once trip is completed cash reconciliation is done.
                        </p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id={s.QNA}>
          <div className={s.qnaHead}>WAREHOUSING OPERATION</div>
          <div className={s.qnaSubHead}>Reliance Staple Warehouse</div>
          <div className={s.qnaMain}>
            <ul>
              <li
                className={activeItem === 17 ? s.activeItem : ''}
                onClick={() => handleItemClick(17)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>Managing 3PL for Reliance Retail / Grocery / Ajio.</p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
              <li
                className={activeItem === 18 ? s.activeItem : ''}
                onClick={() => handleItemClick(18)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>
                      Blue Collar man power on boarding and Payroll management
                      of all staff on site.
                    </p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
              <li
                className={activeItem === 19 ? s.activeItem : ''}
                onClick={() => handleItemClick(19)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>
                      Vehicle management and last mile delivery planning and
                      execution
                    </p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
              <li
                className={activeItem === 20 ? s.activeItem : ''}
                onClick={() => handleItemClick(20)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>
                      Managing more than 1.5 lakh sqft of warehouse at
                      (Ahmedabad / Baroda / Surat / Bhiwandi Square Feet etc.)
                    </p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
              <li
                className={activeItem === 21 ? s.activeItem : ''}
                onClick={() => handleItemClick(21)}
              >
                <div className={s.qnaFull}>
                  <div className={s.question}>
                    <p>Once trip is completed cash reconciliation is done</p>
                    <img src='/icon-arrow-down.svg' alt='down-arrow' />
                  </div>
                  <div className={s.answer}>
                    <section>_</section>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={`${s.qnaHead} ${s.textCenter}`}>
            Manpower Handling With Reliance Projects​
          </div>
          <div className={s.manpower} data-aos='zoom-in'>
            <img src='/home-article.jpg' alt='photo' />
            <img src='/home-article.jpg' alt='photo' />
          </div>
        </div>
        <div className={s.padi12}>
          <div className={s.detailHead}>SPACE MANAGEMENT (WH)</div>
          <div className={s.functionHead}>Service offered to clients</div>
          <div id={s.functions}>
            <div className={s.diffFunctions}>
              <div className={s.qnaMain}>
                <ul>
                  <li
                    className={activeItem === 22 ? s.activeItem : ''}
                    onClick={() => handleItemClick(22)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>Pollution Control Certificate</p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 23 ? s.activeItem : ''}
                    onClick={() => handleItemClick(23)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>Gram Panchayat / S & E certificate</p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 24 ? s.activeItem : ''}
                    onClick={() => handleItemClick(24)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>NOC for 24 X 7 operations</p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 25 ? s.activeItem : ''}
                    onClick={() => handleItemClick(25)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>Fire NOC</p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 26 ? s.activeItem : ''}
                    onClick={() => handleItemClick(26)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>Flooring type – VDF</p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${s.diffFunctions} ${s.mw50}`}>
              <div className={s.qnaMain}>
                <ul>
                  <li
                    className={activeItem === 27 ? s.activeItem : ''}
                    onClick={() => handleItemClick(27)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>
                          Parking space availability for local delivery vehicles
                        </p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 28 ? s.activeItem : ''}
                    onClick={() => handleItemClick(28)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>
                          Space for tower deployment in case required for fiber
                          connection
                        </p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                  <li
                    className={activeItem === 29 ? s.activeItem : ''}
                    onClick={() => handleItemClick(29)}
                  >
                    <div className={s.qnaFull}>
                      <div className={s.question}>
                        <p>
                          Network connectivity facility will provide by net
                          provide and coordinate
                        </p>
                        <img src='/icon-arrow-down.svg' alt='down-arrow' />
                      </div>
                      <div className={s.answer}>
                        <section>_</section>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={s.carouselDiv}>
          <Carousel3PL images={carouselImages} />
        </div>
        <div className={s.carouselDiv}>
          <div className={s.ourClient}>Our Client</div>
          <Carousel3PL images={carouselImages} />
        </div>
      </div>
    </>
  );
}
