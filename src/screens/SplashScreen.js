import React, {useEffect} from 'react';
import {View, StatusBar, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as firebase from 'firebase';

import imgLogo from '../assets/mq.png';

const SpalshScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user === null) {
          navigation.navigate('LoginScreen');
        } else {
          navigation.navigate('ChatScreen');
        }
      });
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#949599"
        barStyle="dark-content"
      />

      <Image source={imgLogo} style={styles.img} />
    </View>
  );
};

export default SpalshScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#949599',
    justifyContent: 'center',
  },
  img: {
    height: '100rem',
    width: '110rem',
    alignSelf: 'center',
  },
});
