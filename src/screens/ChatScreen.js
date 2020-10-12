import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Ini Chat Screen</Text>
    </View>
  );
};

export default ChatScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textTitle: {
    textAlign: 'center',
  },
});
