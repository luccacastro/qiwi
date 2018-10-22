// BANNER DE PUBLICIDADE DA TELA HOME

import React from 'react';
import { StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class HomeScan extends React.Component{
        render() {
            return(
                <TouchableOpacity>
               <Image resizeMode='contain' source={require('../img/EscanearAgora.png')}
                 style={styles.banner}/>
                 </TouchableOpacity>
            );
        }
    }
    
    const styles = StyleSheet.create({
        banner:{
            height: 160,
            width: 420,
            justifyContent: 'center',            
            alignItems: 'center'                                                
        } 
    });