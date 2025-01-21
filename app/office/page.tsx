import '@root/global.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

import Accordion from '@components/Accordion';
import ActionListItem from '@components/ActionListItem';
import Canvas from '@components/Canvas';
import DefaultLayout from '@components/page/DefaultLayout';
import InternetDevelopmentLogo from '@components/svg/InternetDevelopmentLogo';
import InternetDevelopmentLogoMark from '@components/svg/InternetDevelopmentLogoMark';
import Table from '@components/Table';
import TableRow from '@components/TableRow';
import TableColumn from '@components/TableColumn';
import Package from '@root/package.json';
import styles from '@components/page/root.module.scss';

export const dynamic = 'force-static';

const VIDEO_URL = 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/03025ac3-aa78-4a21-ac3c-a465cb792d39.mp4';

export async function generateMetadata({ params, searchParams }) {
  const title = `${Package.name} - OFFICE`;
  const description = `Learn more about our Office in Pike Place, Seattle`;
  const url = 'https://internet.dev';
  const handle = '@internetxstudio';

  return {
    description,
    icons: {
      icon: '/favicon-32x32.png',
      shortcut: '/favicon-16x16.png',
    },
    metadataBase: new URL('https://internet.dev/office'),
    openGraph: {
      description,
      images: [
        {
          url: 'https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/intdev.png',
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
      images: ['https://next-s3-public.s3.us-west-2.amazonaws.com/internet-dev/intdev.png'],
      title,
      url,
    },
    url,
  };
}

export default async function Page(props) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <div className={styles.row}>
        <div className={styles.column} style={{ height: '176px', padding: 0 }}>
          <Canvas />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <InternetDevelopmentLogo height="24px" />
          <br />
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/7e6088bb-4ce2-47d9-9dfd-d658faed484d.png" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <aside className={styles.aside}>
            Champion Building, Pike Place
            <br />
            Seattle, Washington
            <br />
            United States of America, Earth
          </aside>
          <br />
          <p className={styles.p}>We invite builders who love trying new things and learning to collaborate with us, guided by our values: everything matters, support your friends, and doing your best is more than enough.</p>
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/0bc8d758-d4a9-412e-aa28-1fa6e6481a9a.jpg" />
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <Accordion defaultValue={true} title={`What does the INTDEV office offer?`}>
            <br />
            Our space offers hardwood floors, symmetrical fiber internet, a local area network, two full kitchens, three meeting booths, a server room, lunch tables, and dedicated workstations. With 24/7 access and amenities like a color printer, shredder, scanner, gallery lounge, and triple-filtered water, we foster a collaborative environment where you can build your vision alongside like-minded peers.
            <br />
            <br />
            <ActionListItem icon={`⊹`} href="https://users.garden" target="_blank">
              Apply on Users Garden
            </ActionListItem>
            <ActionListItem icon={`⊹`} href="https://users.garden" target="_blank">
              Manage your account
            </ActionListItem>
            <ActionListItem icon={`⊹`} href="https://txt.dev/wwwjim/office-use-agreement" target="_blank">
              Read our Office Use Agreement
            </ActionListItem>
            <br />
            <br /> <br />
          </Accordion>
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/6dcedf7d-82d1-45db-a53e-31de509a7759.jpg" />
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <Accordion defaultValue={true} title={`How do I work with INTDEV at their office?`}>
            <br />
            You can find an application link below or by reaching out through social. Please note that the INTDEV reserved desks are invite-only and intended for those with a genuine interest in building things together.
            <br />
            <br />
            <ActionListItem icon={`⊹`} href="https://users.garden" target="_blank">
              Apply on Users Garden
            </ActionListItem>
            <ActionListItem icon={`⊹`} href="https://users.garden" target="_blank">
              Manage your account
            </ActionListItem>
            <ActionListItem icon={`⊹`} href="https://txt.dev/wwwjim/office-use-agreement" target="_blank">
              Read our Office Use Agreement
            </ActionListItem>
            <br />
            <br /> <br />
          </Accordion>
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/9c524b6a-855e-4329-88cd-7bb81796fcc2.jpg" />
          <br />
        </div>
      </div>

      <footer className={styles.row}>
        <div className={styles.column}>
          <br />
          <ActionListItem icon={`⊹`} href="https://wireframes.internet.dev/" target="_blank">
            Explore INTDEV's open source work
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://github.com/orgs/internet-development/repositories" target="_blank">
            Follow us on GitHub
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://www.linkedin.com/company/internet-dev" target="_blank">
            Follow us on LinkedIn
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://www.instagram.com/internetdevelopmentstudio/" target="_blank">
            Follow us on Instagram
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://read.cv/teams/intdev" target="_blank">
            Follow us on Read.cv
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://x.com/internetxstudio" target="_blank">
            Follow us on X
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://t.me/internetdevelopmentstudio" target="_blank">
            Get our attention on Telegram
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="/">
            Go home
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://users.garden" target="_blank">
            Manage your account
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://txt.dev/wwwjim/intdev-acceptable-use" target="_blank">
            Read our Acceptable Use Policy
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://txt.dev/wwwjim/office-use-agreement" target="_blank">
            Read our Office Use Agreement
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://txt.dev/wwwjim/intdev-privacy-policy" target="_blank">
            Read our Privacy Policy
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://txt.dev/wwwjim/intdev-terms-of-service" target="_blank">
            Read our Terms of Use
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://github.com/internet-development/www-internet-v2" target="_blank">
            View source
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://txt.dev" target="_blank">
            Write a post
          </ActionListItem>
          <br />
          Copyright © 2025. All rights reserved.
          <br />
          <br />
          <br />
        </div>
      </footer>
    </DefaultLayout>
  );
}
