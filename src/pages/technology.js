import React, { Component } from 'react'

import Layout from '../components/layout'
import Title from '../components/Title'
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
    <Box style={{ width: 200, height: 300, justifyContent: 'space-between' }}>
      <Title style={{ textTransform: 'uppercase', fontSize: 34 }}>
        {title}
      </Title>
      <div>{text}</div>
    </Box>
  )
}

const HorizontalBox = ({ title }) => {
  return (
    <Box
      style={{
        width: 300,
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
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
        <section className={styles.firstSection}>
          <div className={styles.headContent}>
            <TitleAndText
              title="We are the central nervous system of global crypto asset management"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
      eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo.
      Donec quis imperdiet ligula."
              renderExtra={Subscribe}
              style={{ marginLeft: 30 }}
            />
          </div>
        </section>
        <section className={styles.secondSection}>
          <VerticalBox title="Core" text="We deliver" />
          <VerticalBox title="Alternative" text="We transform" />
          <TitleAndText
            title="An immeasurable source of data lies in our platform"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
      eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo.
      Donec quis imperdiet ligula."
            style={{ marginLeft: 30 }}
          />
        </section>
        <section className={styles.thirdSection}>
          <Title>Why do we need data</Title>
          <div>
            <p>At Token Data..</p>
            <p>To achieve</p>
            <p>Working</p>
            <div className={styles.line} />
          </div>
        </section>
        <section className={styles.fourthSection}>
          <Title style={{ textAlign: 'center' }}>The data hierarchy</Title>
          <div>
            <div style={{ display: 'flex' }}>
              <HorizontalBox title="Alternative" />
              <p>Our Data Lake...</p>
            </div>
            <div style={{ display: 'flex' }}>
              <HorizontalBox title="Core" />
              <p>Our Data Lake...</p>
            </div>
            <div style={{ display: 'flex' }}>
              <HorizontalBox title="Trade" />
              <p>Our Data Lake...</p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TechnologyPage
