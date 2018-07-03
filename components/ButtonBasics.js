import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, TouchableHighlight, Text, TouchableOpacity } from 'react-native';

export class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    return (
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
            <View style={styles.button}>
                <Text style={styles.buttonText}>Long Press</Text>
            </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
            <View style={styles.button}>
                <Text style={styles.buttonText}>Opacity</Text>
            </View>
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20
  },
  button: {
    marginBottom: 20,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }

})