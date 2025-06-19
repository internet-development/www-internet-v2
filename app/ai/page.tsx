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

export const dynamic = 'force-dynamic';

const VIDEO_URL = 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/03025ac3-aa78-4a21-ac3c-a465cb792d39.mp4';

export async function generateMetadata({ params, searchParams }) {
  const title = `${Package.name} - Compound AI Services`;
  const description = `Learn about our Compound AI Services ("Agents").`;
  const url = 'https://internet.dev/ai';
  const handle = '@internetxstudio';

  return {
    description,
    icons: {
      icon: '/favicon-32x32.png',
      shortcut: '/favicon-16x16.png',
    },
    metadataBase: new URL('https://internet.dev/ai'),
    openGraph: {
      description,
      images: [
        {
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c5afa1ee-fb02-4af0-94e5-a476e9eac06b.png',
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
      images: ['https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c5afa1ee-fb02-4af0-94e5-a476e9eac06b.png'],
      title,
      url,
    },
    url,
  };
}

const P = (props) => {
  return <p className={styles.p}>{props.children}</p>;
};

export default async function Page(props) {
  const ORGANIZATION = props.searchParams?.organization || 'Product Team';

  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <br />
          <br />
          <br />
          <div style={{ textAlign: 'right' }}>
            <P>INTERNET DEVELOPMENT STUDIO COMPANY ("INTDEV")</P>
            <P>PIKE PLACE, SEATTLE, WASHINGTON</P>
            <P>COMPOUND AI SYSTEM DEVELOPMENT SERVICES</P>
            <P>FUTURE OF WORK WITH AI AGENTS</P>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <br />
          <br />
          <br />
          <P>Hello {ORGANIZATION},</P>
          <br />
          <P>We would like to deploy compound AI systems ("AI Agents"), to replace expensive internal tooling, increase productivity, and/or reduce costs. We are reaching out because foundation models are improving to the point where Agents with tool access, clear goals, and multistep execution capabilities can now solve problems that would typically require expensive teams. In some cases, an Agent with monitoring can handle tasks entirely on its own or with minimal human input.</P>
          <br />
          <P>Let the Internet Development Studio Company ("INTDEV") help you explore building these Agents. Having our company involved allows us to assess what complex workflows or tasks exist for you right now.</P>
          <br />
          <ol>
            <li>[SAVE HOURS] You want automation for low-value and repetitive tasks. These tasks take up valuable attention from your team. Since no one wants to do them, there is generally a green light to automate.</li>
            <li>[AGENT RESEARCH] Your leadership team wants to understand the capabilities of Compound AI Systems that use foundational models from a primary source perspective. This allows you to make real, informed decisions.</li>
            <li>[REFINED PLANNING] You want to determine which skills are still worth having humans do, so they can focus on more interpersonal and meaningful work.</li>
          </ol>
          <br />
          <P>And we see three tangible outcomes:</P>
          <br />
          <ol>
            <li>[THE GOAL] The Agent has completely taken over a category of tasks.</li>
            <li>[IMPROVEMENT] The Agent requires human input to complete a task.</li>
            <li>[IMPROVEMENT] The Agent cannot function without human involvement but there is improvement in how the task was solved regardless.</li>
          </ol>
          <br />
          <P>We put together how much each category typically costs for a Full Time Employee ("FTE") to work on it, based on 365 days of salary.</P>
          <br />
          <ol>
            <li>Organizing, planning, and prioritizing work [Save 80K / FTE]</li>
            <li>Training and teaching others [Save 90K / FTE]</li>
            <li>Monitoring or controlling resources [Save 70K / FTE]</li>
            <li>Analyzing data or information [Save 100k / FTE]</li>
            <li>Documenting or recording information [Save 70k / FTE]</li>
            <li>Performing administrative activities [Save 60k / FTE]</li>
            <li>Simple scripting and programming tasks [Save 120k / FTE]</li>
            <li>Updating knowledge bases [Save 80k / FTE]</li>
          </ol>{' '}
          <br />
          <P>If you would like to discuss how we can handle this work for you, especially if you want to move away from undesirable or repetitive tasks, let INTDEV figure out a way to deploy Compound AI Systems as soon as possible.</P>
          <br />
          <P>Warmly,</P>
          <P>— Jim</P>
          <br />
          <br />
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
