import React, {useState, useEffect, useCallback} from 'react';
import {LogBox, SafeAreaView, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {GiftedChat} from 'react-native-gifted-chat';
import * as firebase from 'firebase';
import 'firebase/firestore';

import {getData} from '../auth/LocalStorage';

const db = firebase.firestore();
const chatRef = db.collection('chats');

LogBox.ignoreLogs(['Setting a timer for a long period of time']);

const ChatScreen = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    readUser();

    const unSubscribe = chatRef.onSnapshot((querySnapshot) => {
      const messageFirestore = querySnapshot
        .docChanges()
        .filter(({type}) => type === 'added')
        .map(({doc}) => {
          const messages = doc.data();
          return {...messages, createdAt: messages.createdAt.toDate()};
        })
        .sort(({a, b}) => b.createdAt.getTime() - a.createdAt.getTime());

      appendMessage(messageFirestore);
    });

    return () => unSubscribe();
  }, [appendMessage]);

  const readUser = async () => {
    const users = await getData('user');
    if (users) {
      setUser(JSON.parse(users));
    }
  };

  const appendMessage = useCallback((messages) => {
    setMessage((prev) => GiftedChat.append(prev, messages));
  }, []);

  const onHandleSend = async (messages) => {
    const writes = messages.map((m) => chatRef.add(m));
    await Promise.all(writes);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />

      <GiftedChat
        key={(index) => index.toString()}
        onSend={onHandleSend}
        messages={message}
        user={user}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
