import React, { Component } from 'react'

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
          <div>React Component hot or not IS HOT!!!</div>
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