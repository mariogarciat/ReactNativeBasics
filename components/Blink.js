import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Blink extends Component {
    constructor(props) {
      super(props);
      this.state = {isShowingText: true};
  
      // Toggle the state every second
      setInterval(() => {
        this.setState(previousState => {
          return { isShowingText: !previousState.isShowingText };
        });
      }, 1500);
    }
  
    render() {
      let display = this.state.isShowingText ? this.props.text : 'waiting';
      return (
        <View> 
          <Text style ={this.props.color}>{display}</Text>
        </View>
      );
    }
  }


