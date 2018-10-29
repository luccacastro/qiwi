import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Cart extends React.Component{
        render() {
            return(
            <View style={styles.container} >

                <Image style={styles.cart} source={require('../img/shopCart.png')}/> 
                <Text style={styles.textEmpty}> Seu carrinho está vazio :( </Text>
                <Text style={styles.addItens}> Adicione itens no seu carrinho  </Text>
            </View>
            );
        }
    }
    
    const styles = StyleSheet.create({
        container:{
        flex:1,
        alignItems: 'center'
        },
        textEmpty:{
            fontSize: 25,
            textAlign: 'center',
            color: '#969FAA'
        },
        addItens:{
            fontSize: 18,
            textAlign: 'center',
            color: '#969FAA'
        },
        cart:{
            width: 400,
            height: 400,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60
        }
    });