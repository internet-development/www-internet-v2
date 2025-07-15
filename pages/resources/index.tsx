import DefaultLayout from '@root/components/page/DefaultLayout';
import V2SectionResources from '@root/components/V2SectionResources';

import { GetStaticProps } from 'next';

interface PageProps {
  lastUpdated: string;
}

const REGENERATE_TIME_IN_SECONDS = 86400; //One Day

export default function Page({ lastUpdated }: PageProps) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <V2SectionResources />
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      lastUpdated: new Date().toISOString(),
    },
    // Regenerate the page at most once every hour (3600 seconds) - Incremental Static Regeneration (ISR)
    revalidate: REGENERATE_TIME_IN_SECONDS,
  };
};
