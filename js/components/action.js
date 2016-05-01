// @flow weak

import React, {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native'

import colors from './colors'

const theme = type =>
  type === 'add'
    ? { color: colors.addAction, icon: require('./images/pencil.png'), height: 110 }
    : { color: colors.removeAction, icon: require('./images/trash.png'), height: Dimensions.get('window').height / 4 }

export default ({ type }) => {
  const { color, icon, height } = theme(type)
  return <View style={styles(height, color).actionsView}>
    <Image source={icon} />
  </View>
}

const styles = (height, color) =>
  StyleSheet.create({
    actionsView: {
      backgroundColor: color,
      alignSelf: 'stretch',
      height: height,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
