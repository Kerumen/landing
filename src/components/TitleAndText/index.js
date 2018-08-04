import React from 'react'

import Title from '../Title'

import styles from './styles.module.scss'

const TitleAndText = ({
  title,
  text,
  withRectangle,
  renderExtra,
  ...props
}) => (
  <div className={styles.container} {...props}>
    {withRectangle && <div className={styles.rectangle} />}
    <Title style={{ marginBottom: 15, position: 'relative', zIndex: 1 }}>
      {title}
    </Title>
    <div className={styles.text}>{text}</div>
    {renderExtra && <div className={styles.extra}>{renderExtra()}</div>}
  </div>
)

export default TitleAndText
