import React, { Component } from 'react';
import { Text } from 'react-native';

export class Greeting extends Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
          <Text>Hello {this.props.name}!</Text>
      );
    }
}