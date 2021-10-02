import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en' dir='ltr' className=''>
        <Head>
          <meta
            name='description'
            content='Hi! My name is Harel. I can convert your design into a website, or improve it by using the best practices and the most modern tools'
          />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Harel Panker | Front End Web Developer'
          />
          <meta
            property='og:description'
            content='Hi! My name is Harel. I can convert your design into a website, or improve it by using the best practices and the most modern tools'
          />
          <meta property='og:url' content='https://panker.io/' />
          <meta
            property='og:site_name'
            content='Harel Panker | Front End Web Developer'
          />
          <meta property='og:image' content='/open-grhpe.png' />
          <meta property='og:image:width' content='300' />
          <meta property='og:image:height' content='300' />
          <link rel='icon' href='/favicon.png' />

          {/* font */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='antialiased box-border m-0 p-0 font-josefin'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
