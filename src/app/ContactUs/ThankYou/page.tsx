import Head from 'next/head';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div>
      <Head>
        <title>Thank You</title>
      </Head>
      <main>
        <div id='thankBack'>
          <div id='thankIn'>
            <div id='ThankText'>
              Thank You for submitting the form, We will get back to you ASAP
            </div>
            <div id='thankLink'>
              <Link href='/'>Back to home</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
