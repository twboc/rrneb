

import { Component } from 'react'

declare interface HeaderProps {}
declare interface HeaderState {
    toggle: boolean
}

class HeaderBase extends Component<HeaderProps, HeaderState> {

    constructor(props: any) {
        super(props)
        this.state = {toggle: false}
        this.handleClick = this.handleClick.bind(this);
    }

    toggle(toggle?: boolean) {
        this.setState(state => ({
            toggle: toggle
                ? toggle
                : !state.toggle
        }))
    }
    
    handleClick() { this.toggle() }
    
}

export default HeaderBase