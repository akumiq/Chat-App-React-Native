import React, {useState} from 'react';
import {View, Text, StatusBar, Image, TextInput} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import IconChat from '../assets/icon-chat.png';

const LoginScreen = () => {
  const [data, setData] = useState({name: ''});

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />

      <View style={styles.circle} />

      <Image source={IconChat} style={styles.iconChat} />

      <View style={styles.wrapperLogin}>
        <Text style={styles.textUsername}>Username</Text>

        <TextInput
          placeholder="Username"
          value={data.name}
          onChangeText={(value) => setData({...data, name: value})}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    height: '420rem',
    width: '420rem',
    borderRadius: '420rem',
    backgroundColor: '#ffffff',
    position: 'absolute',
    top: '-40rem',
    left: '-100rem',
  },
  iconChat: {
    height: '100rem',
    width: '100rem',
    alignSelf: 'center',
    marginTop: '50rem',
  },
  wrapperLogin: {
    marginHorizontal: '30rem',
    marginVertical: '10rem',
  },
  textUsername: {
    fontSize: '26rem',
    fontWeight: 'bold',
    color: '#514E5A',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: '30rem',
    borderColor: '#BAB7C3',
    color: '#514E5A',
    marginTop: '12rem',
    paddingVertical: '6rem',
    paddingHorizontal: '15rem',
  },
});
