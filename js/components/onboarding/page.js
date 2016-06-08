import React, {
  Text,
  View,
  StyleSheet
} from 'react-native'

import messages from '../../messages'
import colors from '../colors'

const dotStyle = (selected, current) => {
  if (selected === current) {
    return [styles.dot, styles.selected]
  } else {
    return styles.dot
  }
}

export default React.createClass({
  render() {
    const { index } = this.props
    return <View style={styles.pageStyle}>
      <View>
        <Text>IMAGE</Text>
      </View>

      <Text style={styles.text}>
        {messages.onboarding[index]}
      </Text>

      <View style={styles.dots}>
        <View style={dotStyle(index, 0)} />
        <View style={dotStyle(index, 1)} />
        <View style={dotStyle(index, 2)} />
      </View>

      <View>
        <Text>BUTTON</Text>
      </View>
    </View>
  }
})

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 24,
    color: colors.fonts,
    textAlign: 'center',
    margin: 16
  },
  dots: {
    flexDirection: 'row'
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
  }
})
