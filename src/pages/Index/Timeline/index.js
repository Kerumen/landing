import React, { Component } from 'react'

import Title from '../../../components/Title'

import styles from './styles.module.scss'

const steps = [
  {
    past: true,
    when: 'S2 2017',
    what: ['Idea', 'First Data Set collected', 'First econometric analysis'],
  },
  {
    past: true,
    when: 'S1 2018',
    what: [
      'First Trade Data collected',
      'First Core ICO Data collected',
      'Data management processing',
    ],
  },
  {
    past: false,
    when: 'S2 2018',
    what: [
      'Design GUI Interface',
      'Redesign Cloud Architecture',
      'Team sourcing expansion',
    ],
  },
  {
    past: false,
    when: 'S1 2019',
    what: [
      'AI index improvement',
      'Alternative Data Set integration for AI modeling',
      'International expansion',
    ],
  },
  {
    past: false,
    when: 'S2 2019',
    what: [
      'Order management Interface',
      'Valuation Index supervised and unsupervised method',
      'Unvaluation index',
    ],
  },
]

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
        <div
          className={styles.inner}
          style={{
            padding: `0px ${padding}px`,
            width: `${steps.length * (260 + 182) + padding * 2 - 182}px`,
          }}
        >
          <div className={styles.lines} />
          {steps.map(({ when, what, past }) => (
            <div
              key={when}
              className={past ? styles.quarterBox : styles.quarterBoxFuture}
            >
              <Title style={{ fontSize: 24, lineHeight: 1 }}>{when}</Title>
              <div className={styles.quarterLine} />
              <ul className={styles.quarterContent}>
                {what.map(w => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Timeline
