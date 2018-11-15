import React from 'react'
import cx from 'classnames'

import Image from '../../../components/Image'

import styles from './styles.module.scss'

const partners = [
  { name: 'Astek', type: 'text' },
  { name: 'Bankex', type: 'text' },
  { name: 'Coinbase', type: 'text' },
  { name: 'Columbia', type: 'logo' },
  { name: 'Crypto Valley', type: 'text' },
  { name: 'EPFL', type: 'logo' },
  { name: 'Ethereum', type: 'logo' },
  { name: 'GCP', type: 'text' },
  { name: 'London Business School', type: 'logo' },
  { name: 'Maddyness', type: 'logo' },
  { name: 'Medium', type: 'logo' },
  { name: 'Mothers', type: 'logo' },
  { name: 'Product Hunt', type: 'text' },
  { name: 'Steemit', type: 'logo' },
  { name: 'SwissLegal', type: 'text' },
  { name: 'TNW', type: 'text' },
  { name: 'Vaud', type: 'text' },
  { name: 'WeStart', type: 'text' },
]

const Sponsors = () => (
  <div className={styles.container}>
    {partners.map(({ name, type }) => (
      <div className={cx(styles.image, styles[type])}>
        <Image
          key={name}
          type="sponsors"
          name={name.replace(/ /g, '-').toLowerCase()}
          retina={false}
        />
      </div>
    ))}
  </div>
)

export default Sponsors
