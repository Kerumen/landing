import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import Layout from '../components/Layout'
import Section from '../components/Section'
import Title from '../components/Title'
import Image from '../components/Image'
import TitleAndText from '../components/TitleAndText'
import Button from '../components/Button'
import Box from '../components/Box'
import Line from '../components/Line'

import styles from './technology.module.scss'

const Subscribe = () => (
  <Button href="https://tokendata.typeform.com/to/eUeyVn/">Subscribe</Button>
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

const APIDescription = ({ title, description }) => (
  <div style={{ marginTop: 25 }}>
    <div style={{ fontWeight: 'bold' }}>{title}</div>
    <div>{description}</div>
  </div>
)

const TagRectangle = ({ children, white, width }) => (
  <div
    className={white ? styles.tagRectangleWhite : styles.tagRectangle}
    style={{ width }}
  >
    {!!children && (
      <Title style={{ textTransform: 'uppercase', fontSize: 24 }}>
        {children}
      </Title>
    )}
  </div>
)

class TechnologyPage extends Component {
  state = { color: undefined }

  onPositionChange = ({ currentPosition }) => {
    if (currentPosition === 'above') {
      this.setState({ color: 'white' })
    }
  }

  handleWaypointEnter = () => {
    return this.setState({ color: 'green' })
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
          <div
            style={{ height: 720, background: '#EBF4EC', overflow: 'hidden' }}
          >
            <Section style={{ minHeight: '100%', position: 'relative' }}>
              <TitleAndText
                title="We are the central nervous system of global crypto asset management"
                text="Connecting decision makers to a dynamic network of information, people and ideas, TokenData quickly and accurately delivers business and financial information, news and insight around the world."
                renderExtra={Subscribe}
                style={{ marginLeft: 30 }}
              />
              <Image name="dots" className={styles.backgroundImage} />
            </Section>
          </div>
        </Waypoint>
        <Section row>
          <div className={styles.verticalBoxes}>
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
            text="The first provider for economics, financial, and alternative datasets for crypto asset managers and investment professionals / institutionals. Our platform aims to serve the entire financial network."
          />
        </Section>
        <Section row>
          <div className={styles.dataContainer}>
            <Title>Why do you need data</Title>
            <div className={styles.dataTexts}>
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
                Several factors are at the root of a misuse of data:
                <br />- high quality data is difficult to acquire, comes from
                different sources and is not aggregated
                <br />- the delivery frequency of these data varies from one
                source to another, which implies significant processing costs of
                sending data to models when they need it
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
              <Line />
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
                Examples: scam index that determines if an ICO project is going
                to be a fraud, risk index to evaluates the speculative risk
                associated with a token...
              </p>
            </div>
            <div className={styles.horizontalContainer}>
              <HorizontalBox title="Core" />
              <p className={styles.horizontalText}>
                Essential financial and economic data, from the PNL to the team
                conducting the project. We get those data by vectorizing the
                White Papers in order to transform them into exploitable
                measures. The datasets into this category help analyse the
                company on its fundamentals and are essential to understand what
                are its taking and ending. Core data are the principal source of
                information when deciding if a project is viable and if it will
                reach its goals. We daily collect more than 2M data to enrich
                our Data Lake.
                <br />
                Examples: middle term sales objectives, localisation of the
                company, sector of activity, number of resources in the tech
                department...
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
                optimize execution.
                <br />
                Examples: BTC/ETH prices on 5 mins time range over the 10
                biggest exchanges, Simple Floating Averages at 10, 30 and 50
                days, Commodity Channel Index...
              </p>
            </div>
          </div>
        </Section>
        <Section row>
          <div className={styles.apiContainer}>
            <div>
              <Title>Millions of datasets, One API</Title>
              <APIDescription
                title="All The Data You Want"
                description="Tokendata brings together over 20 million financial and economic
                datasets from over 500 sources on one easy-to-use platform."
              />
              <APIDescription
                title="One Single Interface"
                description="All datasets on Tokendata are available via the same API, irrespective of who originally published the data or in what format."
              />
              <APIDescription
                title="New Data Added Weekly"
                description="New datasets are added to Tokendata every week. Need some data we don’t have yet? Email us and we can add it for you."
              />
              <APIDescription
                title="The Last API You’ll Ever Need"
                description="Token Data abstracts away your need to handle multiple sources and ever-changing publication formats. Get your data via Tokendata, and don’t worry about fickle publishers ever again."
              />
            </div>
            <div className={styles.terminalContainer}>
              <div className={styles.terminalWindow}>
                <div className={styles.terminalWindowCircle} />
                <div className={styles.terminalWindowCircle} />
                <div className={styles.terminalWindowCircle} />

                <div className={styles.terminal}>
                  <div>$ curl https://tokendata.ai/v1/datasets \</div>
                  <div>-u sk_test_BQokikJOvBiI2HlWgH4olfQ2: \</div>
                  <div>-d source=tok_1Cr8602eZvKYlo2C9nR4gakO \</div>
                  <div>-d description="Anthony Smith" \</div>
                  <div>-d email="anthony.smith.78@example.com"</div>
                </div>
              </div>
              <div className={styles.technoContainer}>
                <img src={require('../images/techno/excel.svg')} alt="excel" />
                <img
                  src={require('../images/techno/python.svg')}
                  alt="python"
                />
                <img src={require('../images/techno/java.svg')} alt="java" />
                <img
                  src={require('../images/techno/javascript.svg')}
                  alt="javascript"
                />
                <img src={require('../images/techno/xml.svg')} alt="xml" />
                <img src={require('../images/techno/r.svg')} alt="r" />
              </div>
            </div>
          </div>
        </Section>
        <Section row>
          <div
            style={{
              border: '10px solid black',
              display: 'flex',
              alignItems: 'center',
              height: 480,
              padding: '0 30px',
            }}
          >
            <TitleAndText
              title="Our insights powered by AI"
              text="To help our internal team of data scientists, we rely on the best data scientist of the world, through the recurrent organisation of prize competitions, to improve our indicators’ accuracy."
            />
            <div className={styles.aiContainer}>
              <div style={{ marginBottom: 30, display: 'flex' }}>
                <TagRectangle />
              </div>
              <div style={{ marginBottom: 30, display: 'flex' }}>
                <TagRectangle white>Scam Rating</TagRectangle>
                <TagRectangle width={120} />
              </div>
              <div style={{ marginBottom: 30, display: 'flex' }}>
                <TagRectangle>Team Solidity</TagRectangle>
                <TagRectangle>Technology</TagRectangle>
              </div>
              <div style={{ display: 'flex' }}>
                <TagRectangle>Risk Index</TagRectangle>
                <TagRectangle width={180} />
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default TechnologyPage
