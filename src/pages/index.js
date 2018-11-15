import React, { Component, Fragment } from 'react'
import Waypoint from 'react-waypoint'

import Layout from '../components/Layout'
import Section from '../components/Section'
import TitleAndText from '../components/TitleAndText'
import Title from '../components/Title'
import Image from '../components/Image'
import Button from '../components/Button'

import { openMailchimpModal } from '../helpers'

import WhyBloc from './Index/WhyBloc'
import ICOProgress from './Index/ICOProgress'
import Timeline from './Index/Timeline'
import Sponsors from './Index/Sponsors'

import styles from './index.module.scss'

const WhitelistButton = () => {
  return (
    <div className={styles.whitelistButtonContainer}>
      <Button onClick={openMailchimpModal} style={{ width: 225 }}>
        Get whitelisted
      </Button>
      <div className={styles.whitelistButtonIco}>TDA ICO to be announced</div>
    </div>
  )
}

const SeeMore = () => (
  <div style={{ display: 'flex' }}>
    <Button onClick={openMailchimpModal} variation="orange">
      WhitePaper
    </Button>
    <Button
      onClick={openMailchimpModal}
      variation="pink"
      style={{ marginLeft: 20 }}
    >
      All documents
    </Button>
  </div>
)

const BallVideo = ({ name }) => (
  <video
    loop
    muted
    autoPlay
    preload="auto"
    onContextMenu={e => e.preventDefault()}
    width={600}
    className={styles.ballVideo}
  >
    <source src={require(`../videos/${name}.webm`)} type="video/webm" />
    <source src={require(`../videos/${name}.mp4`)} type="video/mp4" />
  </video>
)

class IndexPage extends Component {
  state = { black: false }

  handleWaypointEnter = () => this.setState({ black: true })

  handleWaypointLeave = () => this.setState({ black: false })

  onContextMenu = e => e.preventDefault()

  render() {
    const { black } = this.state

    return (
      <Layout color={black ? 'black' : 'white'}>
        <Section row>
          <TitleAndText
            title="Unleash the power of the world’s crypto data"
            text="TokenData is the first platform which extract, collect and build an awesome datalake of the crypto-market to empower the decision maker."
            renderExtra={WhitelistButton}
            withRectangle
            className={styles.firstTitle}
          />
          <BallVideo name="purple" />
        </Section>
        <Section row>
          <BallVideo name="yellow" />
          <TitleAndText
            title="Technology at it’s best to serve business intelligence"
            text="TokenData is a ground-breaking innovator in the creation of alternative data which are the ultimate source of power."
            renderExtra={SeeMore}
          />
        </Section>
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        >
          <section className={styles.secondSection}>
            <div
              className={black ? styles.blackMask : styles.transparentMask}
            />
            <div style={{ position: 'relative', zIndex: 5 }}>
              <div className={styles.centeredBloc}>
                <Title style={{ marginBottom: 30 }}>
                  Why are we pursuing an ICO?
                </Title>
                <div>
                  TokenData is an asset back token and the TDA token is the
                  first European security token powered by the newest Ethereum
                  high standard security smart contract to offer its holders an
                  unique quarterly share profit distribution.
                </div>
              </div>
              <Image name="tornado" className={styles.backgroundImage} />
              <div>
                <div className={styles.whyBlocsRow}>
                  <WhyBloc
                    title="Share Profit Program"
                    content="Each trimester, we get the token status distribution and allocate up to 45% of profits to all the token holders, in proportion to the number token that each investor holds. The payment of share profit will be proceed in ETH."
                  />
                  <WhyBloc
                    title="Top Holder Program"
                    content="Our top holders program offers a discount up to 50% of the licence price for the largest holders of TDA tokens."
                  />
                </div>
                <div className={styles.whyBlocsRow}>
                  <WhyBloc
                    title="Bonus Holder"
                    content="Each month, and until the first anniversary of the ICO, a bonus up to 20% of the number of TDA Tokens held by each investor will be paid in token."
                  />
                  <WhyBloc
                    title="Token as a payment"
                    content="To access to our services, Token TDA is committed to applying a real time exchange rate available on a reference market to TDA Tokens, to which we will be able to apply a discount in order to reward the token holder."
                  />
                </div>
              </div>
              {/* <div className={styles.centeredBloc} style={{ marginTop: 300 }}>
                <Title style={{ marginBottom: 30 }}>TDA Token & ICO</Title>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis eget libero eget consectetur. Sed a luctus mauris,
                  sit amet rhoncus justo. Donec quis imperdiet ligula.
                </div>
              </div>
              <ICOProgress /> */}
            </div>
          </section>
        </Waypoint>
        <Section container={false} style={{ alignItems: 'flex-start' }}>
          <div className={styles.innerContainer}>
            <TitleAndText
              title="A global information and technology company"
              text="We use our dynamic network of data, ideas and analysis to solve difficult problems every day."
              style={{ marginLeft: 30 }}
            />
          </div>
          <Timeline />
        </Section>
        <Section>
          <Title style={{ textTransform: 'uppercase', textAlign: 'center' }}>
            Support & Recognition
          </Title>
          <Sponsors />
        </Section>
      </Layout>
    )
  }
}

export default IndexPage
