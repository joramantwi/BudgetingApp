import React from 'react'
import { View, Text, Button,ActivityIndicator, StyleSheet } from 'react-native'
const firebase = require("firebase");

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      ccid:null,
      name:null,
      email:null,
      cardname:null,
      account:null,
      cvv:null,
    }
  }

  componentWillMount(){
   
    var Id= firebase.auth().currentUser.uid; 
    var fed=this;
    firebase.database().ref('User/'+Id+'/').once('value',function(snapshot){
      fed.setState({
        ccid:snapshot.val().cc,
        name:snapshot.val().name,
        email:snapshot.val().email,
      })

      firebase.database().ref('Card/'+fed.state.ccid+'/').once('value',function(snapshot){
        fed.setState({
         cardname:snapshot.val().cardholdername,
         account:snapshot.val().account,
         cvv:snapshot.val().cvv
        })
    });
        

     })
  }
 
    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
            console.log("Out");    
        } catch (e) {
            console.log(e);
        }  
    }

  render() {
    
    return (
      <View style={styles.container}>
        <Text>
          
          Name :  {this.state.name}
        </Text>
        <Text>
            Card Holder Name: {this.state.cardname }
        </Text>
        <Text>
            Card Number: {this.state.ccid}
        </Text>
        <Text>
            Account Number: {this.state.account}
        </Text>
        <Text>
            Email : {this.state.email}
        </Text>
        <View>
        <Button color='blue'title='logout' onPress={() => this.signOutUser()} />
            </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

