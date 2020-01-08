import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
const firebase = require("firebase");
//custom components imports 
import CustomHeader from './Components/CustomHeader'
import { ScrollView } from "react-native-gesture-handler";

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state={
      Expences:0,
      Income: 0
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./icons/home-icon.png')}
        style={styles.icon}
      />
    ),
  })

  componentWillMount(){
    firebase.database().ref('Expences/').on('value', snapshot => {
      this.setState({
         Expences: snapshot.val().Expences,
    });
    });
    firebase.database().ref('Income/').on('value', snapshot => {
      this.setState({
         Income: snapshot.val().Income,

    });
    });

  }
  
  render() {
    return (

      <Container>

        {/* <CustomHeader title="Home" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} /> */}

        <Content
          contentContainerStyle={{ flex: 1}}>
          <ScrollView>
          <View style={{ flex :1, }} >
            <View style={{ flex :1, backgroundColor:'#D1D2D4'}}>
            
            <View style={{ flex :1,backgroundColor:"white" ,flexDirection:'row', alignContent:'center',justifyContent:'center',
             margin:3,marginTop:5 ,borderRadius:5 }}>
                
               
                 <View style={{ flex :1,backgroundColor:"white" ,justifyContent:'center',alignItems:'center' }}>
                 <TouchableOpacity  style={styles.button} 
                 onPress={() => {
                  this.props.navigation.navigate('IncomeHistory');                        
              }}>
                
                 <Text style={{fontSize: 15, color: 'black' }}>
                   Income
                   </Text>
                   <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                   {this.state.Income}
                   </Text>
                   </TouchableOpacity>
                   </View>
                   

                  
                  <View style={{ flex :1,fontSize: 20, fontWeight: 'bold', justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity  style={styles.button} 
                  onPress={() => {
                    this.props.navigation.navigate('ExpencesHistory');                        
                }}
                  >
                  <Text style={{fontSize: 15 ,  color: 'black'}}>
                    Expences
                   </Text>
                   <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                   {this.state.Expences}
                   </Text>
                   </TouchableOpacity>
                   </View>
                   

                   
                   <View style={{ flex :1, fontSize: 20, fontWeight: 'bold', justifyContent:'center',alignItems:'center'}}>
                   <TouchableOpacity  style={styles.button} >
                   <Text style={{fontSize: 15, color: 'black'}}>
                     Balance
                   </Text>
                   <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black' ,justifyContent:'center',alignItems:'center'}}>
                   {this.state.Income - this.state.Expences}
                   </Text>
                   </TouchableOpacity>
                   </View>
                   

              </View>
              </View>

              <View style={{ flex :4 }}>
                </View>
            </View>
          </ScrollView>


          <TouchableOpacity style={styles.TouchableOpacityStyle}
                activeOpacity={0.7} 
                    onPress={() => {
                        this.props.navigation.navigate('Transaction'); 
                        console.log("Press button");                       
                    }}>
                    <Image source={require('./icons/moneybutton.png')}  
                    style={styles.ButtonStyle} />
                </TouchableOpacity>
        </Content>

      </Container>

    )
  }

}

export default HomeScreen;


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    bottom: 15,
  },
  ButtonStyle: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding:25
  }
});