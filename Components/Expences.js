import React from 'react'
import { View, Text, Button,ActivityIndicator,TouchableOpacity, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator ,createBottomTabNavigator} from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
const firebase = require("firebase");


export default class Expences extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          Expences:null,
          total:null,
        }
      }
      // componentWillMount(){
      //   if(this.props.navigation.state.params.data  === "Add" ){
      //     console.log('ADD')

      //   }
      //   console.log("Component" ,this.props.navigation.state.params.data)
      // }

      uploadExpences=()=>{
        if(this.state.Expences !== "ADD"){
          var fed=this;
        //   var totalexpence
        //   firebase.database().ref('Expences/').once('value',function (snapshot){ 
        //     totalexpence=snapshot.val().Expences
        //     console.log("expenceupload :",totalexpence);
        //     //totalexpence = totalexpence.reduce(fed.state.Expences);
        //     // console.log("totalexpenceadded :",totalexpence);
        //     // fed.setState({
        //     //   total : totalexpence
        //     // })


        //     // console.log("total",fed.state.total);
        //   })



        //  var retotal= totalexpence + this.state.Expences;
        //   console.log(" retotal :", retotal);
        //    this.setState({
        //       total: retotal
        //     })

        firebase.database().ref('Expences/').update({
            Expences:fed.state.Expences,
          }).then(
              user => {fed.props.navigation.navigate('Home')
        })

        }else{
          console.log("This is ADD");
        }
      }

  render() {
    // const { data } = this.props.navigation.state.params.data;
    // console.log('data',state.data)
    // const data1 = navigation.getParam ( 'data' )
    return (
      <View style={styles.container}>
            

            <View style={styles.upper} >
            <Text style={styles.text} > Expences {this.props.navigation.state.params.data} </Text>
                </View>
                <View style={styles.lower} >
                <TextInput
          style={styles.textInput}
          autoComplete="Sort code"
          keyboardType="numeric"
          placeholder="Write Expences here"
          onChangeText={Expences => this.setState({ Expences })}
          value={this.state.Expences}
        />

         <TouchableOpacity 
        style = {styles.text1} 
        onPress={()=>this.uploadExpences()}
        >
            <Text style = {styles.connect}>
               Add Expences
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

