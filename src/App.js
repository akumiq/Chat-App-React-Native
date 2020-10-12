import React from 'react';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import LoginScreen from '../src/screens/LoginScreen';
import ChatScreen from '../src/screens/ChatScreen';

const Stack = createStackNavigator();

const App = () => {
  const entireScreenWidth = Dimensions.get('window').width;
  EStyleSheet.build({$rem: entireScreenWidth / 320});

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />

        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
