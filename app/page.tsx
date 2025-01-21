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
  const title = Package.name;
  const description = Package.description;
  const url = 'https://internet.dev';
  const handle = '@internetxstudio';

  return {
    description,
    icons: {
      icon: '/favicon-32x32.png',
      shortcut: '/favicon-16x16.png',
    },
    metadataBase: new URL('https://internet.dev'),
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
          <video className={styles.video} src={VIDEO_URL} autoPlay muted loop playsInline preload="auto">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <h1 className={styles.h1}>Internet Development Studio Company ("INTDEV")</h1>
          <aside className={styles.aside}>
            Champion Building, Pike Place
            <br />
            Seattle, Washington
            <br />
            United States of America, Earth
          </aside>
          <br />
          <p className={styles.p}>An american vocation guild and great hall for webmasters. Every day we practice the craft of designing, building, shipping, and maintaining websites, platforms, brands, and applications—end to end.</p>
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <ActionListItem icon={`⊹`} href="https://wireframes.internet.dev/" target="_blank">
            Explore INTDEV's open source work
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://t.me/internetdevelopmentstudio" target="_blank">
            Get our attention on Telegram
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://sacred.computer" target="_blank">
            Go explore SRCL
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="/office">
            Learn more about the Pike Place office
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://www.beautifulthings.xyz/" target="_blank">
            Look at beautiful things
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://users.garden" target="_blank">
            Manage your account
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="https://txt.dev" target="_blank">
            Write a post
          </ActionListItem>

          <br />
          <br />
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <Accordion defaultValue={true} title={`What does the Internet Development Studio Company ("INTDEV") actually do?`}>
            <br />
            We provide a team you can hire to get things done.
            <br />
            <br />
            That team is a 6 person dedicated tiger team specializing in delivering high-performance web applications, internal tools, branding assets, presentations, static websites, LLM interfaces, illustrations, productivity applications, technical writing, and general web development services. By embedding with up to four companies at a time, we allocate a shared bandwidth of 360 hours per week to drive productivity and deliver results. It’s a process we genuinely enjoy, and every major milestone we knock out helps us grow and learn.
            <br />
            <br />
            We also provide an invite-only space in Seattle for people to work alongside us, offering a collaborative environment that also serves the portfolio venture companies of{' '}
            <a href="https://mana.inc" target="_blank">
              Mana Industries Fund 1 LP
            </a>{' '}
            and contributors.
            <br />
            <br />
            <ActionListItem icon={`⊹`} href="https://wireframes.internet.dev/" target="_blank">
              Explore INTDEV's open source work
            </ActionListItem>
            <ActionListItem icon={`⊹`} href="https://t.me/internetdevelopmentstudio" target="_blank">
              Get our attention on Telegram
            </ActionListItem>
            <br />
            <br />
            <br />
          </Accordion>
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <Accordion defaultValue={true} title={`Who did INTDEV work for in 2024?`}>
            <br />
            Aliaksandr Hudzilin, Bakken & Bæck, Beautiful Things, El Cap Capital, Google, Mana Industries, Microsoft, Protocol Labs and various startups.
            <br />
            <br />
            <br />
          </Accordion>
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <Accordion defaultValue={true} title={`Who is INTDEV working for in 2025?`}>
            <br />
            Microsoft
            <br />
            <br />
            <br />
          </Accordion>
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <Accordion defaultValue={true} title={`How does an engagement with INTDEV typically feel?`}>
            <br />
            Imagine hiring your own team, and one that already has a well-established design and engineering culture.
            <br />
            <br />
            By hiring us, you gain a team that works seamlessly in person, is highly productive, and has a proven track record. This is all made possible by the extensive successful startup experience shared across our team.
            <br />
            <br />
            <ActionListItem icon={`⊹`} href="https://t.me/internetdevelopmentstudio" target="_blank">
              Get our attention on Telegram
            </ActionListItem>
            <br />
            <br />
            <br />
          </Accordion>
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <Accordion defaultValue={true} title={`How much does it cost to hire this team?`}>
            <br />
            <Table>
              <TableRow>
                <TableColumn>ONE MONTH</TableColumn>
                <TableColumn>$70,000 USD</TableColumn>
              </TableRow>

              <TableRow>
                <TableColumn>THREE MONTHS</TableColumn>
                <TableColumn>$195,000 USD</TableColumn>
              </TableRow>

              <TableRow>
                <TableColumn>SIX MONTHS</TableColumn>
                <TableColumn>$360,000 USD</TableColumn>
              </TableRow>

              <TableRow>
                <TableColumn>NINE MONTHS</TableColumn>
                <TableColumn>$495,000 USD</TableColumn>
              </TableRow>

              <TableRow>
                <TableColumn>TWELVE MONTHS</TableColumn>
                <TableColumn>$600,000 USD</TableColumn>
              </TableRow>
            </Table>
            <br />
            From the start, it will feel like you built this team yourself.
            <br />
            <br />
            We don’t do change orders—instead, we aim to complete as much work as possible within our estimates while you have us on retainer. This approach is ideal for situations where you want to accomplish a lot efficiently.
            <br />
            <br />
            <ActionListItem icon={`⊹`} href="https://t.me/internetdevelopmentstudio" target="_blank">
              Get our attention on Telegram
            </ActionListItem>
            <br />
            <br />
            <br />
          </Accordion>
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <Accordion defaultValue={true} title={`Why do I have to hire the full six-person team?`}>
            <br />
            Our studio fosters deep in-person collaboration, where we openly discuss challenges and make a concerted effort to learn and improve our skills through shared experiences.
            <br />
            <br />
            This approach strengthens our team and enables us to support venture-backed companies with tight deadlines and ambitious goals. By learning from each other’s mistakes, we continually refine our work and strive to hit the mark every time.
            <br />
            <br />
            Also, it should be known that, based on our prices, you're only paying the cost of a full-time employee for a much larger headcount. A lot of clients find this to be high value.
            <br />
            <br />
            <ActionListItem icon={`⊹`} href="https://t.me/internetdevelopmentstudio" target="_blank">
              Get our attention on Telegram
            </ActionListItem>
            <br />
            <br />
            <br />
          </Accordion>
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <Accordion defaultValue={true} title={`Is there a discount if we want to work with less people from the INTDEV?`}>
            <br />
            No, but as a client, you are welcome to work with fewer team members if that is your preference.
            <br />
            <br />
            <ActionListItem icon={`⊹`} href="https://t.me/internetdevelopmentstudio" target="_blank">
              Get our attention on Telegram
            </ActionListItem>
            <br />
            <br />
            <br />
          </Accordion>
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <Accordion defaultValue={true} title={`How does working with the INTDEV work day to day?`}>
            <br />
            Here’s a glimpse of what it’s like to collaborate with our six-person team.
            <br />
            <br />
            <Accordion defaultValue={true} title={`Discovery Video Call`}>
              <br />
              We begin with a video call to understand your goals and explore how our team can deliver results. We’re flexible with your preferred video chat platform.
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`[OPTIONAL] First Meeting in Seattle, WA`}>
              <br />
              Join us at our Pike Place office to work alongside our team as we dive into your goals. You’re welcome to use our meeting rooms and open desks, meet other companies, and enjoy engaging conversations. We always have filtered water and are here on weekends, too.
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`Onboarding`}>
              <br />
              From day one, we integrate seamlessly into your team, bringing years of experience and familiarity with compliance requirements like NDAs. Comfortable across Linux, MacOS, and Windows, we’re happy to train your employees when needed and adapt to your existing tools and processes.
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`Embedding`}>
              <br />
              We adapt to the roles you need, whether following your direction or advocating for key features, integrating into your daily routine at whatever level you require. Comfortable with agile, waterfall, or even a “move fast and break things” approach, we’re always ready to embrace challenges.
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`Working in the Office`}>
              <br />
              We can host stand-ups and any meetings you need in our office, with meeting rooms perfect for bringing in your own customers. Sharing the space often leads to team-building, and we’re happy to host and cook for large groups with a little notice. <br />
              <br />
              Pike Place offers great restaurants and scenic spots for breaks, though guest parking isn’t available, so please plan accordingly. Our office features symmetrical fiber internet and quiet workspaces, and we keep our client list small to stay flexible and accommodating.
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`Technical Program Management`}>
              <br />
              We help identify your Technical Program Management needs, aligning your team around a shared goal with fresh perspectives. We guide long-term strategic decisions, define “done” from the start, and set expectations upfront. We bring experience from high-profile projects while focusing on supporting your vision and helping you achieve it.
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`Zero to One`}>
              <br />
              With over a decade of startup experience, our design partners help bring your product to market for the first time and support future launches, treating each launch as a personal milestone. We love exploring logos, drawing inspiration from our collection of books, and rely on tools like Figma, Sketch, Photoshop, and Illustrator. <br />
              <br />
              Our network also includes some of Seattle’s top photographers and videographers, many of whom work directly in our space.
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`Get in Quick`}>
              <br />
              When you need quick results without extra discussion, we’re ready to jump in, whether it’s tackling long-standing backlogs, handling one-off tasks, or adding missing design system components. We can deliver results without delay. <br />
              <br />
              We’re unfazed by technical debt, comfortable managing tricky repository forks, and always ready to take on backlog tasks—just let us know how we can help.
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`Tooling Investment`}>
              <br />
              We know a team’s identity is often shaped by the tools they use. Whether you’re looking to strengthen your current toolkit or start fresh, we can help. Our expertise spans tools like Next.js, Postgres, Figma, GSAP, and Tailwind, along with CSS dialects like CSS-in-JS and email-compliant inline styles. <br />
              <br />
              With one of our partners contributing to Expo (React Native), we deeply value tooling. We respect your existing tools while embracing fresh starts that energize teams and foster growth. Involve us in consulting meetings for fresh perspectives—we’re always ready to explore new technologies, including LLMs.
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`Launch, Maintain, and Survive`}>
              <br />
              Your uptime is critical, and while we can’t promise 99.9999999% uptime at scale, we specialize in keeping websites running with low effort on your part. This allows you to focus on growing your product and engaging your customers without unnecessary distractions.
              <br />
              <br />
              Whether you need help with IPFS, managing VPS, consulting on on-premise solutions, or working with tools like Fly, Vercel, and Render, we’ve got you covered. With experience in GCE, GCS, AWS EC2, S3, and database backups, we’re here to ensure your systems work.
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`Supporting Volatility`}>
              <br />
              If you’re navigating changes in priorities, we offer the flexibility to help you adapt. We understand that leadership shifts happen, and we’re here to support you while keeping your team focused on what matters most. Whether starting fresh or removing what’s not working, our flexible deal structure evolves with your needs, always aligned with your goal of driving success and growth for your business.
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`Libraries and Documentation`}>
              <br />
              We value great documentation and design systems, even if they’re not always a priority for everyone. We can create clear, user-friendly documentation and develop intuitive design systems for your web products, building tools to make these processes more efficient. <br />
              <br />
              Whether working with tools like Scalar, GitBook, and Notion or contributing to publications, blog posts, and video tutorials, we’re happy to provide custom solutions to meet your needs.
              <br />
              <br />
            </Accordion>
            <br />
            <ActionListItem icon={`⊹`} href="https://t.me/internetdevelopmentstudio" target="_blank">
              Get our attention on Telegram
            </ActionListItem>
            <br />
            <br />
            <br />
          </Accordion>
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <Accordion defaultValue={true} title={`What is INTDEV's relationship with the University of Washington?`}>
            <br />
            If your department requires a website that complies with the latest legal standards, is powered by modern web tooling, and boasts a functional design, partner with us. We read 313 pages of documentation for you.
            <br />
            <br />
            We admire the{' '}
            <a href="https://www.washington.edu/" target="_blank">
              University of Washington
            </a>
            ’s dedication to innovation and inclusivity, and the alumni who work in our office proudly align our mission with these values. As designers, we are committed to ensuring that every website we create is not only modern but also accessible.
            <br />
            <br />
            <a href="https://www.federalregister.gov/documents/2024/04/24/2024-07758/nondiscrimination-on-the-basis-of-disability-accessibility-of-web-information-and-services-of-state" target="_blank">
              The guidelines
            </a>{' '}
            released by the Department of Justice under Title II of the Americans with Disabilities Act (ADA) have set a new bar for digital accessibility, which we embrace. Effective April 24, 2024, these standards require all web content to achieve compliance by April 24, 2026.
            <br />
            <br />
            <Accordion defaultValue={true} title={`Ensuring all web content and mobile applications meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA standards.`}>
              <br />
              This is a cornerstone of our approach to accessibility. We achieve this through rigorous processes and meticulous attention to detail. Our team follows best practices to make sure every user has a seamless and inclusive experience.
              <br />
              <br />
              <Table>
                <TableRow>
                  <TableColumn>Semantic HTML</TableColumn>
                  <TableColumn>We use semantic HTML to define the structure and meaning of web content, ensuring assistive technologies can interpret and navigate the site effectively.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Keyboard Accessibility</TableColumn>
                  <TableColumn>We ensure all features are accessible via keyboard for users who cannot use a mouse.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Color Contrast</TableColumn>
                  <TableColumn>We employ high-contrast color schemes to ensure text is readable by users with visual impairments while adhering to UW’s brand guidelines.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Alternative Text</TableColumn>
                  <TableColumn>We provide descriptive text for images and multimedia content, helping screen readers convey information accurately to visually impaired users.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Resizable Text</TableColumn>
                  <TableColumn>Our designs allow for text resizing without loss of content or functionality, catering to users who need larger fonts.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Error Identification and Suggestion</TableColumn>
                  <TableColumn>Our forms are designed to identify errors and provide suggestions for correction, improving usability for those with cognitive disabilities.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Consistent Navigation</TableColumn>
                  <TableColumn>Our predictable navigation and layouts help users with cognitive and learning disabilities.</TableColumn>
                </TableRow>
              </Table>
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`Providing alternative text for all visual media, including images, videos, and interactive elements.`}>
              <br />
              Alternative text ensures that all users, including those with visual impairments, can fully understand and engage with all content on the website.
              <br />
              <br />
              <Table>
                <TableRow>
                  <TableColumn>Descriptive Alt Text for Images</TableColumn>
                  <TableColumn>We provide concise and descriptive alternative text for all images, enabling screen reader users to understand the context and content of visual elements.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Detailed Descriptions for Complex Images</TableColumn>
                  <TableColumn>For complex images such as charts, infographics, or detailed diagrams, we offer extended descriptions to convey all critical information effectively.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Captions for Videos</TableColumn>
                  <TableColumn>All video content includes synchronized captions, ensuring that users with hearing impairments can access the information being presented.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Transcripts for Audio Content</TableColumn>
                  <TableColumn>We provide textual transcripts for all audio content, making it accessible to users with hearing impairments and allowing for easier comprehension during listening.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Text Alternatives for Interactive Elements</TableColumn>
                  <TableColumn>Interactive elements, such as buttons, forms, and dynamic content, come with clear text alternatives or labels that describe their function and purpose.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Accessible Icons</TableColumn>
                  <TableColumn>We use ARIA labels or alternative text for icons and other graphical elements to ensure they communicate their meaning to assistive technologies.</TableColumn>
                </TableRow>
              </Table>
              <br />
              <br />
            </Accordion>
            <Accordion defaultValue={true} title={`Making complex navigational structures accessible with clear and user-friendly interfaces.`}>
              <br />
              This is a fundamental aspect of our design philosophy. We believe that every user deserves an accessible browsing experience, regardless of the complexity of the content.
              <br />
              <br />
              <Table>
                <TableRow>
                  <TableColumn>Logical Menu Hierarchies</TableColumn>
                  <TableColumn>We design navigation menus with logical hierarchies, ensuring that users can easily find the information they need with minimal clicks.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Descriptive Links</TableColumn>
                  <TableColumn>All links are clearly labeled with descriptive text, so users understand where each link will take them, aiding both screen readers and visual users.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Accessible Dropdown Menus</TableColumn>
                  <TableColumn>Our dropdown menus are designed to be keyboard-accessible and screen reader-friendly, ensuring inclusivity for all users.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Breadcrumb Navigation</TableColumn>
                  <TableColumn>We employ breadcrumb navigation to help users understand their current location within the website and easily backtrack if necessary.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Search Functionality</TableColumn>
                  <TableColumn>We integrate advanced search functionalities, allowing users to quickly locate specific content without navigating through multiple menus.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Consistent Layouts</TableColumn>
                  <TableColumn>We maintain consistency in layouts and navigation across all pages, so users can predict and understand where to find information.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Skip Navigation Links</TableColumn>
                  <TableColumn>Our skip links allow users to bypass repetitive content and navigate directly to the main content, which is particularly helpful for screen reader users.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>Visual Indicators</TableColumn>
                  <TableColumn>Clear visual indicators highlight the current page or section, helping users keep track of their navigation path.</TableColumn>
                </TableRow>

                <TableRow>
                  <TableColumn>ARIA Landmarks</TableColumn>
                  <TableColumn>We implement ARIA (Accessible Rich Internet Applications) landmarks to define regions of a page, making it easier for screen reader users to navigate and skip to different sections.</TableColumn>
                </TableRow>
              </Table>
              <br />
              <br />
            </Accordion>
            <ActionListItem icon={`⊹`} href="https://t.me/internetdevelopmentstudio" target="_blank">
              Get our attention on Telegram
            </ActionListItem>
            <br />
            <br />
            <br />
          </Accordion>
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          <Accordion defaultValue={true} title={`How do I join INTDEV as a Webmaster?`}>
            <br />
            In 2025, we plan to grow our team from six to eight members. If you’re passionate about the vocation of being a Webmaster, let’s talk.
            <br />
            <br />
            <ActionListItem icon={`⊹`} href="https://wireframes.internet.dev/examples/features/job-posting" target="_blank">
              View the job
            </ActionListItem>
            <ActionListItem icon={`⊹`} href="https://t.me/internetdevelopmentstudio" target="_blank">
              Get our attention on Telegram
            </ActionListItem>
            <br />
            <br />
            <br />
          </Accordion>
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
          Use this SVG for a logo without the word “INTDEV.”
          <br />
          <br />
          <InternetDevelopmentLogoMark height="48px" />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <br />
          Use this SVG for a logo that includes our brand name.
          <br />
          <br />
          <InternetDevelopmentLogo height="48px" />
          <br />
          <br />
          <br />
        </div>
      </div>

      <footer className={styles.row}>
        <div className={styles.column}>
          <br />
          <img className={styles.image} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/2fb7e012-4fa9-4446-9bf4-e2c5c7e4992a.jpg" />
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
          <ActionListItem icon={`⊹`} href="https://sacred.computer" target="_blank">
            Go explore SRCL
          </ActionListItem>
          <ActionListItem icon={`⊹`} href="/office">
            Learn more about the Pike Place office
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
