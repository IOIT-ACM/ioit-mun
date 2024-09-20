import Document, { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/react';



class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* meta end */}

        </Head>
        <body>
          <Analytics />
          <Main />
          <NextScript />

        </body>
      </Html>
    );
  }
}

export default MyDocument;
