module.exports = {
  title: 'MUSCAT User Guide',
  tagline: 'Static support resources for the MUSCAT instrument',
  url: 'https://muscat-docs.astro.cf.ac.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'muscat-instrument', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MUSCAT',
      logo: {
        alt: 'MUSCAT logo',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/opening',
          label: 'Design',
          position: 'left',
        },
        {
          to: 'docs/spectrum',
          label: 'Analysis',
          position: 'left',
        },
        {
          to: 'docs/cryo-UI',
          label: 'Interface',
          position: 'left',
        },
        {
          to: 'docs/cooldown',
          label: 'Performance',
          position: 'left',
        },
        {
          label: "Commissioning",
          position: "left",
          items: [
            { label: "Working Frame", to: "docs/working-frame" },
            { label: "Mechanical", to: "docs/shipping-braces" },
            { label: "Checking Arrays", to: "docs/array-tests" }
          ]
        },
        {
          href: 'https://muscat-instrument.github.io/gallery',
          label: 'Gallery',
          position: 'right',
        },
        {
          href: 'https://github.com/muscat-instrument',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Privacy Policy',
              to: 'privacy',
            },
            {
              label: 'Citing Content',
              to: 'docs/overview#citing-this-site',
            },
          ],
        },
        //        {
        //          title: 'Community',
        //          items: [
        //            {
        //              label: 'Stack Overflow',
        //              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //            },
        //            {
        //              label: 'Discord',
        //              href: 'https://discordapp.com/invite/docusaurus',
        //            },
        //          ],
        //        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/muscat-instrument',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/MUSCAT_inst',
            },
          ],
        },
      ],
      copyright: `Content distributed under
      <a class="footer__link-item" target="_blank" href="https://creativecommons.org/licenses/by/4.0/">
        CC-BY-4.0 license.
      </a>
      <br />
      Built with Docusaurus.
      <p>
        <a href="https://www.netlify.com">
          <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
           alt="Deploys by Netlify" />
        </a>
      </p>`,
    },
    algolia: {
      apiKey: 'bb023f782f679447e0fb5f98e37e52bd',
      indexName: 'muscat',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/muscat-instrument/documentation/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-42876440-5',
        },
      },
    ],
  ],
};
