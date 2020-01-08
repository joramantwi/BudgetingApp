import React from 'react'
import { View, Text, Button,ActivityIndicator,TouchableOpacity, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator ,createBottomTabNavigator} from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';


export default class ExpencesHistory extends React.Component {
    

  render() {
    // const { data } = this.props.navigation.state.params.data;
    // console.log('data',state.data)
    // const data1 = navigation.getParam ( 'data' )
    return (
      <View style={styles.container}>
            

            <View style={styles.upper} >
            <Text style={styles.text} > Expences History Coming Soon </Text>
                </View>
                <View style={styles.lower} >
                    </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  upper:{
      flex:1,
      backgroundColor:"white",
      justifyContent: 'center',
    alignItems: 'center'
  },
  lower:{
      flex:4,
      backgroundColor:"white",
      justifyContent: 'center',
      alignItems: 'center'
  },
  text:{
      fontSize:20,
      fontWeight: 'bold',
      color:"black"
  },
  text1:{
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

})

