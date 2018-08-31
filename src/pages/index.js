import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import Layout from '../components/Layout'
import Section from '../components/Section'
import TitleAndText from '../components/TitleAndText'
import Title from '../components/Title'
import Image from '../components/Image'
import Button from '../components/Button'

import WhyBloc from './Index/WhyBloc'
import ICOProgress from './Index/ICOProgress'
import Timeline from './Index/Timeline'
import Sponsors from './Index/Sponsors'

import styles from './index.module.scss'

const WhitelistButton = () => {
  return (
    <div className={styles.whitelistButtonContainer}>
      <Button
        href="https://tokendata.typeform.com/to/eUeyVn/"
        style={{ width: 225 }}
      >
        Get whitelisted
      </Button>
      <div className={styles.whitelistButtonIco}>TDA ICO to be announced</div>
    </div>
  )
}

const SeeMore = () => (
  <Button variation="orange" to="/technology">
    See more
  </Button>
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
                  TokenData has the ambitious goal of revolutionizing one of the
                  biggest industries there is : Asset Management. To pursue this
                  mission, we need funding, but we also need support from a
                  like-minded community, which is why a token sale is the best
                  option for us to raise funding
                </div>
              </div>
              <Image name="tornado" className={styles.backgroundImage} />
              <div>
                <div className={styles.whyBlocsRow}>
                  <WhyBloc
                    title="Utility Program"
                    content="The TDA token is used to access the platform’s services. Token Data is committed to applying a real time exchange rate available on a reference market."
                  />
                  <WhyBloc
                    title="Top Holder Program"
                    content="We provide the largest holders of TDA Tokens with unlimited access to a range of the data lake."
                  />
                </div>
                <div className={styles.whyBlocsRow}>
                  <WhyBloc
                    title="Loyalty Program"
                    content="A part of the TDA tokens received from sales of services will be redistributed quarterly to the holders of TDA in proportion to their holdings in exchange of social selling service."
                  />
                  <WhyBloc
                    title="Bonus Program"
                    content="Each semester until the second anniversary of the ICO, a bonus of the TDA Tokens held by each investor will be paid by Token Data, provided the investor has never transferred the Tokens to a different address than granted during the ICO."
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
        {/* <Section>
          <Title style={{ textTransform: 'uppercase', textAlign: 'center' }}>
            Support & Recognition
          </Title>
          <Sponsors />
        </Section> */}
      </Layout>
    )
  }
}

export default IndexPage
