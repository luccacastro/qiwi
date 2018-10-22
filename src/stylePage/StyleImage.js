import React from 'react';
import { StyleSheet, Image } from 'react-native';


export default class StyleImage extends React.Component{
        render() {
            return(
                <Image source={this.props.imageSource}
                style={styles.image} />
            );
        }
    }
    
    const styles = StyleSheet.create({
        image:{

        },
    });