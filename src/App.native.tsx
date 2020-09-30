import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native'

import Main from './components/Main/Main'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <Main />
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App
