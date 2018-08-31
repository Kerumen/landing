import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import Layout from '../components/Layout'
import Section from '../components/Section'
import Image from '../components/Image'
import Title from '../components/Title'
import TitleAndText from '../components/TitleAndText'
import Box from '../components/Box'
import Line from '../components/Line'

import styles from './team.module.scss'

const TeamBox = ({ name, description, color }) => (
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
      <Image name="placeholder" style={{ width: '100%' }} />
    </Box>
    <Title style={{ fontSize: 24, textTransform: 'uppercase', marginTop: 15 }}>
      {name}
    </Title>
    <div style={{ fontSize: 14, marginTop: 5 }}>{description}</div>
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
          <div style={{ height: 1010, background: '#FEF4FE' }}>
            <Section style={{ minHeight: '100%', alignItems: 'center' }}>
              <Title style={{ marginBottom: 60 }}>About us</Title>
              <div style={{ display: 'flex' }}>
                <div className={styles.description}>
                  <p>
                    Born in 2017 TokenData is the result of an in-depth
                    reflection and long-term work. Here’s our story.
                  </p>
                  <p>
                    {' '}
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
        {/* <Section style={{ padding: '200px 30px' }}>
          <TitleAndText
            title="Our Team to the moon"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo. Donec quis imperdiet ligula."
            style={{ marginBottom: 100 }}
          />
          <div className={styles.teamRow}>
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
          </div>
          <div className={styles.teamRow}>
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FCF6CE"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FCF6CE"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FCF6CE"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#FCF6CE"
            />
          </div>
          <div className={styles.teamRow}>
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#E9FAFF"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#E9FAFF"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#E9FAFF"
            />
            <TeamBox
              name="Alexis Berthoud"
              description="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
              color="#E9FAFF"
            />
          </div>
        </Section>
        <Section style={{ padding: '200px 30px' }}>
          <TitleAndText
            title="Advisors & Investors"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo. Donec quis imperdiet ligula."
            style={{ marginBottom: 100 }}
          />
          <div className={styles.teamRow}>
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
          </div>
        </Section>
        <Section style={{ padding: '200px 30px', alignItems: 'center' }}>
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
