import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import Layout from '../components/Layout'
import Section from '../components/Section'
import Image from '../components/Image'
import Title from '../components/Title'
import TitleAndText from '../components/TitleAndText'
import Box from '../components/Box'
import Line from '../components/Line'
import Button from '../components/Button'

import styles from './team.module.scss'

const TeamBox = ({
  name,
  job,
  description,
  linkedIn,
  github,
  school,
  color,
}) => (
  <div className={styles.teamBox}>
    <div className={styles.teamBackground} style={{ background: color }} />
    <Box
      style={{
        height: 300,
        padding: 0,
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      <Image
        type="team"
        name={name.replace(/ /g, '-').toLowerCase()}
        extension=".jpg"
        retina={false}
        style={{ width: '100%' }}
      />
      {!!description && (
        <div className={styles.teamMemberDescription}>{description}</div>
      )}
    </Box>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
      }}
    >
      <Title style={{ fontSize: 24, textTransform: 'uppercase' }}>{name}</Title>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: 'auto',
          paddingRight: 5,
        }}
      >
        {linkedIn && (
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.teamMemberLink}
          >
            <img
              alt="linkedin"
              src={require('../images/social/linkedin.svg')}
              style={{ width: 18 }}
            />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.teamMemberLink}
          >
            <img
              alt="github"
              src={require('../images/social/github.svg')}
              style={{ width: 17 }}
            />
          </a>
        )}
      </div>
    </div>
    <div style={{ fontSize: 18, marginTop: 5 }}>{job}</div>
    <div style={{ fontSize: 12, marginTop: 5, color: '#586468' }}>{school}</div>
  </div>
)

class TeamPage extends Component {
  state = { color: undefined }

  onPositionChange = ({ currentPosition }) => {
    if (currentPosition === 'above') {
      this.setState({ color: 'white' })
    }
  }

  handleWaypointEnter = () => {
    return this.setState({ color: 'pink' })
  }

  handleWaypointLeave = () => {
    return this.setState({ color: 'white' })
  }

  render() {
    const { color } = this.state

    return (
      <Layout color={color}>
        <Waypoint
          onPositionChange={this.onPositionChange}
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        >
          <div className={styles.container}>
            <Section
              style={{
                minHeight: 1010,
                alignItems: 'center',
              }}
            >
              <Title style={{ marginBottom: 60 }}>About us</Title>
              <div className={styles.descriptionContainer}>
                <div className={styles.description}>
                  <p className={styles.descriptionBig}>
                    TokenData is the first platform that builds and executes
                    professional investment decisions, relying on an awesome
                    crypto-assets datalake.
                  </p>
                  <p>
                    With the{' '}
                    <a
                      href="https://thebkp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', textDecoration: 'underline' }}
                    >
                      Brooklyn Project
                    </a>{' '}
                    in 2015, everything we knew collapsed. We then dove into the
                    Blockchain and the Ethereum protocol: a new world was
                    opening its doors to us.
                  </p>
                  <p>
                    We started to follow and support all the extraordinary
                    programs that began to unravel in 2016. The rocket was
                    launched, and more and more companies started to raise funds
                    through ICOs. Due to the impossibility to support all new
                    promising projects, we had to start collecting data for
                    evaluation purposes.
                  </p>
                  <p className={styles.descriptionBig}>
                    At this point, traditional methods of analysis we used to
                    know could not apply any longer.
                  </p>
                  <p>
                    Cryptosphere stakeholders are very different from
                    traditional investors and have different decision-making
                    behaviors.
                  </p>
                </div>
                <div className={styles.description}>
                  <p>
                    We focused on Big Data methodology and Artificial
                    Intelligence, the most efficients technologies for
                    understanding those circles. We have collected a great deal
                    of data on the crypto-assets ecosystem.
                  </p>
                  <p>
                    We developed a platform, offering reliable, complete
                    datasets and improved new indicators to empower our clients.
                    A whole new level of decision-making technology was born for
                    professional investors.
                  </p>
                  <p className={styles.descriptionBig}>
                    We provide investors with the best technology through our
                    trading terminal.
                  </p>
                  <p>
                    As Bloomberg’s “Bloom” did in the 90’s for traditional
                    markets, our box delivers billions of reliable datas through
                    streaming canals as well as FIX APIs.
                  </p>
                  <p>
                    As of date, we collect more than 2 billions datas every day
                    and we are able to share with our users 150 fondamental
                    variables about crypto-assets companies as well as financial
                    datas (historical & current) from more than 40 crypto
                    exchanges.
                  </p>
                  <Line />
                </div>
              </div>
            </Section>
          </div>
        </Waypoint>
        <Section style={{ padding: '200px 30px 0px' }}>
          <TitleAndText
            title="Our Team to the moon"
            style={{ marginBottom: 25 }}
          />
          <Button
            href="https://angel.co/tokendata/jobs"
            style={{ marginBottom: 100 }}
          >
            Join us
          </Button>
          <div className={styles.teamRow}>
            <TeamBox
              name="Alexis Berthoud"
              job="Chief Executive Officer"
              description="Alexis is an engineer with 10 years of experience in entrepreneurship, in investment banks and industry. He dreams of creating a robust global network of blockchain enthusiasts Passionate about startups and disruptive digital innovations, he has managed for the last 3 years CINQS - acquired on December 2016 by Chabé Group (Europe leader in private chauffeurs) and lead a high-level team to increase revenue from 0 to up to 12M€."
              school="Ecole des Mines and Paris Dauphine University graduate"
              linkedIn="https://www.linkedin.com/in/alexis-b-/"
              color="#FDEFE9"
            />
            <TeamBox
              name="Agathe Jambu Merlin"
              job="Chief Operating Officer"
              description="Agathe is a fullstack data scientist with strong interests in Machine Learning & Quantitative Finance with a passion for data analysis. She continually seeks to discover the hidden signals in alternative data and to evangelize the world about the blockchain revolution. With an educational background in Economics, she is deeply involved in both the technical & business aspects of finding alpha sources for the Blockchain community, leading research efforts on numerous datasets."
              school="Stanford and Paris Sorbonne University graduate"
              linkedIn="https://www.linkedin.com/in/agathe-jambu-merlin/"
              color="#FDEFE9"
            />
            <TeamBox
              name="Steed Monteiro"
              job="Chief Agile Officer"
              description="Ex-CTO and french ProductHunt leader, he has a 10 years background in Entrepreneurship. Passionate about Start-up and Disruptive Digital Innovations. He is also « agile développement » coach."
              school="Graduated in Computer Science, Paris Jussieu University"
              linkedIn="https://www.linkedin.com/in/steedmonteiro/"
              color="#FDEFE9"
            />
            <TeamBox
              name="Ethan Sebban"
              job="Chief Data Officer"
              description="Ex-CTO for CINQS. Founder of many project like Drop Feature by Techcrunch. He launched his first app for iOS at age 16 and he is a early bitcoin investor in 2013. Back end and product design specialist, he is passionate about Start-up, Data and Finance."
              school="Graduated in Finance and Computer Science, Paris Dauphine University"
              linkedIn="https://www.linkedin.com/in/ethansebban/"
              color="#FDEFE9"
            />
          </div>
          <div className={styles.teamRow}>
            <TeamBox
              name="Yann Pringault"
              job="Fullstack Developer"
              description="Yann is a developer with over 5 years of experience. Tech specialist on Node.js, React, React Native and MongoDB he is also passionate about product and design."
              school="42 school graduate"
              linkedIn="https://www.linkedin.com/in/yann-pringault-98747291/"
              github="https://github.com/Kerumen"
              color="#FCF6CE"
            />
            <TeamBox
              name="Max Huang"
              job="Legendary Senior Data Scientist"
              description="Max is a resourceful Data Scientist / AI Guru with over ten years’ experience in modeling, simulation, prediction, validation, testing, measurement, analyzing, optimization from top research institutes and industries of aerospace, machinery, manufacturing, real estate, automotive, finance. Hi is trilingual (English, German, and Mandarin) with excellent written and verbal communication skills. He was awarded four times best paper/presentation at highly rated international conferences."
              school="PhD Hamburg University of Technology"
              linkedIn="https://www.linkedin.com/in/maxdata/"
              color="#FCF6CE"
            />
            <TeamBox
              name="Partha Sen"
              job="Crypto Senior Data Scientist"
              description="Partha has 20 years of tech experiences and has been working on applying Machine Learning models to crypto economy for more than two years. He masters the creation of equity trading strategies and algorithmic trading based on machine learning. MBA Finance graduate from Nit Durgapur & Engineering graduate from Sardar Vallabhbhai National Institute Of Technology Nit."
              school="Graduated of MBA in finance National Institute of Technology Durgapur"
              linkedIn="https://www.linkedin.com/in/parthasennet/"
              github="https://github.com/parthasen"
              color="#FCF6CE"
            />
            <TeamBox
              name="Yijing Li"
              job="Genius Junior Data Scientist"
              description="She has a passion to be a excellent Data Scientist in the future. She is mainly engaging in some Machine Learning (Deep learning) project now. Her work involves Web Scraping, Data Analysis, Building Model, Classification and Prediction. She believes « Only freedom from vanity can show one's lofty aspirations; and only tranquility of mind can help him to achieve something really lasting. »"
              school="Master student of Biostatistics in University of California, Davis"
              linkedIn="https://www.linkedin.com/in/yijing-li-676a06155/"
              github="https://github.com/liyijing024"
              color="#FCF6CE"
            />
          </div>
          <div className={styles.teamRow}>
            <TeamBox
              name="Jonathan Nabais"
              job="Marketing Specialist"
              description="Jonathan Nabais is a marketer with over four years of diversified experience in marketing. He helps companies implement coherent strategies to stimulate their growth. He has hands-on managing several projects like NapoleonX in international markets, involved in blockchain since 2017."
              school="MBA in Digital Strategy of Golden Gate University"
              linkedIn="https://www.linkedin.com/in/jonathannabais/"
              color="#E9FAFF"
            />
            <TeamBox
              name="Sophie Vermeille"
              job="Legal ICO & IPO  Structuring Specialist"
              description="Sophie is a French lawyer, researcher and entrepreneur. She advises debtor companies, credit institutions and distressed investors on out-of-court refinancings and restructurings, as well as on in-court insolvency proceedings, both domestic or cross-border. I also advise advise investors and shareholder advocacy groups on corporate governance, proxy contests etc. She is an ICO structuration specialist."
              linkedIn="https://www.linkedin.com/in/sophievermeille/"
              color="#E9FAFF"
            />
            <TeamBox
              name="Paul Oudin"
              job="Legal Crypto Specialist"
              description="Paul is a research fellow at « Droit & Croissance » “Rules for Growth”, an open independent non-partisan think tank (which takes part in public debates, assists policymakers and influences legislators) while pursuing a PHD at Paris Assas University. He’s also an Msc in Law & Finance candidate at the University of Oxford."
              linkedIn="https://www.linkedin.com/in/paul-oudin/"
              color="#E9FAFF"
            />
          </div>
        </Section>
        <Section style={{ padding: '200px 30px 0px' }}>
          <TitleAndText
            title="Advisors & Partners"
            style={{ marginBottom: 25 }}
          />

          <Button
            href="mailto:alexis@tokendata.ai"
            style={{ marginBottom: 100 }}
          >
            Join us
          </Button>
          <div className={styles.teamRow}>
            <TeamBox
              name="Atif Ellahie"
              job="Pr. of Financial reporting analysis at University of Utah"
              description="Atif is specialized in Quantitative research in accounting and financial economics. HE previously worked for over 10 years in investment banking at UBS in New York and London. He Successfully originated and executed over 55 global M&A advisory, equity and credit transactions in the technology sector with an aggregate deal value of approximately $30 billion."
              school="London Business School"
              linkedIn="https://www.linkedin.com/in/atifellahie/"
              color="#FDEFE9"
            />
            <TeamBox
              name="Daniele Macciocchi"
              job="Professor Of Accounting"
              description="Daniel holds a Phd from Luiss Guido Carli University & conducts academic research on the role of information in capital markets. His most recent research papers examine the Cryptocurrency market, the corporate governance role of index funds, and the role of debt contracting in the propagation of financial shocks. He has a background in consulting and worked as a senior consultant and CPA before starting his academic career."
              school="University of Chicago"
              linkedIn="https://www.linkedin.com/in/daniele-macciocchi-2a66a650/"
              color="#FDEFE9"
            />
            <TeamBox
              name="Thomas Bourveau"
              job="Assistant Professor Financial Statement Analysis"
              description="Thomas previously served on the faculty at the Hong Kong University of Science and Technology. He obtained a PhD in Management Science from HEC Paris. Professor Bourveau primarily conducts empirical research. He is most interested in evaluating the implications of regulatory interventions in financial markets, often through the role of information disclosure."
              school="Columbia Business School"
              linkedIn="https://www.linkedin.com/in/thomas-bourveau-862a4516/"
              color="#FDEFE9"
            />
            <TeamBox
              name="Emmanuel de George"
              job="Assistant Professor of Accounting"
              description="Emmanuel holds a Phd from University of Michigan. Before pursuing an academic career, he was an auditor with KPMG (Australia), where he gained experience auditing both listed and private companies, and their transition to International Financial Reporting Standards (IFRS). Dr. De George’s research concentrates on the economic consequences of accounting regulation, in particular equity market contagion and systemic risk."
              school="London Business School"
              linkedIn="https://www.linkedin.com/in/emmanuel-de-george-9111658b/"
              color="#FDEFE9"
            />
          </div>
        </Section>
        {/* <Section style={{ padding: '200px 30px', alignItems: 'center' }}>
          <Title style={{ marginBottom: 100 }}>Our partners</Title>
          <div className={styles.partners}>
            <div className={styles.partner}>
              <div className={styles.partnerImage}>
                <Image name="cfm" type="partners" retina={false} />
              </div>
              <div>
                As a pioneer alternative investment fund, they help us
                understand the needs of ours users to offer them the best
                products and services
              </div>
            </div>
            <div className={styles.partner}>
              <div className={styles.partnerImage}>
                <Image name="astek" type="partners" retina={false} />
              </div>
              <div>
                Specialized in engineering and consulting in new technologies,
                they work with us on connecting blockchain & artificial
                intelligence into our product
              </div>
            </div>
            <div className={styles.partner}>
              <div className={styles.partnerImage}>
                <Image name="dauphine" type="partners" retina={false} />
              </div>
              <div>
                The best French finance university is engaged with us on
                producing decision models and scientific articles to remain at
                the forefront of innovations and actively participate in
                research on these topics.
              </div>
            </div>
          </div>
          <div className={styles.partners}>
            <div className={styles.partner}>
              <div className={styles.partnerImage}>
                <Image name="cnrs" type="partners" retina={false} />
              </div>
              The French public scientific laboratory helps us working on the
              most accurate algorithms in order to always improve the accuracy
              of our indexes.
            </div>
            <div className={styles.partner}>
              <div className={styles.partnerImage}>
                <Image name="vermeille" type="partners" retina={false} />
              </div>
              <div>
                Sophie Vermeille and her associates work with us on defining and
                structuring tomorrow’s European blockchain ecosystem
              </div>
            </div>
            <div className={styles.partner}>
              <div className={styles.partnerImage}>
                <Image name="mce" type="partners" retina={false} />
              </div>
              <div>
                MCE legal allowed us to structured our ICO according to FINMA’s
                requirement in order for TokenData to be a reference in the
                sector.
              </div>
            </div>
          </div>
        </Section> */}
      </Layout>
    )
  }
}

export default TeamPage
