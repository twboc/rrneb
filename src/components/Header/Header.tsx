import React from 'react'

import CarBase from './Header.base'

class Car extends CarBase { 

    render() {
        return <h2 onClick={this.handleClick}>Hi, I am a Car! {this.state.isToggleOn.toString()}</h2>;
    }
}

export default Car