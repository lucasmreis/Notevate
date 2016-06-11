import React, {
  Text,
  View,
  ViewPagerAndroid,
  StyleSheet
} from 'react-native'

import Page from './page'

import colors from '../colors'

const imageSources = [
  require('../images/onboarding-step-1.png'),
  require('../images/onboarding-step-2.png'),
  require('../images/onboarding-step-3.png')
]


export default React.createClass({
  viewPager: undefined,

  goToPage(index) {
    return () => {
      if (this.viewPager) {
        this.viewPager.setPage(index)
      }
    }
  },

  render() {
    return <ViewPagerAndroid
      style={styles.viewPager}
      initialPage={0}
      ref={viewPager => this.viewPager = viewPager}>

      {[0, 1, 2].map(i =>
        <View key={i}>
          <Page index={i}
                src={imageSources[i]}
                goToPage={this.goToPage}
                navigator={this.props.navigator} />
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
