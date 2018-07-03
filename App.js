import React, { Component } from 'react';
import { AppRegistry, Text, View , Image, StyleSheet, ScrollView } from 'react-native';
import { Blink } from './components/Blink';
import { Greeting } from './components/Greeting';
import { PizzaTranslator } from './components/PizzaTranslator';
import { ButtonBasics } from './components/ButtonBasics';
import { FlatListBasics } from './components/FlatListBasics';
import { SectionListBasics } from './components/SectionListBasics';
import { FetchExample } from './components/FetchExample';

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default class Render extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView style={{flex:1 , padding:20}}>
        <View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Greeting name='Rexxar' />
            <Greeting name='Jaina' style ={styles.bigblue}/>
            <Greeting name='Valeera' style = {[styles.bigblue, styles.red]}/>
            <Text></Text>
            <Blink text='I love to blink' color= {{color:'red'}}/>  
            <Blink text='Yes blinking is so great' color =  {styles.bigblue}/>
            <Image source={pic} style={{width: 193, height: 110}}/>
          </View>
          <View style={{flex:1, flexDirection: 'column'}}>
            <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
            <View style={{backgroundColor: 'powderblue'}}><Text>flexeado</Text></View>
          </View>
            <ButtonBasics/>
            <PizzaTranslator/>  
            <FlatListBasics/>
            <SectionListBasics/>
            <FetchExample/>
        </View>
      </ScrollView>
    );
  }
}

function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}

async function getMoviesFromApi() {
  try {
    let response = await fetch(
      'https://facebook.github.io/react-native/movies.json'
    );
    let responseJson = await response.json();
    return responseJson.movies;
  } catch (error) {
    console.error(error);
  }
}