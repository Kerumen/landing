import React from 'react'

import Title from '../../../components/Title'

import styles from './styles.module.scss'

const WhyBloc = ({ title, content }) => (
  <div className={styles.container}>
    <Title style={{ fontSize: 36, lineHeight: '36px' }}>{title}</Title>
    <div className={styles.line} />
    <div>{content}</div>
  </div>
)

export default WhyBloc
