import { createPageMetadata } from '@root/common/utilities';
import DefaultMetaTags from '@root/components/DefaultMetaTags';
import DefaultLayout from '@root/components/page/DefaultLayout';
import V2SectionResources from '@root/components/V2SectionResources';

import { GetStaticProps } from 'next';
import Head from 'next/head';

interface PageProps {
  lastUpdated: string;
}

const REGENERATE_TIME_IN_SECONDS = 86400; //One Day

const metadata = createPageMetadata({
  title: 'Resources - Internet Development',
  description: 'Curated collection of design resources, reading lists, tools, and community content for developers and designers.',
  url: 'https://internet.dev/resources',
  image: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/resources-og-image.png',
});

export default function Page({ lastUpdated }: PageProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width.toString()} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height.toString()} />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.handle} />
        <meta name="twitter:creator" content={metadata.twitter.handle} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />

        {/* Icons */}
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />

        {/* Canonical URL */}
        <link rel="canonical" href={metadata.url} />
      </Head>
      <DefaultLayout previewPixelSRC={metadata.image}>
        <V2SectionResources />
      </DefaultLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      lastUpdated: new Date().toISOString(),
    },
    revalidate: REGENERATE_TIME_IN_SECONDS,
  };
};
