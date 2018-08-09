import React, { Component } from 'react'

import Layout from '../components/layout'
import TitleAndText from '../components/TitleAndText'

class TechnologyPage extends Component {
  render() {
    return (
      <Layout>
        <TitleAndText
          title="Unleash the power of the world’s crypto data"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
      eget libero eget consectetur. Sed a luctus mauris, sit amet rhoncus justo.
      Donec quis imperdiet ligula."
          style={{ marginLeft: 30 }}
        />
      </Layout>
    )
  }
}

export default TechnologyPage
