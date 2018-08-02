import React from 'react'

import Title from '../Title'

import styles from './styles.module.css'

const TitleAndText = ({ title, text }) => (
  <div style={{ maxWidth: 550 }}>
    <Title style={{ marginBottom: 15 }}>{title}</Title>
    <div>{text}</div>
  </div>
)

export default TitleAndText
