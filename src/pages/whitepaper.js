import React, { Component } from 'react'

class WhitePaperPage extends Component {
  constructor(props) {
    super(props)

    typeof window !== 'undefined' &&
      window.location.replace(
        'https://storage.googleapis.com/tokendata/WhitePaperTokenData_31%20aout%202018_English%201.6.27.pdf'
      )
  }

  render() {
    return null
  }
}

export default WhitePaperPage
