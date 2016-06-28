import React, {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback
} from 'react-native'

import messages from '../../messages'
import colors from '../colors'

export default React.createClass({
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

    </View>
  }
})

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    // borderWidth: 1,
    // borderColor: 'red'
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
    alignSelf: 'stretch',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red'
  },
  image: {
    height: 299
  }
})
