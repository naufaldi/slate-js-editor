import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <title>Simple Slite JS</title>
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="simple slite js with next js and chakra ui"
            key="desc"
          />
          <meta property="og:title" content="Simple Slite JS" />
          <meta
            property="og:description"
            content="simple slite js with next js and chakra ui"
          />
          <meta property="og:image" content="/banner.png" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
