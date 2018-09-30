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

const TeamBox = ({ name, job, description, linkedIn, github, color }) => (
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
      <div className={styles.teamMemberDescription}>{description}</div>
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
    <div style={{ fontSize: 16, marginTop: 5 }}>{job}</div>
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
                  <p>
                    Born in 2017 TokenData is the result of an in-depth
                    reflection and long-term work. Here’s our story.
                  </p>
                  <p>
                    When in 2015 we started to hear about the Consensys project
                    - https://thebkp.com - it was like everything we knew
                    collapsed. We then dig into the Blockchain subject and we
                    felt like a new world was opening its doors to us.
                  </p>
                  <p>
                    We also discovered the Ethereum project, and started to
                    follow and support all the extraordinary programs that
                    happened in 2016. The rocket was launched, and more and more
                    companies started to finance themselves through ICOs. We
                    therefore had to - due to the impossibility to support all
                    new promising projects - start collecting data in the aim of
                    evaluation. At this point, we realized that the traditional
                    methods of analysis we used to know do not apply here. For
                    two reasons: 1) Ecosystem stakeholders are very different
                    from traditional investment circles and thus from
                    decision-making behaviors. 2) The data available was not
                    sufficient for the application of financial models and
                    econometric analysis acknowledged.
                  </p>
                </div>
                <div className={styles.description}>
                  <p>
                    We started to focus on Big Data methodologies and more
                    specifically on artificial intelligence. Since 2017, we are
                    collecting millions of data on the Blockchain sector. For
                    this purpose, we are using the most advanced machine
                    learning technologies and try to create alpha sources of
                    alternative and derived data.
                  </p>
                  <p>
                    These past years saw an explosion in the number of companies
                    funded through ICOs, and many of them turned out to be
                    scams. While our tools allowed us to detect them relatively
                    early, we realized that many contributors had been tempted
                    by investments in projects that would never see the light of
                    day. This type of behavior, if it lasts for too long and
                    attracts too many fraudsters, can lead to an anti-selection
                    phenomenon on the market and discourage contributors who
                    wish to support the best ICOs.
                  </p>
                  <p>
                    That's why since the beginning of 2017 we have been working
                    on the development of a platform to spread our work to as
                    many people as possible, by offering reliable and complete
                    datasets as well as by creating and improving new indicators
                    to allow the eco-system of the Blockchain to grow even
                    faster.
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
            href="https://angel.co/tokendata/"
            style={{ marginBottom: 100 }}
          >
            Join us
          </Button>
          <div className={styles.teamRow}>
            <TeamBox
              name="Alexis Berthoud"
              job="Chief Executive Officer"
              description="Alexis is an engineer with 10 years of experience in entrepreneurship, in investment banks and industry. He dreams of creating a robust global network of blockchain enthusiasts Passionate about startups and disruptive digital innovations, he has managed for the last 3 years CINQS - acquired on December 2016 by Chabé Group (Europe leader in private chauffeurs) and lead a high-level team to increase revenue from 0 to up to 12M€."
              linkedIn="https://www.linkedin.com/in/alexis-b-/"
              color="#FDEFE9"
            />
            <TeamBox
              name="Agathe Jambu Merlin"
              job="Chief Operating Officer"
              description="Agathe is a fullstack data scientist with strong interests in Machine Learning & Quantitative Finance with a passion for data analysis. She continually seeks to discover the hidden signals in alternative data and to evangelize the world about the blockchain revolution. With an educational background in Economics, she is deeply involved in both the technical & business aspects of finding alpha sources for the Blockchain community, leading research efforts on numerous datasets."
              linkedIn="https://www.linkedin.com/in/agathe-jambu-merlin/"
              color="#FDEFE9"
            />
            <TeamBox
              name="Steed Monteiro"
              job="Chief Agile Officer"
              description="Ex-CTO and french ProductHunt leader, he has a 10 years background in Entrepreneurship. Passionate about Start-up and Disruptive Digital Innovations. He is also « agile développement » coach."
              linkedIn="https://www.linkedin.com/in/steedmonteiro/"
              color="#FDEFE9"
            />
            <TeamBox
              name="Ethan Sebban"
              job="Chief Data Officer"
              description="Ex-CTO for CINQS. Founder of many project like Drop Feature by Techcrunch. He launched his first app for iOS at age 16 and he is a early bitcoin investor in 2013. Back end and product design specialist, he is passionate about Start-up, Data and Finance."
              linkedIn="https://www.linkedin.com/in/ethansebban/"
              color="#FDEFE9"
            />
          </div>
          <div className={styles.teamRow}>
            <TeamBox
              name="Yann Pringault"
              job="Fullstack Developer"
              description="Yann is a developper with over 5 years of experience. Tech specialist on Node.js, React, React Native and MongoDB he is also passionate about product and design."
              linkedIn="https://www.linkedin.com/in/yann-pringault-98747291/"
              github="https://github.com/Kerumen"
              color="#FCF6CE"
            />
            <TeamBox
              name="Max Huang"
              job="Legendary Senior Data Scientist"
              description="Max is a resourceful Data Scientist / AI Guru with over ten years’ experience in modeling, simulation, prediction, validation, testing, measurement, analyzing, optimization from top research institutes and industries of aerospace, machinery, manufacturing, real estate, automotive, finance. Hi is trilingual (English, German, and Mandarin) with excellent written and verbal communication skills. He was awarded four times best paper/presentation at highly rated international conferences."
              linkedIn="https://www.linkedin.com/in/maxdata/"
              color="#FCF6CE"
            />
            <TeamBox
              name="Partha Sen"
              job="Crypto Senior Data Scientist"
              description="Partha has 20 years of tech experiences and has been working on applying Machine Learning models to crypto economy for more than two years. He masters the creation of equity trading strategies and algorithmic trading based on machine learning. MBA Finance graduate from Nit Durgapur & Engineering graduate from Sardar Vallabhbhai National Institute Of Technology Nit."
              linkedIn="https://www.linkedin.com/in/parthasennet/"
              github="https://github.com/parthasen"
              color="#FCF6CE"
            />
            <TeamBox
              name="Yijing Li"
              job="Genius Junior Data Scientist"
              description="She has a passion to be a excellent Data Scientist in the future. She is mainly engaging in some Machine Learning (Deep learning) project now. Her work involves Web Scraping, Data Analysis, Building Model, Classification and Prediction. She believes « Only freedom from vanity can show one's lofty aspirations; and only tranquility of mind can help him to achieve something really lasting. »"
              linkedIn="https://www.linkedin.com/in/yijing-li-676a06155/"
              github="https://github.com/liyijing024"
              color="#FCF6CE"
            />
          </div>
          <div className={styles.teamRow}>
            <TeamBox
              name="Sophie Gervais"
              job="Marketing Specialist"
              description="Sophie is a Marketing specialist, graduated from the MIT. She masters external as well as internal communication and has worked on top A companies such as RedBull & Instagram on growing their communities and help these companies recruit the best talents."
              linkedIn="https://www.linkedin.com/in/sophie-gervais-1565a8a8/"
              color="#E9FAFF"
            />
            <TeamBox
              name="Jonathan Nabais"
              job="Marketing Specialist"
              description="Jonathan Nabais is a marketer with over four years of diversified experience in marketing. He helps companies implement coherent strategies to stimulate their growth. He has hands-on managing several projects like NapoleonX in international markets, involved in blockchain since 2017."
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
        <Section style={{ padding: 30 }}>
          <TitleAndText
            title="Advisors & Investors"
            style={{ marginBottom: 25 }}
          />
          <Button
            href="mailto:alexis@tokendata.ai"
            style={{ marginBottom: 100 }}
          >
            Join us
          </Button>
          {/* <div className={styles.teamRow}>
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FDEFE9"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FDEFE9"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FDEFE9"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FDEFE9"
            />
          </div> */}
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
