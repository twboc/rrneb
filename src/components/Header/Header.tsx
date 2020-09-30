import React from 'react'

import HeaderBase from './Header.base'

class Header extends HeaderBase { 

    render() {
        return <h2 onClick={this.handleClick}>Header Toggle: {this.state.isToggleOn.toString()}</h2>;
    }
}

export default Header