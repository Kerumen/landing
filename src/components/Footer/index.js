import React from 'react'

import { openMailchimpModal } from '../../helpers'

import styles from './styles.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.socials}>
      <a
        href="https://twitter.com/tokendataai/"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="twitter" src={require('../../images/social/twitter.svg')} />
      </a>
      <a
        href="https://www.linkedin.com/company/tokendata-ai/"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="linkedin" src={require('../../images/social/linkedin.svg')} />
      </a>
      <a
        href="https://t.me/tokendataofficial"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="telegram" src={require('../../images/social/telegram.svg')} />
      </a>
      <a
        href="mailto:hello@tokendata.ai"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="mail" src={require('../../images/social/mail.svg')} />
      </a>
      <a
        href="https://www.facebook.com/TokenData-1884067325220498/"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="facebook" src={require('../../images/social/facebook.svg')} />
      </a>
      <a
        href="https://medium.com/@tokendataICO/"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="medium" src={require('../../images/social/medium.svg')} />
      </a>
      <a
        href="https://angel.co/tokendata/"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="angel" src={require('../../images/social/angel.svg')} />
      </a>
      <a
        href="https://discordapp.com/channels/484700860094349312/"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="discord" src={require('../../images/social/discord.svg')} />
      </a>
      <a
        href="https://www.reddit.com/user/tokendataico/"
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="reddit" src={require('../../images/social/reddit.svg')} />
      </a>
    </div>
    <div className={styles.columns}>
      <div className={styles.column}>
        <div className={styles.terms}>
          <p>
            Please read carefully all documentation materials (website,
            whitepaper, one pager, deck, terms of use, contributions terms) from
            start to finish before proceed. Participating in the crowdsale of
            tokendata “tda” tokens may result in significant or complete loss of
            funds.
          </p>
          <p>
            The documentation materials contained herein is subject to change.
            consequently, updated versions of this documentation materials will
            be regularly published by tokendata on its website www.tokendata.ai
          </p>
          <p>
            While tokendata made every reasonable effort to ensure that the
            information relating to its business and project contained in these
            documentation materials is accurate and up to date, this information
            may not be considered as exhaustive and these documentation
            materials may contain omissions or inaccuracies.
          </p>
          <p>
            These documentation material is for information purposes only.
            nothing in these documentation material shall be deemed to
            constitute a prospectus of any sort of a solicitation for
            investment.
          </p>
          <p>
            The publication or circulation of these documentation materials in
            certain jurisdiction may be restricted by law or regulation. nothing
            published by, or republished from, tokendata or any of its
            subsidiaries should be interpreted as investment advice. tokendata
            is in no way providing trading or investment advice. please consult
            with your appropriate licensed professional before making any
            financial transactions, including any investments related to ideas
            or opinions expressed, past, present, or future by the
            aforementioned entities and any future entities that may operate
            under the parent entities. tokendata does not intend to express
            financial, legal, tax, or any other advice and any conclusions drawn
            from statements made by, or on, tokendata shall not be deemed to
            constitute advice in any jurisdiction.
          </p>
          <p>
            The document is not composed in accordance with, and is not subject
            to, laws or regulations of any jurisdiction which are designed to
            protect investors. certain statements, estimates, and financial
            information contained within these documentation materials
            constitute forward-looking, or pro-forma statements. such statements
            or information involve known and unknown risks and uncertainties
            which may cause actual events or results to differ materially from
            the estimates or the results implied or expressed in such
            forward-looking statements.
          </p>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.terms}>
          <p>
            TDA tokens may be qualified financial securities advice in some
            jurisdictions. therefore, tda tokens are not available to citizens,
            residents (tax or otherwise), green card holders, and other persons,
            both natural and legal of: republic of china, the united states of
            america, south korea, north korea, or any jurisdiction that
            prohibits the possession, dissemination or communication of the
            documentation materials and / or prohibits participation in the tda
            token sale offering, purchase, possession and / or exchange of tda
            tokens or any similar activity are not permitted to participate in
            the token sale. in some jurisdictions where tda tokens may be
            qualified financial securities, the selling is{' '}
            <a
              href="https://gallery.mailchimp.com/4a11c93b3bc3fb3fa2bb52e8b/files/78b1582c-4f47-4bc6-bc84-c537bc30b3bc/Selling_Restrictions_TokenData.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.termsLink}
            >
              under restriction
            </a>{' '}
            to professional (accredited) investors. please contact us at
            investor-relations@tokendata.ai
          </p>
          <p>
            Tokendata reserves the right to change, modify, add or remove
            portions of these documentations materials at any time for any
            reason after you agree to these terms and you agree that any such
            changes will be binding on you. such modifications will in fact
            likely happen and you hereby acknowledge this fact. we suggest that
            you review these terms periodically for changes. such changes shall
            be effective immediately upon posting on the website. you
            acknowledge that by accessing the website after we have posted
            changes to these terms, it shall be considered that you were
            acquainted with and you agree with the modified terms.
          </p>
          <p>
            The Initial Coin Offering (hereafter, the “ICO”) project presented
            by TokenData (hereafter, the “Company”) is an unregulated
            fundraising operation. It poses several risks to buyers, in
            particular, that of losing all amounts traded for tokens issued by
            the Company (hereafter, the “TDA”).
          </p>
          <p>
            You acknowledge and agree that there are risks associated with
            purchasing, holding, and using TDA Tokens in connection with the
            Company’s product, services and platform developed for such products
            and/or services (hereafter, the “Platform”), as disclosed and
            explained in this White Paper and in the Terms and Condition
            available at sto-tokendata.ai. If you have any questions regarding
            these risks, please contact us at relation_investor@tokendata.ai.
          </p>
          <p>
            BY PURCHASING TDA TOKENS, YOU EXPRESSLY ACKNOWLEDGE AND ASSUME THESE
            RISKS.
          </p>
          <p>
            Only people who are fully aware of these risks should participate in
            the ICO. Note also that the ICO excludes certain groups of people
            such as “U.S. Person” (within the meaning of “Regulation S” of the
            Securities Act 1933 under U.S. law) and private individuals acting
            on a non-professional basis as simple consumers (within the meaning
            of EU Directive 2011/83/EU of the European Parliament and of the
            Council of 25 October 2011 on consumer rights).
          </p>
        </div>
        <div className={styles.links}>
          <a
            href="https://gallery.mailchimp.com/4a11c93b3bc3fb3fa2bb52e8b/files/babc7047-13ba-48c3-b233-2fdaf529cb7f/Terms_of_Use_Agreement.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Terms of use
          </a>
          <a
            href="https://gallery.mailchimp.com/4a11c93b3bc3fb3fa2bb52e8b/files/64ed2b30-ce4b-498c-8c60-c6a0bf926c7b/Data_Privacy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Data Privacy
          </a>
          <a href="mailto:hello@tokendata.ai" className={styles.link}>
            Contact Us
          </a>
          <a
            href="https://medium.com/@tokendataICO/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            FAQ
          </a>
        </div>
        <p>© {new Date().getFullYear()} TokenDATA. All rights reserved.</p>
      </div>
    </div>
  </div>
)

export default Footer
