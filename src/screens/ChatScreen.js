import React from 'react';
import {LogBox, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDWcfQID0ZRdiHhthXeLGSwDHpdgAuNUyc',
  authDomain: 'chat-app-e6405.firebaseapp.com',
  databaseURL: 'https://chat-app-e6405.firebaseio.com',
  projectId: 'chat-app-e6405',
  storageBucket: 'chat-app-e6405.appspot.com',
  messagingSenderId: '347009828405',
  appId: '1:347009828405:web:2fcda68202c9ec69b7d37c',
  measurementId: 'G-381EC7QMF5',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const chatRef = db.collection('chats');

LogBox.ignoreLogs(['Setting a timer for a long period of time']);

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
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  textTitle: {
    textAlign: 'center',
  },
});
