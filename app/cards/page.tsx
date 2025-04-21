import '@root/global.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

import DefaultLayout from '@components/page/DefaultLayout';
import FlagSimulationPage from '@components/FlagSimulationPage';
import Package from '@root/package.json';

export const dynamic = 'force-static';

export async function generateMetadata({ params, searchParams }) {
  const title = `144`;
  const description = `A story about people, craft, and friendship`;
  const url = 'https://flagpost.org/cards';
  const handle = '@internetxstudio';

  return {
    description,
    icons: {
      icon: '/favicon-32x32.png',
      shortcut: '/favicon-16x16.png',
    },
    metadataBase: new URL('https://flagpost.org/cards'),
    openGraph: {
      description,
      images: [
        {
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/5d27fe6c-3354-4b4a-834f-460b41ca4dce.png',
          width: 1500,
          height: 785,
        },
      ],
      title,
      type: 'website',
      url,
    },
    title,
    twitter: {
      card: 'summary_large_image',
      description,
      handle,
      images: ['https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/5d27fe6c-3354-4b4a-834f-460b41ca4dce.png'],
      title,
      url,
    },
    url,
  };
}

export default function Page(props) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <FlagSimulationPage />
    </DefaultLayout>
  );
}
