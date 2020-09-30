import React from 'react'
import HeaderBase from './Header.base'
import style from './style/Header.scss'

class Header extends HeaderBase { 

    render() {
        return <div className={style.header} onClick={this.handleClick}>Header Toggle: {this.state.toggle.toString()}</div>;
    }
}

export default Header