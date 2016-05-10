import React, {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

import colors from './colors'

export default ({ onPress }) => (
  <TouchableNativeFeedback
    onPress={onPress}
    background={TouchableNativeFeedback.Ripple(colors.darkerBackground, false)}>

    <View style={styles.action}>
      <View style={styles.imageContainer}>
        <Image source={require('./images/back-arrow.png')} style={styles.image} />
      </View>
    </View>

  </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
  action: {
    backgroundColor: colors.background,
    alignSelf: 'stretch',
    padding: 16
  },
  imageContainer: {
    height: 24,
    padding: 4
  },
  image: {
    height: 16,
    width: 16,
    opacity: 0.54
  }
})
