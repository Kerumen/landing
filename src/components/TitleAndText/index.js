import React from 'react'
import cx from 'classnames'

import Title from '../Title'

import styles from './styles.module.scss'

const TitleAndText = ({
  title,
  text,
  textStyle,
  withRectangle,
  renderExtra,
  className,
  ...props
}) => (
  <div className={cx(styles.container, className)} {...props}>
    {withRectangle && <div className={styles.rectangle} />}
    <Title style={{ marginBottom: 15, position: 'relative', zIndex: 1 }}>
      {title}
    </Title>
    <div className={styles.text} style={textStyle}>
      {text}
    </div>
    {renderExtra && <div className={styles.extra}>{renderExtra()}</div>}
  </div>
)

export default TitleAndText
