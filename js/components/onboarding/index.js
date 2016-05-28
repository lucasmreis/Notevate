import React, {
  Text,
  View,
  ViewPagerAndroid,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native'

import colors from '../colors'

export default React.createClass({
  render() {
    return <ViewPagerAndroid
      style={styles.viewPager}
      initialPage={0}>

      <View style={styles.pageStyle}>
        <Text>First page</Text>
      </View>

      <View style={styles.pageStyle}>
        <Text>Second page</Text>
      </View>

      <View style={styles.pageStyle}>
        <Text>Third page</Text>
      </View>

    </ViewPagerAndroid>
  }
})

var styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 16
  }
})
