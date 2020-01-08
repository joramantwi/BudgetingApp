import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
//import firebase from 'firebase'

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const firebase = require("firebase");
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>

      
        <Text style={styles.loginmain}>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity  onPress={this.handleLogin} >
        <Text style={{fontSize: 40, color:'black',fontWeight: '700',}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
         
          onPress={() => this.props.navigation.navigate('signup')}>
          
          <Text style={{color:'black'}}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#333',
        fontSize: 10,
        width: '100%',

  },
  // Login:{
  //   padding: 5,
  //       paddingBottom: 0,
  //       color: '#333',
  //       fontSize: 17,
  //       fontWeight: '700',
  //       width: '100%',
  // },
  loginmain:{
  
        paddingBottom: 0,
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        width: '100%',
        
  }

})
