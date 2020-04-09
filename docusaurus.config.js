module.exports = {
  title: 'MUSCAT Documentation',
  tagline: 'Static resources for the MUSCAT instrument',
  url: 'https://muscat-docs.astro.cf.ac.uk',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'muscat-instrument', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MUSCAT',
      logo: {
        alt: 'MUSCAT logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/design',
          activeBasePath: 'docs',
          label: 'Design',
          position: 'left',
        },
        {
          to: 'docs/spectrum',
          activeBasePath: 'spectrum',
          label: 'Analysis',
          position: 'left',
        },
        {
          to: 'docs/cooldown',
          activeBasePath: 'docs',
          label: 'Performance',
          position: 'left',
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
              label: 'Style Guide',
              to: 'docs/doc1',
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/muscat-instrument/documentation/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
