import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class List extends React.Component{
        render() {
            return(
            <View style={styles.container} >
            <Text style={styles.teste}> List </Text>
            </View>
            );
        }
    }
    
    const styles = StyleSheet.create({
        container:{
        flex:1,
        alignItems: 'center'
        },       
        teste:{
            fontSize: 20,
            textAlign: 'center',
            margin: 10
        }
    });