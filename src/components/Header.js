import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
    <View style = {style.container}>
        <Text style = {style.title}>{props.title}</Text>
    </View>
);

/*class Header extends React.Component {
    render(){

    }
}
*/

const style = StyleSheet.create({
    container: {
            marginTop: 25,
            backgroundColor: '#4045AD',
            alignItems: 'center',
            justifyContent: 'center'

    },
    title: {
        fontSize: 50,
        color: '#fff'
    }
});




export default Header;