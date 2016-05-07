// @flow weak

import React, { Alert, Navigator } from 'react-native'

import { Answers } from 'react-native-fabric'

import SwipeActions from './swipe-actions'
import Action from './action'
import Pager from './pager'
import Add from './add'

import messages from '../messages'

const upperAction = navigator => () => {
  navigator.push({ screen: 'add' })
  Answers.logCustom('Add button clicked', {})
}
 
const onPressRemove = dispatch => () => {
  dispatch({ type: 'REMOVE' })
  Answers.logCustom('Sentence Removed', {})
}

const lowerAction = ({ dispatch }) => ({ sentences }) => {
  if (sentences && sentences.length > 0) {
    Answers.logCustom('Remove button clicked', {})
    Alert.alert(
      messages.delete_title,
      messages.delete_body,
      [
        { text: 'CANCEL', onPress: () => {}, style: 'cancel' },
        { text: 'DELETE', onPress: onPressRemove(dispatch) },
      ]
    )
  }
}

const renderScene = props => ({ screen }, navigator) => {
  const upperNode = <Action type={'add'} />
  const lowerNode = <Action type={'remove'} />

  const hasSentence = props.state.sentences && props.state.sentences.length > 0

  return screen === 'add'
    ? <Add text={props.state.toAdd} dispatch={props.dispatch} navigator={navigator} />
    : <SwipeActions
        actionParameter={props.state}
        upperNode={upperNode}
        lowerNode={hasSentence ? lowerNode : null}
        upperAction={upperAction(navigator)}
        lowerAction={lowerAction(props)}>
        <Pager {...props} />
      </SwipeActions>
}

export default props => (
  <Navigator
    initialRoute={{ screen: 'pager' }}
    renderScene={renderScene(props)}
    configureScene={() => Navigator.SceneConfigs.FloatFromBottomAndroid} />
  )
