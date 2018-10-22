// FLATLIST DA TELA HOME ~ Imagens de empresas parceiras

import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, FlatList} from 'react-native';

const showList = [
    {
        key: 1,
        name: 'extra',
        image: 'https://seeklogo.com/images/E/extra-logo-66E421197A-seeklogo.com.png'
    },
    {
        key: 2,
        name: 'paodeacucar',
        image: 'https://g.l2.hypercdn.sk/com.br/data/16/logo.png'
        
    },
    {
        key: 3, 
        name: 'walmart',
        image: 'https://s3.amazonaws.com/s3origin.purch.com/s3_uploader-production/Store/20295/logo_image_url.png'
    }, 
    {
        key: 3, 
        name: 'dia',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_de_Dia.png'
    },
    {
        key: 4, 
        name: 'carrefour',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Carrefour_logo_no_tag.svg/97px-Carrefour_logo_no_tag.svg.png'
    },
    {
        key: 5, 
        name: 'americanas',
        image: 'http://viavalegardenshopping.com.br/wp-content/uploads/2016/05/Logo-lojas-08-300x178.png'
    }
]


 class List extends Component{
    _renderItem(item){
        return(
            <Image style={styles.imageList}
                source={{uri: item.image}} />       
        )
    }
        render() {
            
            return(
                <View style={styles.container}>
                <Text>Encontre a sua loja :D </Text>
                    <FlatList 
                        numColumns={2}
                        
                        renderItem={({item}) => this._renderItem(item)}
                        data={showList}
                        
                        />
                </View>
            )
        }
    }

    const styles = StyleSheet.create({
        container:{
            flex: 1,
        },
        imageList:{
            width: 200,
            height: 200
        }

    });

    export default List;