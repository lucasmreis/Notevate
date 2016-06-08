import React, {
  Text,
  View,
  ViewPagerAndroid,
  StyleSheet
} from 'react-native'

import Page from './page'

import colors from '../colors'

export default React.createClass({
  render() {
    return <ViewPagerAndroid
      style={styles.viewPager}
      initialPage={0}>

      {[0, 1, 2].map(i =>
        <View key={i}>
          <Page index={i} />
        </View>)}

    </ViewPagerAndroid>
  }
})

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 16
  }
})
