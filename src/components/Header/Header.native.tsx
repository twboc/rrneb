import React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native'

import HeaderBase from './Header.base'
import style from './style/Header'

class Header extends HeaderBase { 

    render() {
        return (
            <TouchableOpacity onPress={this.handleClick}>
                <View style={style.header}>
                    <Text>
                        Header Toggle: {this.state.toggle.toString()}
                    </Text>
                </View>
            </TouchableOpacity>
            
        )
    }
}

export default Header
