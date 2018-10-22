import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

import { BarCodeScanner, Permissions } from 'expo';

export default class Scan extends React.Component {
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
        Alert.alert(
          'Leitura concluída!!',
          JSON.stringify(data)
        );
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
    