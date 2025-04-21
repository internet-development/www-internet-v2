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
  const title = `${Package.name} - NOTES`;
  const description = `Learn about the mission of the Internet Development Studio Company`;
  const url = 'https://internet.dev/notes';
  const handle = '@internetxstudio';

  return {
    description,
    icons: {
      icon: '/favicon-32x32.png',
      shortcut: '/favicon-16x16.png',
    },
    metadataBase: new URL('https://internet.dev/notes'),
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

const P = (props) => {
  return <p className={styles.p}>{props.children}</p>;
};

export default async function Page(props) {
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
            <P>SPRING 2025</P>
            <P>PUBLIC NOTES FROM YOUR JANITOR</P>
          </div>
          <br />
          <br />
          <br />
          <P>You are reading public notes from the janitor at the Internet Development Studio Company of Seattle, WA. This reflection on Q1 2025 is addressed to my team and future employees.</P>
          <br />
          <br />
          <br />
          <br />
          <P>A. PREAMBLE</P>
          <br />
          <P>This quarter marked a distinct shift—unlike the previous four, so much unfolded that distilling it into a single report proved challenging. We experienced real movement: the departure of one of our partners, and the beginning of three new work trials. I want to extend deep thanks to Hannah, Caidan, and Allan for stepping into this world at such a formative moment. At the end of 6 weeks (or more) we will know if they should hold partner positions at INTDEV.</P>
          <br />
          <P>With these transitions, this feels like an appropriate time to realign around our expectations and the vision we are walking toward.</P>
          <br />
          <P>In keeping with how we operate—openly, transparently, and in the spirit of contribution—this page of public notes can be shared with anyone seeking a deeper understanding of what the Internet Development Studio Company as of Spring 2025 and what it is becoming. Just as our code is open source, so too is my thinking behind what we build.</P>
          <br />
          <br />
          <br />
          <br />
          <P>B. PERFORMANCE Q1 2025</P>
          <br />
          <P>I wish things were better, but I admire how much you accomplished. Help me out here.</P>
          <br />
          <P>In many ways, I feel a deep sense of pride in what we are becoming—and an even deeper investment in each of your individual paths. Anastasiya continues to grow with clarity and refinement in her design work. Andy has taken steady ownership of some client relationships, establishing thoughtful expectations around performance and delivery. Elijah’s contributions speak for themselves—consistently earning the respect and admiration of our clients. And Chenyu has shown a rare capacity to take on technically complex challenges with both confidence and care. To stand alongside you in this work—to support your growth not just as colleagues, but as partners—is one of the most meaningful chapters of INTDEV.</P>
          <br />
          <P>To be very clear: What we are doing is not easy. And for that very reason, it deserves to be seen, named, and celebrated. You all are incredible humans.</P>
          <br />
          <P>And yet, on the other side of our progress, I feel the weight of something very real—Andy, Anastasiya, Chenyu, and Elijah's signs of exhaustion. I think you love INTDEV, but the emotional strain of the world around us has a non-zero risk of fucking us up. Morale has softened. And while I hold no one at fault for feeling this, I do believe the moment calls for us to support each other and be real about this.</P>
          <br />
          <P> We are not here simply to endure. We are here to uplift one another’s capacity to do meaningful work—even when it is hard. Especially when it is hard. So I must speak up: consistency around daily sharing has faded, and that is not acceptable. Every one of us missed parts of our self-defined roadmaps. That, too, is not acceptable. These were commitments made to the group, and to the work. It’s clear that personal chaos—understandable as it may be—has shaped our trajectory more than collective clarity has. I am currently the only one closing deals of sufficient size to sustain the studio. This imbalance is unsustainable. Two of our managing partners, who could offer even modest effort in this direction, are being much more passive than I expected. So I ask this openly, not to provoke, but to realign: What will restore your sense of responsibility to this aspect of the company? What will help you take true ownership of what we’re building together?</P>
          <br />
          <br />
          <br />
          <br />
          <P>C. RECONCILIATION</P>
          <br />
          <P>In truth, a lot of the "fault" with the expectations not being met actually lies with me. So this is not a call for isolated problem-solving. Also everything that was said should not be a surprise, I've written about this before and read your responses.</P>
          <br />
          <P>On the contrary—now that our team has grown, this is a very GOOD moment to realign and move forward together. We have an office full of amazing people, so let commit a plan for the future! I want to revisit the foundational principles that every member of INTDEV should carry—both in knowledge and in practice. These are the responsibilities we each hold, whether as partners or as partners-in-trial.</P>
          <br />
          <P>None of these expectations are new.</P>
          <br />
          <P> They have been present from the beginning. No one has objected to them, and so this should feel less like a shift, and more like a return to what we all discussed in the kitchen in Q3 2024. </P>
          <br />
          <br />
          <br />
          <br />
          <P>D. WHAT IS THE INTERNET DEVELOPMENT STUDIO COMPANY?</P>
          <br />
          <P>INTDEV was created as a space—for gathering extraordinary, driven young adults to learn, to build, and to create some of the most meaningful content the web has seen. From the beginning, the vision has been to cultivate not just technical excellence, but deep camaraderie—a team that, once seasoned and aligned, would evolve into something even greater: authors of our own world and games that could rival "The Silmarillion" while also leveraging the web.</P>
          <br />
          <P>Just as filmmakers and novelists have built worlds that endure, we aim to do the same—but in a different flavor. We are going to do this incrementally while we meet new people, to create the most inclusive and diverse range of content we can think of.</P>
          <br />
          <P>INTDEV holds a unique position. Through my investment in Bluesky (and Andy too in the Series B, congrats), we stand at the frontier of ATProto—one of the first companies positioned to build atop this new foundation. As we do, we’ll also craft great software that helps other creatives build alongside us.</P>
          <br />
          <P>You can already see elements of this: in our shared office space, where unique creative entities coexist and collide; in the events we host for amazing humans, who come to share their hopes and leave with collaborators; and in our ongoing belief that the future belongs to those crazy enough to dream together.</P>
          <br />
          <P>How do we support this financially? We finance INTDEV’s broader ambitions by anchoring ourselves in the work we already believe in: building critical open source infrastructure we’ll one day rely on for our own games, and taking on elite design and engineering projects across the industry.</P> <br />
          <P>These client projects are NOT detours from our path—I think this is the best path. Rather than simulate teamwork and learning through abstract non-sense, we choose a more honest, immediate path. Our growth happens in real time: through high-stakes live projects and through continuous exposure to diverse perspectives. In this way, skill-building is inseparable from meaning-making. This approach sharpens us. It prepares us not only to build great software, but to develop original worlds and games.</P>
          <br />
          <P>AND IT IS WORKING! Every quarter, I witness our team deepening their abilities—making more refined, more amazing things on the internet. That evolution, more than anything, brings me a really great sense of joy.</P>
          <br />
          <P>So lets keep going!</P>
          <br />
          <br />
          <br />
          <br />
          <ol>
            <li>REASONS TO WORK ON THE WEB</li>
            <br />
            <ol>
              <li>The internet is one of humanity’s most vital frontiers.</li>
              <li>Making a website is a medium through which the creative impulse of the individual becomes manifest, shaping not only industries, but the inner lives of people all over the world.</li>
              <li>I believe in standing alongside those who build on the internet.</li>
              <li>I believe there is profound meaning in cultivating a space where creators thrive together and where labor becomes legacy.</li>
              <li>I love the webmasters—the ones who dare to transform human lives through what they design, write, code, and share.</li>
              <li>The Internet gave us direction, identity, and purpose. Now we return to it with reverence, prepared to offer something of enduring value.</li>
              <li>I think we are uniquely equipped to make timeless websites—guided by the quiet authority of having been shaped by this world ourselves.</li>
            </ol>
            <br />
            <li>HOW</li>
            <br />
            <ol>
              <li>We seek individuals for whom excellence is a natural desire.</li>
              <li>We seek individuals who elevate others by showing up.</li>
              <li>We seek individuals who see the work not as a grind, but as a vocation.</li>
              <li>We seek individuals who see that work often requires the sacrifice of comfort, the confrontation of self, and the patience to shape what is lasting.</li>
              <li>We cultivate a culture where everything matters.</li>
              <li>We cultivate a cutlure where mistakes are treated not as failings, but as essential steps in the creative process.</li>
              <li>Give early ownership—not only of large equity holdings, but of identity, responsibility, and craft.</li>
              <li>Force sharing openly across as many social networks as possible, the best feature of the internet, and make sure it is daily—especially when it feels vulnerable.</li>
            </ol>
            <br />
            <li>ALL PARTNER DAILY RESPONSIBILITIES</li>
            <br />
            <ol>
              <li>Utilize industry-standard design tools favored by the team to ensure consistency and collaboration.</li>
              <li>Write, test, and maintain code for services, applications, websites, and APIs, following the team's best practices.</li>
              <li>Collaborate with the team to design, build, deploy, and maintain complete websites.</li>
              <li>Participate in client meetings to understand requirements, provide expertise, and ensure customer satisfaction.</li>
              <li>Contribute to the development and launch of bespoke products and games, driving innovation and quality. Every partner is responsible for a product that uses [api.internet.dev].</li>
              <li>Foster a positive and collaborative atmosphere within the company community.</li>
              <li>Actively share their work and insights online daily to showcase our capabilities and engage with the broader community.</li>
              <li>Support the strategic management of company revenue growth.</li>
              <li>Actively seek and secure clients (close meaningful deals) who can benefit from and engage with our services.</li>
            </ol>
          </ol>
          <br />
          <P>If you agree to the contents of this note, respond with, "I, [YOUR NAME], am thrilled to take ownership in the Internet Development Studio Company. I accept these responsibilities as a partner or partner-in-trial in this company we own or will own together, and I will also bring with me my own vision—to contribute to the collective dream we hold: to make great things in this lifetime."</P>
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
