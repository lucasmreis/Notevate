import React, {
  View,
  Text,
  TextInput,
  BackAndroid,
  StyleSheet
} from 'react-native'

import { Answers } from 'react-native-fabric'

import KeyboardSpacer from 'react-native-keyboard-spacer'

import messages from '../messages'
import colors from './colors'

import SubmitAction from './submit-action'
import AddBar from './add-bar'

export default React.createClass({
  getDefaultProps() {
    return {
      text: ''
    }
  },
  backHandler() {
    this.props.navigator.popToTop()
    return true
  },
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.backHandler)
  },
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.backHandler)
  },
  addAndGoToPager(action) {
    this.props.dispatch(action)
    this.props.navigator.popToTop()
  },
  render() {
    const dispatch = this.props.dispatch
    return (
      <View style={styles.view}>
        <AddBar onPress={() => {
          this.backHandler()
          Answers.logCustom('Back To Sentences Button Clicked', {})
        }} />

        <View style={styles.textContainer}>
          <TextInput
            autoCapitalize='sentences'
            placeholder={messages.add_placeholder}
            placeholderTextColor={colors.placeholder}
            selectionColor={colors.placeholder}
            underlineColorAndroid={colors.background}
            onChangeText={text => dispatch({ type: 'CHANGE', text })}
            value={this.props.text}
            style={styles.text}
            multiline={true}
            numberOfLines={5}
            autoFocus={true} />
        </View>

        <SubmitAction onPress={() => {
          this.addAndGoToPager({ type: 'ADD' })
          Answers.logCustom('Sentence Added', {})
        }} />

        <KeyboardSpacer />
      </View>
    )
  }
})

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.background
  },
  textContainer: {
    flex: 1,
    padding: 16
  },
  text: {
    fontFamily: 'SourceSansPro-Light',
    fontSize: 24,
    color: colors.fonts
  }
})
