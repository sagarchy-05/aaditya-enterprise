import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className='firstLayer'>
        <div className='footerPhoto'>
          <img src='/home-article.jpg' alt='' />
        </div>
        <div className='footerRight'>
          <h1 className='fHead'>Enquiry</h1>
          <h6 className='fdescri'>Feel Free to Contact Us</h6>
          <div className='contactUsBut'>
            <Link href='/ContactUs'>Get In Touch</Link>
          </div>
        </div>
      </div>
      <div className='secondLayer'>
        <div className='threeColumn column-1'>
          <h2 className='columnHead'>About Us</h2>
          <h2 className='columnHead'>Aaditya Enterprise</h2>
          <p className='columnSubHead'>CIN:L74140GJ2010PLC062548</p>
          <div className='socials'>
            <a href='#'>
              <img src='/white-linkedin.svg' alt='linkedin' />
            </a>
            <a href='#'>
              <img src='/white-facebook.svg' alt='facebook' />
            </a>
            <a href='#'>
              <img src='/white-twitter.svg' alt='twitter' />
            </a>
            <a href='#'>
              <img src='/white-pinterest.svg' alt='pinterest' />
            </a>
            <a href='#'>
              <img src='/white-instagram.svg' alt='instagram' />
            </a>
          </div>
          <p className='columnSubHead'>
            <Link href='/PrivacyPolicy'>Privacy Policy</Link>
          </p>
        </div>
        <div className='threeColumn column-2'>
          <h2 className='columnHead'>Contact</h2>
          <div className='emailUs'>
            <p className='columnSubHead'>Email Us:</p>
            <p className='emails'>
              <Link href='mailto:souravshaw@gmail.com'>
                souravshaw@gmail.com
              </Link>
              <br />
              <Link href='mailto:souravshaw@gmail.com'>
                souravshaw@gmail.com
              </Link>
            </p>
          </div>
          <div className='emailUs'>
            <p className='columnSubHead'>Phone:</p>
            <Link href='tel:+1800229933'>
              <p className='emails'>+91 9339755674</p>
            </Link>
          </div>
        </div>
        <div className='threeColumn column-3'>
          <h2 className='columnHead'>Address</h2>
          <div className='columnSubHead'>
            <ul>
              <li>Head Office - 11 Girish Ghosh Road Belur Howrah WB-711202</li>
              <li>
                Mumbai Address- 301 MAHIVIR DARSHAN HIMALAYA SOCIETY ASALFA
                GHATKOPAR MUMBAI- 400084
              </li>
              <li>
                Odisha Address - QR NO-EB-73, LAXMISAGAR BHUBANESWAR KHURDA
                751004
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='thirdLayer'>
        <p>ALL RIGHTS RESERVED BY Aaditya Enterprise. </p>
        <p>COPYRIGHT &copy; 2023.</p>
        <p>
          Designed & Developed by
          <span>
            <Link href='mailto:chysagar2002@gmail.com'> Sagar Choudhary</Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
