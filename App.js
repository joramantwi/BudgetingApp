import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, createAppContainer , createSwitchNavigator ,SafeAreaView } from 'react-navigation'
const firebase = require("firebase");
var config = {
  apiKey: "AIzaSyAvo-92GW0qyvdEvG0JKfRrwHQK10pFzpc",
  authDomain: "reactnativedatabase-d1a35.firebaseapp.com",
  databaseURL: "https://reactnativedatabase-d1a35.firebaseio.com",
  projectId: "reactnativedatabase-d1a35",
  storageBucket: "reactnativedatabase-d1a35.appspot.com",
  messagingSenderId: "540828659804"
};
firebase.initializeApp(config);

//custom files 
//import AppStackNavigator from './AppStackNavigator'
import SettingsScreen from './SettingsScreen'
import HomeScreen from "./HomeScreen";
import Transaction from "./Transaction"
import Expences from './Components/Expences'
import ExpenceField from './Components/ExpenceField'
import ExpencesHistory from './Components/ExpencesHistory'
import Income from './Components/Income'
import IncomeField from './Components/IncomeField'
import IncomeHistory from './Components/IncomeHistory'
import signup from './Components/signup';
import Main from './Components/Main';
import Login from './Components/Login';
import Loading from './Components/Loading';
import Logout from './Components/Logout';
export default class App extends Component {

  render() {
    return (
      <MyApp />
    )
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        {/* <Image
          style={styles.drawerImage}
          source={require('./icons/.png')} /> */}
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

// const SimpleApp = StackNavigator({  
//   Transaction: { screen: Transaction},
// });
// const Stack = {
// 	FirstView: {
// 		screen: Transaction
// 	},
// 	// SecondView: {
// 	// 	screen: SecondView
// 	// },
// 	// ThirdView: {
// 	// 	screen: ThirdView
// 	// }
// };
const stack = StackNavigator(
  {
    Transaction: {
      screen: Transaction,
    },
    Home:{
      screen: HomeScreen,
    },
    Expences:{
      screen:Expences
    },
    ExpenceField:{
      screen:ExpenceField
    },
    Income:{
      screen:Income
    },
    IncomeField:{
      screen:IncomeField
    },
    ExpencesHistory:{
      screen:ExpencesHistory
    },
    IncomeHistory:{
      screen:IncomeHistory
    }
  },
  {
    initialRouteName: 'Home',
  },
);

const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: stack,
  },
  Settings: {
    screen: SettingsScreen
  },
},
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


  // const MyApp = createAppContainer(createSwitchNavigator(
  //   {
  //   Home:Draw,  
  //   Loading:Loading,
  //   Login:Login,
  //   signup:signup,
  //   Main:Main,
  // },
  //   {
  //     initialRouteName: 'Loading'
  //   }
  // ));




const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})
