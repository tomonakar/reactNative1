import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar'
import MemoListScreen from './src/screens/MemoListScreen'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <MemoListScreen />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78
  },
})
