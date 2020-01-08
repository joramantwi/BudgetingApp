import React, { Component } from 'react';
// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { StyleSheet, Text, TextInput, View,Image ,Button,TouchableOpacity ,ScrollView,TouchableNativeFeedback} from 'react-native'
import { createMaterialTopTabNavigator ,createBottomTabNavigator} from 'react-navigation';
const firebase = require("firebase");

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:null,
      cc:null,
      sort:null,
      account:null,
      cvv:null,
      errorMessage:null
    }
  }
  

connect = () => {

  var fed=this;
if(this.state.name == null || this.state.cc==null || this.state.sort==null || this.state.account==null || this.state.cvv==null ){
 this.setState({
   errorMessage:"Kindly fill all fields"
 })
}
else{
    var Id= firebase.auth().currentUser.uid; 
   firebase.database().ref('Card/'+this.state.cc).once('value',function (snapshot){
     const validcc=snapshot.exists();
     if(validcc == true){
       fed.setState({
         errorMessage:'Card Number Already exist'
       })
     }else{

      firebase.database().ref('User/'+Id+'/').update({
        cc:fed.state.cc,
      });
   
      firebase.database().ref('Card/'+fed.state.cc+'/').set({
       cardholdername:fed.state.name,
       cc:fed.state.cc,
       sort:fed.state.sort,
       account:fed.state.account,
       cvv:fed.state.cvv,
       userkey:Id
      })
      .then(user => {fed.props.navigation.navigate('Home')
        })
      .catch(error => fed.setState({ errorMessage: error.message }))
       
     }

   });
  

  
   
  }
}





  render() {
    return (
      <View style={styles.container}>
<ScrollView>
          <View style={styles.upper}>
          <Image
                style={{width: '60%', height: 180,resizeMode : 'stretch' }}
                source={require('./piggy.png')}  
               /> 
          </View>
          <View style={styles.lower}>
          <Text style={styles.headline}>Link Penny to your bank account</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoComplete="username"
          placeholder="Name on card"
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />
        <TextInput
          style={styles.textInput}
          autoComplete="cc-number"
          keyboardType="numeric"
          placeholder="16 digit card number"
          onChangeText={ cc => this.setState({cc})}
          value={this.state.cc}
        />
        <TextInput
          style={styles.textInput}
          autoComplete="Sort code"
          keyboardType="numeric"
          placeholder="Sort code"
          onChangeText={sort => this.setState({ sort })}
          value={this.state.sort}
        />
        <TextInput
          style={styles.textInput}
          autoComplete="numeric"
          placeholder="Account number"
          onChangeText={account => this.setState({ account })}
          value={this.state.account}
        />
        <TextInput
          style={styles.textInput}
          autoComplete="cc-number"
          placeholder="CVV"
          keyboardType="numeric"
          onChangeText={cvv => this.setState({ cvv })}
          value={this.state.cvv}
        />
        <TouchableOpacity 
        style = {styles.text} 
        onPress={()=>this.connect()}
        >
            <Text style = {styles.connect}>
               Connect
            </Text>
         </TouchableOpacity>
          </View>
          </ScrollView>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    
    
  },
upper:{
flex:2,
backgroundColor:"#1f9ad3",
justifyContent: 'center',
    alignItems: 'center'
},
lower:{
flex:4,
paddingBottom: 5,
justifyContent: 'center',
    alignItems: 'center'
},
textInput: {
  paddingRight: 5,
      paddingLeft:20,
      paddingBottom: 2,
      fontSize: 20,
      width: '100%',
      // margin: 15,
      // height: 40,
      // borderColor: '#7a42f4',
      // borderWidth: 1
},
headline:{
        margin:25,
        color: 'black',
        fontSize: 20,
        fontWeight: '200',
},
text:{
  // backgroundColor: '#d3396c',
  // padding: 20,
  // margin: 20,
  // height: 20,
  // width:200,
  // borderRadius: 20,
  // color:'#fff',
  // textAlign:'center',
  marginRight:20,
    marginLeft:20,
    marginTop:10,
    paddingTop:20,
    width:200,
    paddingBottom:20,
    backgroundColor:'#d3396c',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
},
connect:{
  color:'#fff',
  textAlign:'center',
  
}

});