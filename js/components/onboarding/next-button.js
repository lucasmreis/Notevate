import React, {
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback
} from 'react-native'

import messages from '../../messages'
import colors from '../colors'

export default ({ goToPage, toIndex }) => (
  <TouchableNativeFeedback
    onPress={goToPage(toIndex)}
    background={TouchableNativeFeedback.Ripple(colors.darkerOnboardOk, false)} >

    <View style={styles.button}>
      <Image source={require('../images/arrow.png')} />
    </View>

  </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
  button: {
    height: 55,
    backgroundColor: colors.onboardOk,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
    // borderWidth: 1,
    // borderColor: 'red'
  }
})