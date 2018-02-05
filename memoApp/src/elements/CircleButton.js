import React from 'react'
import {Font} from 'expo'
import {StyleSheet, View, Text} from 'react-native'
import fontAwsome from '../../assets/fonts/fontawesome-webfont.ttf'


class CircleButton extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwsome
    })
    this.setState({fontLoaded: true})
  }

  render() {
    const {style, color} = this.props

    let bgColor = '#e31676'
    let textColor = '#fff'

    if (color === 'white') {
      bgColor = '#fff'
      textColor = '#e31676'
    }
    return (
      <View style={[styles.CircleButton, style, {backgroundColor: bgColor}]}>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.CircleButtonTitle, {color: textColor}]}>
              {this.props.children}
            </Text>
          ) : null
        }
      </View>

    )
  }
}

const styles = StyleSheet.create({
  CircleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  CircleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 32,
    color: '#fff'
  }
})

export default CircleButton
