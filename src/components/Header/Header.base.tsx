

import React, { Component } from 'react'

class CarBase extends React.Component<{}, { isToggleOn: boolean }> {

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

export default CarBase