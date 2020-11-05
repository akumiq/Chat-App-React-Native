import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {showMessage} from 'react-native-flash-message';
import Ionicons from 'react-native-vector-icons/Ionicons';

import IconChat from '../assets/icon-chat.png';

import Fire from '../auth/Fire';
import {storeData} from '../auth/LocalStorage';

const LoginScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [user, setUser] = useState(null);

  const onSubmit = async () => {
    if (name !== '') {
      Fire.auth()
        .signInAnonymously()
        .then((res) => {
          Fire.database()
            .ref(`users/${res.user.uid}/`)
            .once('value')
            .then((resDB) => {
              const _id = Math.random().toString(36).substring(7);
              const users = {_id, name};
              storeData('user', users);

              if (resDB.val()) {
                navigation.navigate('ChatScreen', user);
                setUser(users);
              }
            });
        })
        .catch((err) => {
          showMessage({
            message: err.message,
            type: 'default',
            position: 'top',
            backgroundColor: '#c0392b',
            color: '#FFFFFF',
            style: {
              marginTop: 20,
              alignItems: 'center',
            },
          });
        });
    }
  };

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
          value={name}
          onChangeText={(value) => setName(value)}
          style={styles.textInput}
        />
      </View>

      <View style={styles.wrapperButton}>
        <TouchableOpacity onPress={() => onSubmit()} style={styles.btnSubmit}>
          <Ionicons name="arrow-forward" color="#ffffff" size={28} />
        </TouchableOpacity>
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
  wrapperButton: {
    alignItems: 'flex-end',
    marginTop: '35rem',
  },
  btnSubmit: {
    height: '40rem',
    width: '40rem',
    borderRadius: '40rem',
    backgroundColor: '#9075E3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20rem',
  },
});
