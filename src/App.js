import React from 'react';
import {Dimensions, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const App = () => {
  const entireScreenWidth = Dimensions.get('window').width;
  EStyleSheet.build({$rem: entireScreenWidth / 320});

  return <Text>Ini Chat App</Text>;
};

export default App;
