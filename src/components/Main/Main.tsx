import React, { Component } from 'react'
import Car from './../Header/Header'

import scss from './scss.scss'
import css from './css.css'

class Main extends Component<{}, { value: string }> {
  constructor(props: any) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    const { value } = event.target;
    this.setState(() => {
      return { value }
    })
  }

  render() {
    return (
      <form>
          <Car />
          <div className={css.css}>CSS: React Component hot or not IS HOT!!!</div>
          <div className={scss.scss}>SCSS: React Component hot or not IS HOT!!!</div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Main