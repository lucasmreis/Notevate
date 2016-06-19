import React, {
  Text,
  View,
  ViewPagerAndroid,
  StyleSheet
} from 'react-native'

import Page from './page'
import NextButton from './next-button'
import SubmitAction from '../submit-action'

import colors from '../colors'

const imageSources = [
  require('../images/onboarding-step-1.png'),
  require('../images/onboarding-step-2.png'),
  require('../images/onboarding-step-3.png')
]

const dotStyle = (selected, current) => {
  if (selected === current) {
    return [styles.dot, styles.selected]
  } else {
    return styles.dot
  }
}

export default React.createClass({
  getInitialState() {
    return {
      currentPage: 0
    }
  },

  viewPager: undefined,

  goToPage(index) {
    return () => {
      if (this.viewPager) {
        this.viewPager.setPage(index)
        this.setState({ currentPage: index })
      }
    }
  },

  navButton(index) {
    if (index === 0 || index === 1) {
      return <NextButton goToPage={this.goToPage} toIndex={index + 1} />
    } else {
      return <SubmitAction onPress={() => this.props.navigator.push({ screen: 'add' })} />
    }
  },

  render() {
    return (<View style={styles.container}>
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}
        onPageSelected={e => this.setState({ currentPage: e.nativeEvent.position })}
        ref={viewPager => this.viewPager = viewPager}>

        {[0, 1, 2].map(i =>
          <View key={i}>
            <Page index={i}
                  src={imageSources[i]} />
          </View>)}

      </ViewPagerAndroid>

      <View style={styles.dots}>
        <View style={dotStyle(this.state.currentPage, 0)} />
        <View style={dotStyle(this.state.currentPage, 1)} />
        <View style={dotStyle(this.state.currentPage, 2)} />
      </View>

      {this.navButton(this.state.currentPage)}

    </View>)
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 16
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    height: 54,
    alignItems: 'center'
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
    borderWidth: 0,
    backgroundColor: colors.onboardDots
  }
})
