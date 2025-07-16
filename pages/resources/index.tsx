import DefaultLayout from '@root/components/page/DefaultLayout';
import V2SectionResources from '@root/components/V2SectionResources';

import { GetStaticProps } from 'next';
import Head from 'next/head';

interface PageProps {
  lastUpdated: string;
}

const REGENERATE_TIME_IN_SECONDS = 86400; //One Day

const pageMetadata = {
  title: 'Resources - Internet Development',
  description: 'Curated collection of design resources, reading lists, tools, and community content for developers and designers.',
  image: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/resources-og-image.png',
  url: 'https://internet.dev/resources',
};

export default function Page({ lastUpdated }: PageProps) {
  return (
    <DefaultLayout previewPixelSRC={pageMetadata.image}>
      <Head>
        <meta property="og:image" content={pageMetadata.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={pageMetadata.image} />
      </Head>

      <V2SectionResources />
    </DefaultLayout>
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
