import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

export default class Loading extends Component {
  componentDidMount() {
    const firebase = require("firebase");   
    
    firebase.auth().onAuthStateChanged(user => {
     
      if (user) {
        this.props.navigation.navigate('Home')
      }
      else {
        this.props.navigation.navigate('Login')
      }
    })
  }

  render() {
    
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//  backgroundColor:'#2d2c2f',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

