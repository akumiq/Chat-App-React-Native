import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Ini Login Screen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textTitle: {
    textAlign: 'center',
  },
});
