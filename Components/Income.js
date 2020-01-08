import React from 'react'
import { View, Text, Button,ActivityIndicator,TouchableOpacity, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator ,createBottomTabNavigator} from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
const firebase = require("firebase");

export default class Income extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          Income:null,
        }
      }



      
      uploadIncome=()=>{
        if(this.state.Income !== null){
          var fed=this;
      firebase.database().ref('Income/').set({
          Income:fed.state.Income,
        }).then(
            user => {fed.props.navigation.navigate('Home')
      })
        }
    }
  render() {
    // const { data } = this.props.navigation.state.params.data;
    // console.log('data',state.data)
    // const data1 = navigation.getParam ( 'data' )
    return (
      <View style={styles.container}>
            

            <View style={styles.upper} >
            <Text style={styles.text} > Income {this.props.navigation.state.params.data} </Text>
                </View>
                <View style={styles.lower} >
                <TextInput
          style={styles.textInput}
          autoComplete="Sort code"
          keyboardType="numeric"
          placeholder="Write Expences here"
          onChangeText={Income => this.setState({ Income })}
          value={this.state.Income}
        />

         <TouchableOpacity 
        style = {styles.text1} 
        onPress={()=>this.uploadIncome()}
        >
            <Text style = {styles.connect}>
               Add Income
            </Text>
         </TouchableOpacity>
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

