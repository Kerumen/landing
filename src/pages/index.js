import React from 'react'

import Layout from '../components/layout'
import TitleAndText from '../components/TitleAndText'
import Image from '../components/Image'
import Button from '../components/Button'
import Input from '../components/Input'

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

const IndexPage = () => (
  <Layout>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 60 }}>
      <TitleAndText
        title="Unleash the power of the world’s crypto data"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
      eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo.
      Donec quis imperdiet ligula."
        renderExtra={SubscribeForm}
        style={{ marginLeft: 30 }}
      />
      <Image name="home-1" />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: 85 }}>
      <Image name="home-2" />
      <TitleAndText
        title="Technology at it’s best to serve business intelligence"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
      eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo.
      Donec quis imperdiet ligula."
        renderExtra={SeeMore}
      />
    </div>
  </Layout>
)

export default IndexPage
