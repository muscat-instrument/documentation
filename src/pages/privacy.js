import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Privacy() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Privacy Policy">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is critically important to us. At the MUSCAT Consortium, we have a few fundamental principles:
    <ul>
          <li>We don’t ask you for personal information unless we truly need it. (We can’t stand services that ask you for things like your gender or income level for no apparent reason.)</li>
          <li>We don’t share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</li>
          <li>We don’t store personal information on our servers unless required for the ongoing operation of one of our services.</li>
        </ul>
    If you have questions about deleting or correcting your personal data please contact our support team.
    </p>

      <h2>Website Visitors</h2>
      <p>Like most website operators, the MUSCAT Consortium collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. The MUSCAT Consortium uses the Google Analytics service for this. The MUSCAT Consortium’s purpose in collecting non-personally identifying information is to better understand how the MUSCAT Consortium’s visitors use its website. From time to time, the MUSCAT Consortium may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.
    </p>
      <p>The MUSCAT Consortium also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on the blog or forums. The MUSCAT Consortium only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.
    </p>
      <h2>Gathering of Personally-Identifying Information</h2>
      <p>Certain visitors to the MUSCAT Consortium’s websites choose to interact with the MUSCAT Consortium in ways that require the MUSCAT Consortium to gather personally-identifying information. The amount and type of information that the MUSCAT Consortium gathers depends on the nature of the interaction. For example, we ask visitors who create a forum account to provide a username and an email address. Those who engage in transactions with the MUSCAT Consortium are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. In each case, the MUSCAT Consortium collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with the MUSCAT Consortium. The MUSCAT Consortium does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.
    </p>
      <h2>Aggregated Statistics</h2>
      <p>The MUSCAT Consortium may collect statistics about the behaviour of visitors to its websites. For instance, the MUSCAT Consortium may monitor the most popular integration documentation. The MUSCAT Consortium may display this information publicly or provide it to others. However, the MUSCAT Consortium does not disclose personally-identifying information other than as described below.
    </p>
      <h2>Protection of Certain Personally-Identifying Information</h2>
      <p>The MUSCAT Consortium discloses potentially personally-identifying and personally-identifying information only to those of its constituent members, their employees, contractors and affiliated organizations that (i) need to know that information in order to process it on the MUSCAT Consortium behalf or to provide services available at the MUSCAT Consortium’s websites, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using the MUSCAT Consortium’s websites, you consent to the transfer of such information to them. The MUSCAT Consortium will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, the MUSCAT Consortium discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when the MUSCAT Consortium believes in good faith that disclosure is reasonably necessary to protect the property or rights of the MUSCAT Consortium, third parties or the public at large. If you are a registered user of a MUSCAT Consortium website and have supplied your email address, the MUSCAT Consortium may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what’s going on with the MUSCAT Consortium. We primarily use our various product blogs to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. The MUSCAT Consortium takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.
    </p>
      <h2>Cookies</h2>
      <p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. The MUSCAT Consortium uses cookies to help the MUSCAT Consortium identify and track visitors, their usage of the MUSCAT Consortium’s websites, and their website access preferences. The MUSCAT Consortium visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using the MUSCAT Consortium’s websites, with the drawback that certain features of the MUSCAT Consortium’s websites may not function properly without the aid of cookies.
    </p>
      <h2>Business Transfers</h2>
      <p>If a member organisation of the MUSCAT Consortium, or substantially all of its assets, were acquired, or in the unlikely event that a member of the MUSCAT Consortium goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of a constituent member of the MUSCAT Consortium may continue to use your personal information as set forth in this policy.
    </p>
      <h2>Ads</h2>
      <p>Ads appearing on any of our websites may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by the MUSCAT Consortium and does not cover the use of cookies by any advertisers.
    </p>
      <h2>Privacy Policy Changes</h2>
      <p>
        Although most changes are likely to be minor, the MUSCAT Consortium may change its Privacy Policy from time to time, and in the MUSCAT Consortium’s sole discretion. The MUSCAT Consortium encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
    </p>
      <h2>CHANGE LOG</h2>
      <ul>
        <li>14th April 2020: New version</li>
      </ul>
      <br />
    This privacy policy has been adapted from the <a target="_blank" href="https://automattic.com/privacy/">Automattic</a> privacy policy and is licensed Creative Commons ShareAlike (<a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA-4.0</a>).
    </Layout>
  );
}

export default Privacy;
