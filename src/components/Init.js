// TELA INICIO ~ DESENHO 

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class Init extends React.Component{
  static navigationOptions = {
    header: null
}
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>QIWI</Text>
      </View>
        <Text style={styles.titleSub}>Poupe seu tempo </Text>

        <TouchableOpacity onPress={() => this.props.navigation.push('Login')} >
          <Image
          style={styles.logo}
          source={require('../img/skeleton.png')} /> 
     
        </TouchableOpacity>

      </View>
  );
  
    }}
/*render(){
  this.props.navigation.navigate('LoginPage');
  return(
    <View>
      <Login />
    </View>
  )
}*/

const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor: '#EDF736'
},

logo: {
width: 400,
height: 400,
alignItems: 'center',
marginTop: 50,
marginLeft: 30
},
titleContainer:{
flexDirection: "column",
alignItems: 'center'
},
title:{
fontSize:45,
color: '#E95A58',
marginTop: 100
},
titleSub: {
fontSize: 35,
color: '#9898CB',
textAlign: 'center'
}

});
