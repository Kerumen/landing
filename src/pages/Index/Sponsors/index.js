import React from 'react'
import cx from 'classnames'

import Image from '../../../components/Image'

import styles from './styles.module.scss'

const partners = [
  { name: 'Astek', size: [103, 28] },
  { name: 'Bankex', size: [125, 34] },
  { name: 'Coinbase', size: [103, 36] },
  { name: 'Columbia', size: [55, 59] },
  { name: 'Crypto Valley', size: [107, 21] },
  { name: 'EPFL', size: [46, 52] },
  { name: 'Ethereum', size: [80, 53] },
  { name: 'GCP', size: [155, 40] },
  { name: 'Medium', size: [80, 60] },
  { name: 'Product Hunt', size: [133, 24] },
  { name: 'Steemit', size: [70, 53] },
  { name: 'SwissLegal', size: [112, 56] },
  { name: 'TNW', size: [80, 34] },
  { name: 'Vaud', size: [80, 16] },
  { name: 'WeStart', size: [76, 20] },
]

const Sponsors = () => (
  <div className={styles.container}>
    {partners.map(({ name, size: [width, height] }) => (
      <div className={styles.image}>
        <Image
          key={name}
          type="sponsors"
          name={name.replace(/ /g, '-').toLowerCase()}
          retina={true}
          // style={{ width, height }}
        />
      </div>
    ))}
  </div>
)

export default Sponsors
