import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { firebaseDatabase } from '../utility/Utility';

import { BarCodeScanner, Permissions } from 'expo';

export default class Scan extends React.Component {
  navigationOptions = {
    header: 'Scanner', 
}
    state = {
        hasCameraPermission: null,
      };
    
      componentDidMount() {
        this._requestCameraPermission();
      }
    
      _requestCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
          hasCameraPermission: status === 'granted',
        });
      };
    
      _handleBarCodeRead = data => {
        Alert.alert('Leitura concluída!!');
        var str = JSON.stringify(data)
        var itemsRef = firebaseDatabase.ref('Scan');
        var item = { dados: str }
        itemsRef.push(item);
      };
    
      render() {
        return (
            
          <View style={styles.container}>
            {this.state.hasCameraPermission === null ?
              <Text>Aceitar permissão de camera</Text> :
              this.state.hasCameraPermission === false ?
                <Text>Permissão negada</Text> :
                <BarCodeScanner
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{ height: 450, width: 600 }}
                />
            }
          </View>
          
        );
      }

     /* handleBarCodeScanned = ({ type, data }) => {
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      } */
}
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }
    });
    