/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Animated,
  Easing
} from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
      }),
      Animated.timing(this.state.progress, {
        toValue: 0,
        duration: 0
      })
    ]).start(this.componentDidMount.bind(this));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <LottieView source={require('./animations/bounching_ball.json')} progress={this.state.progress} />
      </View>
    );
  }
}
