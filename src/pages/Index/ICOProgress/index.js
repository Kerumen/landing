import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Title from '../../../components/Title'

import styles from './styles.module.scss'

const ICOProgress = () => (
  <StaticQuery
    query={graphql`
      query ICOQuery {
        configJson {
          ico {
            progress
            total
          }
        }
      }
    `}
    render={({ configJson: { ico } }) => (
      <div className={styles.container}>
        <div className={styles.inner}>
          <Title style={{ textAlign: 'right', marginBottom: 15 }}>
            {ico.progress} ETH
          </Title>
          <div className={styles.bars}>
            <div className={styles.background} />
            <div
              className={styles.bar}
              style={{
                width: `calc(${(ico.progress / ico.total) * 100}% - 20px)`,
              }}
            />
          </div>
        </div>
        <div className={styles.stages}>
          {['1st', '2nd', '3rd', '4th'].map((nb, index) => (
            <div key={index} className={styles.stage}>
              <div className={styles.stageIndicator} />
              <div style={{ opacity: index >= 2 ? 0.5 : 1 }}>
                <div className={styles.stageTitle}>{nb} stage</div>
                <div className={styles.stageContent}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  lobortis eget libero eget consectetur. Sed a luctus mauris,
                  sit amet rhoncus justo. Donec quis imperdiet ligula.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  />
)

export default ICOProgress
