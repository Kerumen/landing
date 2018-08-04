import React from 'react'

import Title from '../Title'

import styles from './styles.module.scss'

const TitleAndText = ({ title, text, renderExtra, ...props }) => (
  <div className={styles.container} {...props}>
    <Title style={{ marginBottom: 15 }}>{title}</Title>
    <div style={{ textAlign: 'justify' }}>{text}</div>
    {renderExtra && <div style={{ marginTop: 30 }}>{renderExtra()}</div>}
  </div>
)

export default TitleAndText
