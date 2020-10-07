import React, { Component } from 'react'
import Header from './../Header/Header'

import style from './style/Main.scss'

class Main extends Component<{}, {}> {

  render() {
    return (
      <div className={style.main}>
          <Header />
      </div>
    )
  }
}

export default Main