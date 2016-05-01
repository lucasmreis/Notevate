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
    background={TouchableNativeFeedback.Ripple(colors.darkerSubmitAction, false)}>

    <View style={styles.action}>
      <Image source={require('./images/check.png')} style={styles.image} />
    </View>

  </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
  action: {
    backgroundColor: colors.submitAction,
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 16,
    height: 55
  },
  image: {
    height: 24
  }
})
