import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Design and Operation</>,
    imageUrl: 'img/undraw_under_construction.svg',
    link: 'docs/design',
    description: (
      <>
        Information about the design and construction of the MUSCAT instrument
        along with instructions for operation.
      </>
    ),
  },
  {
    title: <>Interfacing and Analysis</>,
    imageUrl: 'img/undraw_code_typing.svg',
    link: 'docs/spectrum',
    description: (
      <>
        How to interface with the instrument for on-site real-time telemetry
        and how to run MUSCAT analysis pipelines.
      </>
    ),
  },
  {
    title: <>Typical Performance</>,
    imageUrl: 'img/undraw_progress_data.svg',
    link: 'docs/cooldown',
    description: (
      <>
        Typical performance for both the cryogenic platform and the detector
        system. Currently limited to lab-based data but will be updated with
        on-sky data after deployment.
      </>
    ),
  },
];

function Feature({ imageUrl, title, link, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  const contUrl = useBaseUrl(link)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <a className={'home-feature-link'} href={contUrl}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      description="Support documents and static assets for the MUSCAT instrument">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className={clsx('col col--5 col--offset-1')}>
              <img className="hero__logo" alt={siteConfig.themeConfig.navbar.logo.atl} src={siteConfig.themeConfig.navbar.logo.src} />
            </div>
            <div className={clsx('col col--5')}>
              <h1 className="hero__title">MUSCAT < br /> User Guide</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/overview')}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>

        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="text--center">
                <h2>Content Overview</h2>
              </div>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout >
  );
}

export default Home;
