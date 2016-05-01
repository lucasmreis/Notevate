'use strict';
import React, {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  Dimensions
} from 'react-native';

export const between = (x, min, max) =>
  x < min
    ? min
    : x > max
      ? max
      : x;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  actionContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'transparent'
  },
  actionContents: {}
})

export default React.createClass({
  displayName: 'SwipeActions',
  propTypes: {
    children: React.PropTypes.node.isRequired,
    upperAction: React.PropTypes.func,
    lowerAction: React.PropTypes.func,
    upperNode: React.PropTypes.node,
    lowerNode: React.PropTypes.node
  },
  getInitialState() {
    return {
      anim: new Animated.Value(0)
    };
  },
  componentWillMount() {
    const window = Dimensions.get('window')
    const MAX_Y = window.height / 4

    const upperAction = this.props.upperAction
      ? this.props.upperAction
      : () => {};

    const lowerAction = this.props.lowerAction
      ? this.props.lowerAction
      : () => {};

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        const dy = between(gesture.dy, -MAX_Y, MAX_Y);
        this.state.anim.setValue(dy);
      },
      onPanResponderRelease: (e, gesture) => {
        const dy = between(gesture.dy, -MAX_Y, MAX_Y);

        if (dy === MAX_Y) {
          upperAction(this.props.actionParameter);
        } else if (dy === -MAX_Y) {
          lowerAction(this.props.actionParameter);
        }

        Animated.timing(
          this.state.anim,
          { toValue: 0 }
        ).start();
      }
    });
  },
  renderAction({ node, topInterpolation, opacityInterpolation }) {
    if (node) {
      const s = [styles.actionContainer, {
        top: this.state.anim.interpolate(topInterpolation),
        opacity: this.state.anim.interpolate(opacityInterpolation)
      }];

      return (<Animated.View style={[s, {width: Dimensions.get('window').width}]}>
        {node}
      </Animated.View>);
    }
    return null;
  },
  renderUpperAction(window) {
    const MAX_Y = window.height / 4

    return this.renderAction({
      node: this.props.upperNode,
      topInterpolation: {
        inputRange: [-MAX_Y, 0, MAX_Y],
        outputRange: [-2 * MAX_Y, -MAX_Y, 0]
      },
      opacityInterpolation: {
        inputRange: [-MAX_Y, 0, 0.8 * MAX_Y, MAX_Y],
        outputRange: [0, 0, 0.5, 1]
      }
    });
  },
  renderLowerAction(window) {
    const MAX_Y = window.height / 4

    return this.renderAction({
      node: this.props.lowerNode,
      topInterpolation: {
        inputRange: [-MAX_Y, 0, MAX_Y],
        outputRange: [window.height - MAX_Y, window.height, window.height + MAX_Y] //  + (MAX_Y / 2)
      },
      opacityInterpolation: {
        inputRange: [-MAX_Y, 0.8 * -MAX_Y, 0, MAX_Y],
        outputRange: [1, 0.5, 0, 0]
      }
    });
  },
  render() {
    const window = Dimensions.get('window')
    return (
      <View style={styles.container} {...this.panResponder.panHandlers}>
        {this.props.children}
        {this.renderUpperAction(window)}
				{this.renderLowerAction(window)}
      </View>
    );
  }
});
