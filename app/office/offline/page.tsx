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
  const title = `${Package.name} - OFFLINE`;
  const description = `Learn about our invite only, food, provisions and coffee space.`;
  const url = 'https://internet.dev/office/offline';
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
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/9b5184e1-291a-453a-ad07-3a54b15d3bbc.jpeg',
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
      images: ['https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/9b5184e1-291a-453a-ad07-3a54b15d3bbc.jpeg'],
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
          <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/6587b41a-e2e3-442e-ae33-38ce63565609.png" />
          <br />
          <br />
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
          <p className={styles.p}>The Internet Development Studio Company (“INTDEV”) is home to a lot of really, really cool baristas, chefs, and foragers. So, we sometimes host a private, invite-only coffee session and pop-up food sessions for guests and collaborators of the studio here in Seattle, WA.</p>
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <aside className={styles.aside}>MENU</aside>
          <br />
          <p className={styles.p}>
            We’ll make whatever we feel like making with what we got—
            <br />
            <br />
            - 2x original Blackstone 28-inch burners
            <br />
            - 1x i-STEEL flat burr coffee grinder (54mm, Inox)
            <br />
            - 1x Ascaso Steel DUO PLUS PID programmable espresso machine with volumetric control and dual thermoblocks (120V, Inox)
            <br />
            - Coffee beans from a mix of local and international roasters.
            <br />- Ingredients from local farms and butchers.
          </p>
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/cbc5be6d-f687-4f57-8974-ebcacef76415.png" />
          <br />
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <aside className={styles.aside}>RESERVATIONS, OPENINGS OR HOURS</aside>
          <br />
          <p className={styles.p}>iykyk</p>
          <br />
          <br />
          <br />
        </div>
      </div>

      <footer className={styles.row}>
        <div className={styles.column}>
          <br />
          <ActionListItem icon={`⊹`} href="https://wireframes.internet.dev/" target="_blank">
            Explore INTDEV's open source work
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://bsky.app/profile/internetstudio.bsky.social" target="_blank">
            Follow us on Bluesky
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
          <ActionListItem icon={`⊹`} href="/cards" target="_blank">
            Look at flag posts
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://diagram.page/charts" target="_blank">
            Make a diagram
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
