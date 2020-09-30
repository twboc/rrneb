import React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native'

import CarBase from './Header.base'

class Car extends CarBase { 

    render() {
        return (
            <TouchableOpacity onPress={this.handleClick}>
                <View>
                <Text>
                    Hi, I am a Car! {this.state.isToggleOn.toString()}
                </Text>
            </View>
            </TouchableOpacity>
            
        )
    }
}

export default Car
