import React from 'react';
import { View } from 'react-native';

import Init from '../components/Init';

export default class pageScreens extends React.Component{
    constructor(props){
        super(props);
    }
    render(){ 
  return(
      <View>
        <Init />
      </View>
        );
    }
}


