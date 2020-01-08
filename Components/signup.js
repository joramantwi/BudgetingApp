import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class SignUpCustomer extends Component{ 

    state={ email:'', password:'', name: '' , errorMessage: null  }
   

    customersignup= () => {
        const firebase = require("firebase");
        const {email, password, name}=this.state
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then( (user)=> {
            firebase.database().ref('User').child(user.user.uid).set({
                email:email,
                password:password,
                name:name,
                key:user.user.uid,
            })
        })
        .then(user => {this.props.navigation.navigate('Main')
        })
        .catch(error=>this.setState({  errorMessage: error.message }))
    }


    render(){
console.log(this.props.navigation.navigate);
        return(
            <View style={styles.container}>
            
               <Text style={{fontSize: 30, color:'#9b81e8'}}>Sign up as a Customer !</Text>
               
               {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
            
              <TextInput 
              placeholder="Name"
              autoCapitalize="none"
              style={styles.textfield}
              onChangeText={name=>this.setState({name})}
              value={this.state.name}  />


              <TextInput
                placeholder="Enter Email..."
                autoCapitalize="none"
                style={styles.textfield}
                onChangeText={email=>this.setState({email})}
                value={this.state.email}
                />

                <TextInput
                placeholder="Enter Pasword..."
                secureTextEntry
                autoCapitalize="none"
                style={styles.textfield}
                onChangeText={password => this.setState({password})}
                value={this.state.password}
                />
                <TouchableOpacity onPress={this.customersignup } >
                <Text style={{fontSize: 40, color:'#9b81e8'}}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} >
                     <Text style={{color:'black'}}> Already have an account? Login</Text>
                 </TouchableOpacity>


            </View>
        )

        
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    textfield:{
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#333',
        fontSize: 10,
        width: '100%',

    }
})
