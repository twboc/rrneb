

import { Component } from 'react'

declare interface HeaderProps {}
declare interface HeaderState {
    isToggleOn: boolean
}

class HeaderBase extends Component<HeaderProps, HeaderState> {

    constructor(props: any) {
        super(props)
        this.state = {isToggleOn: true}
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }))
    }
    
}

export default HeaderBase