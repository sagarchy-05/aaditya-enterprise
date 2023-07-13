'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/clientele.module.css';

export default function Test() {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <>
      <Head>
        <title>Clientele</title>
      </Head>
      <div className={styles.container}>
        <ul>
          <li
            className={activeItem === 0 ? styles.activeItem : ''}
            onClick={() => handleItemClick(0)}
          >
            <div className={styles.dropHead}>Banking</div>
            <div className={styles.dropImages}>
              <section>
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
              </section>
            </div>
          </li>
          <li
            className={activeItem === 1 ? styles.activeItem : ''}
            onClick={() => handleItemClick(1)}
          >
            <div className={styles.dropHead}>BPO</div>
            <div className={styles.dropImages}>
              <section>
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
              </section>
            </div>
          </li>
          <li
            className={activeItem === 2 ? styles.activeItem : ''}
            onClick={() => handleItemClick(2)}
          >
            <div className={styles.dropHead}>Financial Services</div>
            <div className={styles.dropImages}>
              <section>
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
              </section>
            </div>
          </li>
          <li
            className={activeItem === 3 ? styles.activeItem : ''}
            onClick={() => handleItemClick(3)}
          >
            <div className={styles.dropHead}>Insurance</div>
            <div className={styles.dropImages}>
              <section>
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
              </section>
            </div>
          </li>
          <li
            className={activeItem === 4 ? styles.activeItem : ''}
            onClick={() => handleItemClick(4)}
          >
            <div className={styles.dropHead}>NBFC</div>
            <div className={styles.dropImages}>
              <section>
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
              </section>
            </div>
          </li>
          <li
            className={activeItem === 5 ? styles.activeItem : ''}
            onClick={() => handleItemClick(5)}
          >
            <div className={styles.dropHead}>Others</div>
            <div className={styles.dropImages}>
              <section>
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
              </section>
            </div>
          </li>
          <li
            className={activeItem === 6 ? styles.activeItem : ''}
            onClick={() => handleItemClick(6)}
          >
            <div className={styles.dropHead}>Shipping & Logistics</div>
            <div className={styles.dropImages}>
              <section>
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
              </section>
            </div>
          </li>
          <li
            className={activeItem === 7 ? styles.activeItem : ''}
            onClick={() => handleItemClick(7)}
          >
            <div className={styles.dropHead}>Telecom</div>
            <div className={styles.dropImages}>
              <section>
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
                <img src='/home-article.jpg' alt='photo' />
              </section>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
