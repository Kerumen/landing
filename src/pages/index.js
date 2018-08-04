import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import TitleAndText from '../components/TitleAndText'
import Title from '../components/Title'
import Image from '../components/Image'
import Button from '../components/Button'
import Input from '../components/Input'

import WhyBloc from './Index/WhyBloc'

import styles from './index.module.scss'

const SubscribeForm = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Input
        placeholder="Email for the white list"
        style={{ flex: 1, marginRight: 15 }}
      />
      <Button>Subscribe</Button>
    </div>
  )
}

const SeeMore = () => <Button variation="orange">See more</Button>

class IndexPage extends Component {
  state = { backgroundBlack: false }

  handleWaypointEnter = () => this.setState({ backgroundBlack: true })

  handleWaypointLeave = () => this.setState({ backgroundBlack: false })

  render() {
    const { backgroundBlack } = this.state

    return (
      <Layout backgroundBlack={backgroundBlack}>
        <section className={styles.firstSection}>
          <div className={styles.headContent}>
            <TitleAndText
              title="Unleash the power of the world’s crypto data"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
      eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo.
      Donec quis imperdiet ligula."
              renderExtra={SubscribeForm}
              withRectangle
              style={{ position: 'relative', marginLeft: 30 }}
            />
            <Image name="home-1" />
          </div>
          <div className={styles.headContent}>
            <Image name="home-2" />
            <TitleAndText
              title="Technology at it’s best to serve business intelligence"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
      eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo.
      Donec quis imperdiet ligula."
              renderExtra={SeeMore}
            />
          </div>
        </section>
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
        >
          <section className={styles.secondSection}>
            <div
              className={styles.mask}
              style={{
                background: backgroundBlack ? '#111111' : 'transparent',
              }}
            />
            <div style={{ position: 'relative', zIndex: 5, height: 1200 }}>
              <div className={styles.why}>
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
              <Image name="home-3" className={styles.backgroundImage} />
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
                  content="10% of the TDA tokens received from sales of services will be redistributed quarterly to the holders of TDA in proportion to their holdings in exchange of social selling service."
                />
                <WhyBloc
                  title="Bonus Program"
                  content="Each semester until the second anniversary of the ICO, a 5% bonus of the TDA Tokens held by each investor will be paid by Token Data, provided the investor has never transferred the Tokens to a different address than granted during the ICO."
                />
              </div>
              <div className={styles.why} style={{ marginTop: 300 }}>
                <Title style={{ marginBottom: 30 }}>TDA Token & ICO</Title>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis eget libero eget consectetur. Sed a luctus mauris,
                  sit amet rhoncus justo. Donec quis imperdiet ligula.
                </div>
              </div>
            </div>
          </section>
        </Waypoint>
      </Layout>
    )
  }
}

export default IndexPage
