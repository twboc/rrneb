import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './../Header/Header'
import style from './style/Main'

class Main extends Component {

  render() {
    return (<View style={style.main}>
      <Header />
    </View>)
  }
}


export default Main
