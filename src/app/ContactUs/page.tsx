'use client';

import s from '../../styles/ContactUs.module.css';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <>
      <div id={s.container}>
        <div id={s.mainForm}>
          <div className={s.contactHeading}>Contact Us</div>
          <form
            action='https://formsubmit.co/sagarchoudharyaot@gmail.com'
            method='POST'
          >
            <label htmlFor='Name'>
              <div className={s.formEle}>Name</div>
              <input
                type='text'
                name='name'
                id=''
                className={s.inp}
                placeholder='Enter your name'
                required
              />
            </label>
            <label htmlFor='Email'>
              <div className={s.formEle}>Email</div>
              <input
                type='email'
                name='email'
                id=''
                className={s.inp}
                placeholder='Enter your email'
                required
              />
            </label>
            <label htmlFor='Phone'>
              <div className={s.formEle}>Phone Number : </div>
              <input
                type='tel'
                name='phone'
                id=''
                className={s.inp}
                placeholder='Enter your Phone Number'
                required
              />
            </label>
            <label htmlFor='CompanyName'>
              <div className={s.formEle}>Company Name :</div>
              <input
                type='text'
                name='CompanyName'
                id=''
                className={s.inp}
                placeholder='Company Name'
                required
              />
            </label>
            <label htmlFor='Message'>
              <div className={s.formEle}>Your Message</div>
              <textarea
                name='message'
                id=''
                className={s.inp}
                placeholder='Enter your message'
                required
              />
            </label>
            <br />
            {/* <label htmlFor='myfile'>
              <div className={s.formEle}>Enter File </div>
              <input
                className={s.inp}
                type='file'
                id={s.lastinp}
                name='myfile'
              ></input>
            </label> */}
            <br />
            <input
              type='hidden'
              name='_subject'
              value='Aaditya Enterprise Submission!'
            ></input>
            <input type='hidden' name='_captcha' value='false'></input>
            <input type='hidden' name='_template' value='table'></input>
            <input
              type='hidden'
              name='_next'
              value='https://aaditya-enterprise.vercel.app/ContactUs/ThankYou'
            ></input>
            <button type='submit' id={s.submit}>
              Submit
            </button>
          </form>
        </div>
        <div id={s.contactInfo}>
          <div className={s.contactHeading}>Aaditya Enterprise</div>
          <div className={s.detailBlock}>
            <span className={s.blockLetter}>Proprietor : </span>Niraj Kumar
            Singh
            <br />
            <span className={s.blockLetter}>Contact : </span>
            <Link href='tel:+919339755674'>+91 9339755674</Link>
          </div>
          <div className={s.detailBlock}>
            <span className={s.blockLetter}>Manager : </span>Aadarsh Singh
            <br />
            <span className={s.blockLetter}>Contact : </span>
            <Link href='tel:+918981118885'>+91 8981118885</Link>
          </div>
          <div className={s.detailBlock} id={s.address}>
            <span className={s.blockLetter}>Address : </span>
            <br />
            <table>
              <tbody>
                <tr>
                  <td className={s.noWrap}>Head Office :</td>
                  <td>11 Girish Ghosh Road, Belur, Howrah, WB-711202.</td>
                </tr>
                <tr>
                  <td className={s.noWrap}>Mumbai :</td>
                  <td>
                    301 Mahivir Darshan Himalaya Society Asalfa Ghatkopar
                    Mumbai-400084.
                  </td>
                </tr>
                <tr>
                  <td className={s.noWrap}>Odisha :</td>
                  <td>
                    QR No-EB-73, Laxminagar, Bhubaneshwar, Khurda - 751004
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={s.detailBlock}>
            <span className={s.blockLetter}>E-mail Us : </span> <br />
            <Link href='mailto:niraj_singh007@yahoo.com'>
              <span className={s.blockLetter} id={s.blackColor}>
                niraj_singh007@yahoo.com
              </span>
            </Link>
            <br />
            <Link href='mailto:niraj_singh007@yahoo.com'>
              <span className={s.blockLetter} id={s.blackColor}>
                niraj_singh007@yahoo.com
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
