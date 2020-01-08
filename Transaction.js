import React from 'react'
import { View, Text, Image ,
  KeyboardAvoidingView,
  TextInput ,Picker,Button,ActivityIndicator,FlatList, StyleSheet,Dimensions,alert,Alert,TouchableOpacity } from 'react-native'
const firebase = require("firebase");
const data = [
  { key: require("./icons/Food.png"), text: 'Food'}, 
  { key: require("./icons/Bills.png"), text: 'Bills' },
  { key: require("./icons/Transportation.png"), text: 'Transportation' }, 
  { key: require("./icons/Home.png"), text: 'Home' },
  { key: require("./icons/Car.png"), text: 'Car' },
  { key: require("./icons/Entertainment.png"), text: 'Entertainment' },
  { key: require("./icons/Shopping.png"), text: 'Shopping' },
  { key: require("./icons/Clothing.png"), text: 'Clothing' },
  { key: require("./icons/Insurance.png"), text: 'Insurance' },
  { key: require("./icons/Tax.png"), text: 'Tax' },
  { key: require("./icons/Telephone.png"), text: 'Telephone' },
  { key: require("./icons/Cigarette.png"), text: 'Cigarette' },
  { key: require("./icons/Health.png"), text: 'Health' },
  { key: require("./icons/Sport.png"), text: 'Sport' },
  { key: require("./icons/Baby.png"), text: 'Baby' },
  { key: require("./icons/Pet.png"), text: 'Pet' },
  { key: require("./icons/Beauty.png"), text: 'Beauty' },
  { key: require("./icons/Electronics.png"), text: 'Electronics' },
  { key: require("./icons/Hamburger.png"), text: 'Hamburger' },
  { key: require("./icons/Wine.png"), text: 'Wine' },
  { key: require("./icons/Vegetables.png"), text: 'Vegetables' },
  { key: require("./icons/Snacks.png"), text: 'Snacks' },
  { key: require("./icons/Gift.png"), text: 'Gift' },
  { key: require("./icons/Social.png"), text: 'Social' },
  { key: require("./icons/Travel.png"), text: 'Travel' },
  { key: require("./icons/Education.png"), text: 'Education' },
  { key: require("./icons/Fruits.png"), text: 'Fruits' },
  { key: require("./icons/Book.png"), text: 'Book' },
  { key: require("./icons/Office.png"), text: 'Office' },
  { key: require("./icons/Others.png"), text: 'Others' }
];

// const newdata = (data1) =>{
  
//   var all=[];
//   firebase.database().ref('Expences/').once('value',function (snapshot){ 
//     var fields=snapshot.val().Field;
//     console.log("fields :",fields);

//     var keys=Object.keys(fields);
//         console.log("keys :",keys);   
//        for(var i=0; i < keys.length ; i++ ){
//          var k=keys[i];
//          var text=fields[k].text;
        
//         console.log("text :",text)
//         all.push({
//           text:text,
//           key:k
//         })
//        }
//        console.log("all :",all);
//   })
//   return data1;
      
// }

//const data = data2.push(newdata);
  








const dataincome = [
  { key: require("./icons/Food.png"), text: 'Food'}, 
  { key: require("./icons/Bills.png"), text: 'Bills' },
];


showAlert = (index) =>{


  Alert.alert(
   'Alert Title',
   'My Alert Msg = ' + index,
   [
     {text: 'Ask me later', onPress: () => console.log('key')},
     {
       text: 'Cancel',
       onPress: () => console.log('Cancel Pressed'),
       style: 'cancel',
     },
     {text: 'OK', onPress: () => console.log('OK Pressed')},
   ],
   {cancelable: false},
  );
  
}

const formatData2 = (data, numColumns) => {

  var add=[{ key: require("./icons/Add.png"), text: 'Add' }];
  var all=[];
  firebase.database().ref('Income/').once('value',function (snapshot){ 
    var fields=snapshot.val().Field;
    console.log("fields :",fields);

    var keys=Object.keys(fields);
        // console.log("keys :",keys);   
       for(var i=0; i < keys.length ; i++ ){
         var k=keys[i];
         var text=fields[k].text;
         var key=fields[k].key;
        
        console.log("text :",text)
        all.push({
          text:text,
          key:key
        })
       }
       console.log("all :",data);
       data=data.concat(all,add)
      
  })
  
  const numberOfFullRows = Math.floor(data.length / numColumns);
  console.log('numberOfFullRows = '+numberOfFullRows);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  console.log('numberOfElementsLastRow = '+numberOfElementsLastRow);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
  console.log(  data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true }) );
      numberOfElementsLastRow++;
    }
    return data;
  };


const formatData = (data, numColumns) => {

  var add=[{ key: require("./icons/Add.png"), text: 'Add' }];
  var all=[];
  firebase.database().ref('Expences/').once('value',function (snapshot){ 
    var fields=snapshot.val().Field;
    console.log("fields :",fields);

    var keys=Object.keys(fields);
        // console.log("keys :",keys);   
       for(var i=0; i < keys.length ; i++ ){
         var k=keys[i];
         var text=fields[k].text;
         var key=fields[k].key;
        
        console.log("text :",text)
        all.push({
          text:text,
          key:key
        })
       }
       console.log("all :",data);
       data=data.concat(all,add)
      
  })
  
  const numberOfFullRows = Math.floor(data.length / numColumns);
  console.log('numberOfFullRows = '+numberOfFullRows);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  console.log('numberOfElementsLastRow = '+numberOfElementsLastRow);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
  console.log(  data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true }) );
      numberOfElementsLastRow++;
    }
    return data;
  };

const numColumns = 4;
var options=["Expences","Income"]

export default class Logout extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Expences',
      showCalendar: false
    }
    this.handleValueChange = this.handleValueChange.bind(this);

  }
  componentWillMount(){
   
        
  }

  componentDidMount() {
    //this.props.navigation.setParams({ selected : this.onChangeSearch })




    this.props.navigation.setParams({
        handleThis: this.handleValueChange,
    });
}

onChangeSearch = (value) => {
  this.setState({
    selected : value
  });
  // this.props.navigation.setParams({
  //   selected: value,
  // });
};

 
ExpencescreenSeprator = (item) => {
  if(item !== "Add"){
    console.log("Move to Add expences",item )
    this.props.navigation.navigate('Expences',{data :item } );
  }
  else{
    this.props.navigation.navigate('ExpenceField',{data :item } );
  }
}

IncomescreenSeprator = (item) => {
  if(item !== "Add"){
    console.log("Move to Add expences",item )
    this.props.navigation.navigate('Income',{data :item } );
  }
  else{
    this.props.navigation.navigate('IncomeField',{data :item } );
  }
}




handleValueChange(itemValue, itemIndex){
    console.log('itemValue: ',itemValue)
    this.setState({selected:itemValue})
}
  
  static navigationOptions = ({ navigation }) => {
    //title: "Expenses",
   // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    //drawerLabel:  ["Home","Savings","Car","GirlFriend"],
    const {params = {}} = navigation.state;
    // console.log("params ==", navigation.getParam('selected') );
  
    return{
    headerRight:<Picker   style={{height: 50, width: 120}}
    mode="dropdown"
    
    //selectedValue={params.selected}
    
    //selectedValue={(this.state && this.state.selected)}
    // onValueChange={
    //   ( itemValue , itemIndex) => {
    //   console.log('itemValue: ',itemValue )
    //   fed.setState({selected:itemValue})
    // }}
  //  onChangeText={value => this.onChangeSearch(value)}
    onValueChange={ (value) => params.handleThis(value) }>
    {/* {options.map((item, index) => { */}
        <Picker.Item label={'Expences'} value={'Expences'} />
          <Picker.Item label={'Income'} value={'Income'} />
          
         
     {/* }) */}
    {/* } */}
    {/* <Picker.Item label="Expences" value="Expences" />
     <Picker.Item label="Income" value="Income" /> */}
    </Picker>
    }
  }



  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    else if(this.state.selected === 'Expences'){
      return (
        <View
          style={styles.item}>

         <TouchableOpacity
          // onPress={()=>{ this.props.navigation.navigate('Expences',{data :item.text} );  }}
          onPress={ ()=>this.ExpencescreenSeprator(item.text) }>
         <View style={styles.item}>
         {/* <Text style={styles.itemText}></Text> */}        
         <Image
            style={{width: 25, height: 25}}
            source={item.key}
          />
          <Text style={styles.itemText}>{item.text}</Text>   
        </View>
         </TouchableOpacity>      
             </View>
      );
    }
    else{
      return (
        <View
          style={styles.item}>
         <TouchableOpacity
          //  onPress={()=>{ this.props.navigation.navigate('Income',{data :item.text} );  }}
          onPress={ () => this.IncomescreenSeprator(item.text) }
         >
         
         <View style={styles.item}>
         {/* <Text style={styles.itemText}></Text> */}
        
         
         <Image
            style={{width: 25, height: 25}}
            source={item.key}
          />
         
          
          <Text style={styles.itemText}>{item.text}</Text>
          
        </View>
        
         </TouchableOpacity>
            
          
          
        </View>
        
      );
    }
  
  };
  
 
    // signOutUser = async () => {
    //     try {
    //         await firebase.auth().signOut();
    //         console.log("Out");    
    //     } catch (e) {
    //         console.log(e);
    //     }  
    // }

  render() {
    if (this.state.selected === 'Expences') {
      return (
      
        <View style={styles.container}>
                <FlatList
               data={formatData(data, numColumns)}
               style={styles.container}
               renderItem={this.renderItem}
               numColumns={numColumns}
               />         
        </View>
  
      )
  }else{
    return (
      
      <View style={styles.container}>
              <FlatList
             data={formatData2(dataincome, numColumns)}
             style={styles.container}
             renderItem={this.renderItem}
             numColumns={numColumns}
             />         
      </View>

    )
   }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column"
  },
  upper:{
    flex:1,
    backgroundColor:"pink",
    flexDirection:"row"

  },
  lower:{
    flex:4,
    marginVertical: 20,
    
  },
  left:{
    flex:1,
    backgroundColor:"red",
    justifyContent: 'center',
    alignItems: 'center'
  },
  right:{
    flex:1,
    backgroundColor:"yellow",
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    paddingBottom:20,
    color: 'black',
    fontSize:12
  },
})

