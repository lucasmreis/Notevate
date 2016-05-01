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
    ? { color: colors.addAction, icon: require('./images/pencil.png') }
    : { color: colors.removeAction, icon: require('./images/trash.png') }

export default ({ type }) => {
  const { color, icon } = theme(type)
  return <View style={styles(color).actionsView}>
    <Image source={icon} style={styles(color).image}/>
  </View>
}

const styles = color =>
  StyleSheet.create({
    actionsView: {
      height: 110,
      backgroundColor: color,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      height: 48
    }
  })
