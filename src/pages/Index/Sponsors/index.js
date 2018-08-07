import React from 'react'

import Image from '../../../components/Image'

import styles from './styles.module.scss'

const images = [
  [
    'bitcoin',
    'ethereum',
    'crypto-valley',
    'wachsman',
    'kenetic-capital',
    'riot',
    'masschallenge',
    'start-global',
  ],
  [
    'webit-festival',
    'epfl',
    'brennpunkt',
    'un',
    'microsoft-bizspark',
    'pioneers-festival',
    'mme',
  ],
  [
    'ldj-capital',
    'vaud',
    'monaco',
    'validity-labs',
    'trek',
    'eit-food',
    'hello-tomorrow',
  ],
]

const Sponsors = () => (
  <div className={styles.container}>
    {images.map((row, index) => (
      <div key={index} className={styles.row}>
        {row.map(image => (
          <Image
            key={image}
            type="sponsors"
            name={image}
            className={styles.image}
          />
        ))}
      </div>
    ))}
  </div>
)

export default Sponsors
