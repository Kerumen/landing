import React, { Component } from 'react'

import Title from '../../../components/Title'

import styles from './styles.module.scss'

class Timeline extends Component {
  state = { width: 0, height: 0 }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    const { width } = this.state
    const containerWidth = 1170
    const initialSpacing = 90
    const position = initialSpacing + Math.max((width - containerWidth) / 2, 0)
    const gap = 17
    const padding = Math.ceil(position / gap) * gap

    return (
      <div className={styles.timeline}>
        <div className={styles.inner} style={{ padding: `0px ${padding}px` }}>
          <div className={styles.lines} />
          {[1, 2, 3, 4, 5, 6].map(index => (
            <div
              key={index}
              className={
                index < 4 ? styles.quarterBox : styles.quarterBoxFuture
              }
            >
              <Title style={{ fontSize: 24, lineHeight: '24px' }}>
                Q3 2017
              </Title>
              <div className={styles.quarterLine} />
              <div>
                <ul className={styles.quarterContent}>
                  <li>- Design creation</li>
                  <li>- Architectural</li>
                  <li>- Business advantages</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Timeline
