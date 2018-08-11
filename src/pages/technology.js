import React, { Component } from 'react'

import Layout from '../components/layout'
import Section from '../components/Section'
import Title from '../components/Title'
import Image from '../components/Image'
import TitleAndText from '../components/TitleAndText'
import Button from '../components/Button'

import styles from './technology.module.scss'

const Subscribe = () => <Button>Subscribe</Button>

const Box = ({ children, ...props }) => (
  <div className={styles.box} {...props}>
    {children}
  </div>
)

const VerticalBox = ({ title, text }) => {
  return (
    <Box
      style={{
        width: 255,
        height: 350,
        justifyContent: 'space-between',
        padding: '25px 10px',
        marginLeft: 15,
      }}
    >
      <Title style={{ textTransform: 'uppercase', fontSize: 36 }}>
        {title}
      </Title>
      <div style={{ fontWeight: 'bold', fontSize: 14 }}>{text}</div>
    </Box>
  )
}

const HorizontalBox = ({ title, black }) => {
  return (
    <Box
      style={{
        width: 300,
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        ...(black
          ? {
              background: 'black',
              color: 'white',
            }
          : {}),
      }}
    >
      <Title style={{ textTransform: 'uppercase', fontSize: 34 }}>
        {title}
      </Title>
    </Box>
  )
}

class TechnologyPage extends Component {
  render() {
    return (
      <Layout>
        <div style={{ height: 664, background: '#EBF4EC', overflow: 'hidden' }}>
          <Section style={{ height: '100%', position: 'relative' }}>
            <TitleAndText
              title="We are the central nervous system of global crypto asset management"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
      eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo.
      Donec quis imperdiet ligula."
              renderExtra={Subscribe}
              style={{ marginLeft: 30 }}
            />
            <Image name="dots" className={styles.backgroundImage} />
          </Section>
        </div>
        <Section row>
          <div
            style={{ position: 'relative', display: 'flex', paddingLeft: 15 }}
          >
            <div className={styles.blueBackground} />
            <VerticalBox
              title="Core"
              text="We deliver the deepest Data Lake ever on the blockchain ecosystem. Our datasets are available via API and directly over Python, R or Excel."
            />
            <VerticalBox
              title="Alternative"
              text="We transform raw data sets into unique predictive insights and sentiment analysis. Token Data offers the ultimate alpha sources on the blockchain economy."
            />
          </div>
          <TitleAndText
            title="An immeasurable source of data lies in our platform"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
      eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo.
      Donec quis imperdiet ligula."
            style={{ marginLeft: 45 }}
          />
        </Section>
        <Section row>
          <div style={{ display: 'flex' }}>
            <Title>Why do we need data</Title>
            <div style={{ width: 780, marginLeft: 30 }}>
              <p>
                At Token Data, we will use Big Data to collect and produce
                datasets pertaining to the blockchain economy which can be
                useful to our users. We began by electing to create a Data Lake
                by gathering data according to the categories developed below
                (core, trade & alternative).
              </p>
              <p>
                To achieve the best performance, the data chain value must be
                fed with high quality data. These data, if robust and deep, have
                a significant impact on the effectiveness of investments.
                Several factors are at the root of a misuse of data: - high
                quality data is difficult to acquire, comes from different
                sources and is not aggregated - the delivery frequency of these
                data varies from one source to another, which implies
                significant processing costs of sending data to models when they
                need it
                <br />- Data is provided in a variety of formats, making formal
                transparency mandatory for efficient organization
                <br />- Data storage can complicate their reading and readiness
                to use
              </p>
              <p>
                Working with a trusted partner to acquire high quality data and
                then conscientiously organizing and manipulating it is essential
                for businesses today if they want to improve their efficiency.
              </p>
              <div className={styles.line} />
            </div>
          </div>
        </Section>
        <Section>
          <Title style={{ textAlign: 'center', marginBottom: 60 }}>
            The data hierarchy
          </Title>
          <div style={{ position: 'relative' }}>
            <div className={styles.triangleBackground} />
            <div className={styles.horizontalContainer}>
              <HorizontalBox title="Alternative" black />
              <p className={styles.horizontalText}>
                Our Data Lake is continuously improved by the creation of alpha
                sources, the most valuable source of information in today’s data
                driven world. With the power of Machine Learning algorithms,
                we’re able to create new indicators to be used in decision
                models, in order for our users to get unfair advantages toward
                their concurrents.
                <br />
                Examples : scam index that determines if an ICO project is going
                to be a fraud, risk index to evaluates the speculative risk
                associated with a token…
              </p>
            </div>
            <div className={styles.horizontalContainer}>
              <HorizontalBox title="Core" />
              <p className={styles.horizontalText}>
                Essential financial and economic data, from the PNL to the team
                conducting the project. We get those data by vectorizing the
                whitepapers in order to transform them into exploitable
                measures. The datasets into this category help analyse the
                company on its fundamentals and are essential to understand what
                are its taking and ending. Core data are the principal source of
                information when deciding if a project is viable and if it will
                reach its goals. We daily collect more than 2M data to enrich
                our Data Lake.
              </p>
            </div>
            <div className={styles.horizontalContainer}>
              <HorizontalBox title="Trade" />
              <p className={styles.horizontalText}>
                Our Tradebook offers a way to actively manage complex trading
                strategies in more than 40 global crypto exchanges. It consists
                of both historical data and on-going ones, used for a wide range
                of applications such as training and backtesting automated
                trading systems and strategies, getting investment insights...
                We’ll soon provide users with a single platform that uses
                quantitative data models and analytic-driven selection to route
                orders to a suite of destinations, empowering traders to
                optimize execution
              </p>
            </div>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default TechnologyPage
