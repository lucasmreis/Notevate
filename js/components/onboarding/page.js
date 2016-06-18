import React, {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback
} from 'react-native'

import messages from '../../messages'
import colors from '../colors'

import NextButton from './next-button'
import SubmitAction from '../submit-action'

const dotStyle = (selected, current) => {
  if (selected === current) {
    return [styles.dot, styles.selected]
  } else {
    return styles.dot
  }
}

export default React.createClass({
  navButton(index) {
    if (index === 0 || index === 1) {
      return <NextButton goToPage={this.props.goToPage} toIndex={index + 1} />
    } else {
      return <SubmitAction onPress={() => this.props.navigator.push({ screen: 'add' })} />
    }
  },

  render() {
    const { index, src } = this.props
    return <View style={styles.pageStyle}>
      <View style={styles.imageContainer}>
        <Image source={src} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {messages.onboarding[index]}
        </Text>
      </View>

      <View style={styles.dots}>
        <View style={dotStyle(index, 0)} />
        <View style={dotStyle(index, 1)} />
        <View style={dotStyle(index, 2)} />
      </View>

      {this.navButton(index)}
    </View>
  }
})

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textContainer: {
    height: 160,
    // borderWidth: 1,
    // borderColor: 'red'
  },
  text: {
    fontFamily: 'SourceSansPro-Light',
    fontSize: 24,
    color: colors.fonts,
    textAlign: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 32
  },
  dots: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
    height: 54,
    alignItems: 'center'
  },
  dot: {
    width: 10,
    height: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.onboardDots
  },
  selected: {
    backgroundColor: colors.onboardDots
  },
  button: {
    height: 55,
    backgroundColor: colors.onboardOk,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
    // borderWidth: 1,
    // borderColor: 'red'
  },
  imageContainer: {
    // borderWidth: 1,
    // borderColor: 'red'
  },
  image: {
    height: 299
  }
})
